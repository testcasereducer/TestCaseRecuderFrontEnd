import TableLayout from "../common/tableLayout";
import { useState } from "react";
import ButtonPlus from "../common/buttonPlus";
import ButtonX from "../common/buttonX";

export default function Table() {
    const [parametersData, setParametersData] = useState({
        1: { name: "", values: ["", "", "", ""] },
        2: { name: "", values: ["", "", "", ""] },
        3: { name: "", values: ["", "", "", ""] },
        4: { name: "", values: ["", "", "", ""] },
    });

    const handleParamNameChange = (event, id) => {
        const updatedParametersData = { ...parametersData };
        updatedParametersData[id].name = event.target.value;
        setParametersData(updatedParametersData);
    };

    const handleParamValueChange = (event, id, index) => {
        const updatedParametersData = { ...parametersData };
        updatedParametersData[id].values[index] = event.target.value;
        setParametersData(updatedParametersData);
    };

    const addParameter = () => {
        const newId = Object.keys(parametersData).length + 1;
        setParametersData({
            ...parametersData,
            [newId]: { name: "", values: [] },
        });
    };

    const removeParameter = (id) => {
        const updatedParametersData = { ...parametersData };
        delete updatedParametersData[id];
        setParametersData(updatedParametersData);
    };

    const addValueRow = () => {
        const updatedParametersData = { ...parametersData };
        Object.keys(updatedParametersData).forEach((id) => {
            updatedParametersData[id].values.push("");
        });
        setParametersData(updatedParametersData);
    };

    const removeValueRow = (index) => {
        const updatedParametersData = { ...parametersData };
        Object.keys(updatedParametersData).forEach((id) => {
            updatedParametersData[id].values.splice(index, 1);
        });
        setParametersData(updatedParametersData);
    };

    const validateAndCleanData = () => {
        const transformedData = {};
        const parameterNames = new Set();

        for (const [id, param] of Object.entries(parametersData)) {
            if (param.name === "" && param.values.some((value) => value !== ""))
                throw new Error(`El parámetro con id ${id} tiene valores pero no tiene nombre.`);

            if (param.values.length === 0)
                throw new Error(`El parámetro con id ${id} no tiene valores.`);

            if (parameterNames.has(param.name) ) 
                throw new Error(`El parámetro con nombre "${param.name}" ya existe.`);
            
            if (param.name !== "") {
                transformedData[param.name] = param.values.filter((value) => value !== "");
                parameterNames.add(param.name);
            }
        }

        return transformedData;
    };


    const getData = () => {
        return validateAndCleanData(parametersData);
    }
    return (
        <TableLayout getData={getData} technique={"OA"}>
            <div className="row">
                <div className="input-group">
                    {Object.keys(parametersData).length > 0 && (
                        Object.entries(parametersData).map(([id, param]) => (
                            <div className="col d-flex flex-column align-items-center" key={id}>
                                <ButtonX
                                    key={`button-x-param-${id}`}
                                    id={`button-x-param-${id}`}
                                    placement="top"
                                    info="Eliminar parámetro"
                                    onClick={() => removeParameter(id)}
                                />
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Parámetro"
                                    id={id}
                                    value={param.name}
                                    onChange={(event) => handleParamNameChange(event, id)}
                                />
                                <i className="bi bi-arrow-down"></i>
                            </div>
                        )))}

                        <ButtonPlus
                            key={`button-plus-param`}
                            id={`button-plus-param`}
                            placement="right"
                            info="Agregar parámetro"
                            classes={"text-primary ms-2 mt-3"}
                            onClick={() => addParameter()}
                        />
                </div>
            </div>

            <div className="row">
                { Object.keys(parametersData).length > 0 && (
                    parametersData[Object.keys(parametersData)[0]].values.map((_, rowIndex) => (
                        <div className="input-group" key={`row-${rowIndex}`}>
                            {Object.entries(parametersData).map(([id, param]) => (
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Valor"
                                    id={`${id}.${rowIndex + 1}`}
                                    key={`${id}.${rowIndex + 1}`}
                                    value={param.values[rowIndex]}
                                    onChange={(event) => handleParamValueChange(event, id, rowIndex)}
                                />
                            ))}
                            <ButtonX
                                key={`button-x-values-${rowIndex}`}
                                id={`button-x-values-${rowIndex}`}
                                placement="bottom"
                                info="Eliminar fila de valores"
                                classes={"me-3 ms-2 mt-1"}
                                onClick={() => removeValueRow(rowIndex)}
                            />
                        </div>
                    )))}

            </div>
            { Object.keys(parametersData).length > 0 && (
                <ButtonPlus
                    key={`button-plus-values`}
                    id={`button-plus-values`}
                    placement="right"
                    info="Agregar fila de valores"
                    classes={"text-primary"}
                    onClick={() => addValueRow()}
                />
            )}
        </TableLayout>
    );
}
