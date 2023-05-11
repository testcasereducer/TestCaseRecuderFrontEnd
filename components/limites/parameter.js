import EquivalenceClass from "../equivalencias/equivalenceClass";
import { useState, useEffect } from "react";
import ButtonPlus from "../common/buttonPlus";
import ButtonX from "../common/buttonX";
import ButtonLambda from "./buttonLambda";
import InputLambda from "./inputLambda";

export default function Parameter({ id, onDelete, onDataChange }) {
    const [parameterName, setParameterName] = useState("");
    const [equivalenceClassesData, setEquivalenceClassesData] = useState({});
    const [equivalenceClasses, setEquivalenceClasses] = useState([]);
    const [equivalenceClassId, setEquivalenceClassId] = useState(1);
    const [btnLambdaAvailable, setBtnLambdaAvailable] = useState(true);
    const [btnClassAvailable, setBtnClassAvailable] = useState(true);

    const handleDataChangeEquivClass = (idClass, name, value, valid) => {
        setEquivalenceClassesData((prevData) => ({
            ...prevData,
            [idClass]: { name, value, valid },
        }));

        onDataChange(id, parameterName, {
            ...equivalenceClassesData,
            [idClass]: { name, value, valid },
        });
    };

    const handleDataChangeLambda = (idClass, lambda, step) => {
        setEquivalenceClassesData((prevData) => ({
            ...prevData,
            [idClass]: { lambda, step },
        }));

        onDataChange(id, parameterName, {
            ...equivalenceClassesData,
            [idClass]: { lambda, step },
        });
    };

    const removeEquivalenceClass = (idToRemove) => {
        setEquivalenceClasses(equivalenceClasses.filter((equivalenceClass) => equivalenceClass.id !== idToRemove));

        const updatedEquivalenceClassesData = { ...equivalenceClassesData };
        delete updatedEquivalenceClassesData[idToRemove];
        setEquivalenceClassesData(updatedEquivalenceClassesData);
        onDataChange(id, parameterName, {
            ...updatedEquivalenceClassesData,
        });
    };

    const addEquivalenceClass = () => {
        const newEquivalenceClass = (
            <EquivalenceClass
                key={equivalenceClassId}
                id={equivalenceClassId}
                onDelete={removeEquivalenceClass}
                onDataChange={handleDataChangeEquivClass}
            />
        );

        setEquivalenceClasses([
            ...equivalenceClasses,
            {
                id: equivalenceClassId,
                component: newEquivalenceClass,
                type: "equivalence",
            },
        ]);
        setEquivalenceClassId(equivalenceClassId + 1);
        setBtnLambdaAvailable(false);
    };

    const addLambda = () => {
        const newLambda = (
            <InputLambda
                key={equivalenceClassId}
                id={equivalenceClassId}
                onDelete={removeEquivalenceClass}
                onDataChange={handleDataChangeEquivClass}
            />
        );

        setEquivalenceClasses([
            ...equivalenceClasses,
            { id: equivalenceClassId, component: newLambda, type: "lambda" },
        ]);
        setEquivalenceClassId(equivalenceClassId + 1);

        setBtnLambdaAvailable(false);
        setBtnClassAvailable(false);
    };

    const handleParameterNameChange = (e) => {
        setParameterName(e.target.value);
        onDataChange(id, e.target.value, {
            ...equivalenceClassesData
        });
    };

    useEffect(() => {
        if (equivalenceClasses.length == 0) {
            setBtnClassAvailable(true);
            setBtnLambdaAvailable(true);
        }
    }, [equivalenceClassesData]);

    useEffect(() => {
        addLambda();
    }, [])

    return (
        <div className="row d-flex justify-content-start align-items-center mb-2">
            <div className="col col-lg-3 col-md-3 col-sm-9">
                <div className="input-group">
                    <ButtonX
                        key={`button-param-x-${id}`}
                        id={`button-param-x-${id}`}
                        placement="left"
                        info="Eliminar parámetro"
                        onClick={() => onDelete(id)}
                    />

                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Parametro"
                        onChange={handleParameterNameChange}
                    />
                </div>
            </div>
            <div className="col col-lg-9 col-md-9 col-sm-3 d-inline-block" style={{ minWidth: "300px" }}>
                {equivalenceClasses.map((ec) => (
                    <div key={ec.id}>
                        {ec.type === "equivalence" ? (
                            <EquivalenceClass
                                id={ec.id}
                                onDelete={removeEquivalenceClass}
                                onDataChange={handleDataChangeEquivClass}
                            />
                        ) : (
                            <InputLambda
                                id={ec.id}
                                onDelete={removeEquivalenceClass}
                                onDataChange={handleDataChangeLambda}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="d-inline-flex justify-content-end  align-items-center" style={{ lineHeight: "2rem" }}>
                {btnClassAvailable && (
                    <ButtonPlus
                        key={`button-plus-class-${id}`}
                        id={`button-plus-class-${id}`}
                        placement="left"
                        info="Agregar clase"
                        classes={"text-primary"}
                        onClick={addEquivalenceClass}
                    />
                )}
                {btnLambdaAvailable && (
                    <ButtonLambda
                        key={`button-lambda-${id}`}
                        id={`button-lambda-${id}`}
                        placement="right"
                        info="Agregar Lambda"
                        classes={"text-primary ms-1 bg-success"}
                        onClick={addLambda}
                    />
                )}
            </div>
        </div>
    );
}
