import * as XLSX from "xlsx";
import { React, useState } from "react";
import { API_KEY, API_URL } from "../utilities/env";

function generateMergedCells(parameters) {
    const mergedCells = [];
    let cellIndex = 0;
    parameters.forEach(() => {
        mergedCells.push({ s: { r: 0, c: cellIndex }, e: { r: 0, c: cellIndex + 1 } });
        cellIndex += 2;
    });
    return mergedCells;
}

function generateHeaderRow(parameters) {
    const headerRow = [];
    parameters.forEach((param) => {
        headerRow.push(param);
        headerRow.push("");
    });
    return headerRow;
}

function generateSubHeaderRow(parameters) {
    const subHeaderRow = [];
    parameters.forEach(() => {
        subHeaderRow.push("equiv_class");
        subHeaderRow.push("value");
    });
    return subHeaderRow;
}

function downloadXLSXFileF1(jsonData, fileName) {
    const ws_name = ["Valid", "Invalid"];
    const wb = XLSX.utils.book_new();

    jsonData.forEach((data, index) => {
        if (data.length === 0) {
            return; // Si el conjunto de datos está vacío, salta al siguiente.
        }

        const firstItem = data[0];
        const parameters = Object.keys(firstItem);

        const ws_data = [generateHeaderRow(parameters), generateSubHeaderRow(parameters)];

        data.forEach((item) => {
            const row = [];
            parameters.forEach((param) => {
                row.push(item[param].equiv_class);
                row.push(item[param].value);
            });
            ws_data.push(row);
        });

        const ws = XLSX.utils.aoa_to_sheet(ws_data);
        ws["!merges"] = generateMergedCells(parameters);

        XLSX.utils.book_append_sheet(wb, ws, ws_name[index]);
    });
    XLSX.writeFile(wb, fileName);
}


function downloadXLSXFileF2(jsonData, fileName) {
    const keys = jsonData.keys;
    const array = jsonData.array;
  
    const ws_data = [keys, ...array];
    const ws_name = "Sheet1";
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, ws_name);
    XLSX.writeFile(wb, fileName)
}

export const downloadJSONFile = (content, fileName) => {
    const jsonContent = JSON.stringify(content, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
};

export default function TableLayout({ children, getData, technique }) {

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCloseAlert = () => {
        setErrorMessage("");
    };

    const handleGenerateCases = async (typeFile) => {
        try {
            const data = getData();

            if (Object.keys(data).length == 0) {
                setErrorMessage("No hay parametros que procesar.");
            } else {

                setErrorMessage("");
                setLoading(true);
                
                const parameters = JSON.stringify(data);
                const url = `${API_URL}?api_key=${API_KEY}&technique=${technique}&parameters=${parameters}`;
                const response = await fetch(url);
                const content = await response.json();

                setLoading(false);

                if (content["error"]) throw new Error(content["error-message"]);

                if (typeFile === "json") {
                    const fileName = `test_cases_${new Date().toISOString()}.json`;
                    downloadJSONFile(content, fileName);
                } else if (typeFile === "xlsx") {
                    const fileName = `test_cases_${new Date().toISOString()}.xlsx`;
                    const data = content["test-cases"];

                    if (technique !== "OA") 
                       downloadXLSXFileF1([data.valids, data.invalids], fileName, technique);
                    else 
                        downloadXLSXFileF2(data, fileName);
                }
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{ maxWidth: "50rem" }}>
                <div className="card-header bg-light d-flex align-items-center justify-content-start">
                    <div className="flex-grow-1">
                        <p className="fw-bold text-primary mb-0">Entrada</p>
                    </div>
                </div>
                <div className="card-body">{children}</div>

                <div className="card-footer text-end bg-light d-flex ">
                    <div className="flex-grow-1 d-flex">
                        {loading && (
                            <div className="spinner-grow text-primary ms-auto me-auto" role="status">
                                <span className="visually-hidden">Gererando casos...</span>
                            </div>
                        )}
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="input-group input-group-sm" role="group">
                            <span className="input-group-text bg-primary text-light">Generar casos</span>
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => handleGenerateCases("xlsx")}>
                                xlsx
                                <i className="bi bi-download ms-2" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => handleGenerateCases("json")}>
                                Json
                                <i className="bi bi-download ms-2" />
                            </button>
                        </div>
                    </div>
                </div>

                {errorMessage && (
                    <div className="p-2">
                        <div
                            className="alert alert-danger alert-sm d-flex align-items-center justify-content-between"
                            role="alert"
                            style={{ height: "1rem" }}>
                            <div className="flex-grow-1">{errorMessage}</div>
                            <button
                                type="button"
                                className="btn-close btn-sm"
                                onClick={handleCloseAlert}
                                aria-label="Close"
                                style={{
                                    width: "0.75rem",
                                    height: "0.75rem",
                                    fontSize: "0.5rem",
                                    padding: "0",
                                }}></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
