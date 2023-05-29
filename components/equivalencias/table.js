import Parameter from "./parameter";
import { React, useState, useEffect } from "react";
import ButtonPlus from "../common/buttonPlus";
import TableLayout from "../common/tableLayout";

export default function Table() {
    const [parametersData, setParametersData] = useState({});
    const [parameters, setParameters] = useState([]);
    const [parameterId, setParameterId] = useState(1);

    const removeParameter = (idToRemove) => {
        setParameters(parameters.filter((parameter) => parameter.id !== idToRemove));

        const updatedParameterData = { ...parametersData };
        delete updatedParameterData[idToRemove];
        setParametersData(updatedParameterData);
    };

    const handleDataChange = (id, parameterName, data) => {
        setParametersData((prevData) => ({
            ...prevData,
            [id]: {
                parameterName: parameterName,
                equivalenceClasess: data,
            },
        }));
    };

    const addParameter = () => {
        const newParameter = (
            <Parameter key={parameterId} id={parameterId} onDataChange={handleDataChange} onDelete={removeParameter} />
        );
        setParameters([...parameters, { id: parameterId}]);
        setParameterId(parameterId + 1);
    };

    useEffect(() => {
        addParameter();
    }, []);

    function transformTable(table) {
        return Object.values(table).reduce((acc, curr) => {
            const parameterName = curr.parameterName;
            if (parameterName) {
                const equivalenceClasess = Object.values(curr.equivalenceClasess).reduce(
                    (equivalenceAcc, equivalenceCurr) => {
                        const name = equivalenceCurr.name;
                        const value = equivalenceCurr.value;
                        const valid = equivalenceCurr.valid;
                        if (!name || !value) {
                            throw new Error(
                                `Clase de equivalencia invalida en el index ${index} para el parámetro ${parameterName}`
                            );
                        }
                        equivalenceAcc[name] = { value, valid };
                        return equivalenceAcc;
                    },
                    {}
                );
                acc[parameterName] = equivalenceClasess;
            }
            return acc;
        }, {});
    }

    function getData() {
        const inputObj = parametersData;

        const isEmpty = (obj) => {
            for (let key in obj) {
                if (obj.hasOwnProperty(key) && obj[key]) {
                    return false;
                }
            }
            return true;
        };

        for (let key in inputObj) {
            if (isEmpty(inputObj[key].equivalenceClasess)) {
                throw new Error(
                    `El parámetro {${inputObj[key].parameterName}} debe tener al menos una clase de equivalencia.`
                );
            }

            for (let ecKey in inputObj[key].equivalenceClasess) {
                if (!inputObj[key].equivalenceClasess[ecKey].name || !inputObj[key].equivalenceClasess[ecKey].value) {
                    throw new Error(
                        `El nombre y valor para la clase de equivalencia {${ecKey}} del parámetro {${inputObj[key].parameterName}} no puede se vacio`
                    );
                }
            }
        }

        return transformTable(inputObj);
    }

    return (
        <TableLayout getData={getData} technique={"PE"}>
            {parameters.map((param) => (
                <Parameter key={param.id} id={param.id} onDataChange={handleDataChange} onDelete={removeParameter} />
            ))}
            <ButtonPlus
                key={"button-parameter-plus"}
                id={0}
                placement="right"
                info="Agregar parámetro"
                onClick={addParameter}
                classes={"text-primary"}
            />
        </TableLayout>
    );
}
