import EquivalenceClass from "./equivalenceClass";
import { useState, useEffect } from "react";
import ButtonPlus from "../common/buttonPlus";
import ButtonX from "../common/buttonX";

export default function Parameter({ id, onDelete, onDataChange }) {
    const [parameterName, setParameterName] = useState("");
    const [equivalenceClassesData, setEquivalenceClassesData] = useState({});
    const [equivalenceClasses, setEquivalenceClasses] = useState([]);
    const [equivalenceClassId, setEquivalenceClassId] = useState(1);

    const handleDataChange = (idClass, name, value, valid) => {
        setEquivalenceClassesData((prevData) => ({
            ...prevData,
            [idClass]: { name, value, valid },
        }));

        onDataChange(id, parameterName, {
            ...equivalenceClassesData,
            [idClass]: { name, value, valid },
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
                onDataChange={handleDataChange}
            />
        );

        setEquivalenceClasses([...equivalenceClasses, { id: equivalenceClassId, component: newEquivalenceClass }]);
        setEquivalenceClassId(equivalenceClassId + 1);
    };

    const handleParameterNameChange = (e) => {
        setParameterName(e.target.value);
        onDataChange(id, e.target.value, {
            ...equivalenceClassesData
        });
    };

    useEffect(() => {
        if (equivalenceClasses.length == 0 && equivalenceClassId > 1) onDelete(id);
    }, [equivalenceClassesData]);

    useEffect(() => {
        addEquivalenceClass();
    }, []);

    return (
        <div className="row d-flex justify-content-start align-items-center mb-2">
            <div className="col col-lg-3 col-md-3 col-sm-3">
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
                        value={parameterName}
                        onChange={handleParameterNameChange}
                    />
                </div>
            </div>
            <div className="col col-lg-9 col-md-9 col-sm-9">
                {equivalenceClasses.map((ec) => (
                    <EquivalenceClass
                        key={ec.id}
                        id={ec.id}
                        onDelete={removeEquivalenceClass}
                        onDataChange={handleDataChange}
                    />
                ))}
            </div>

            <div className="d-inline-flex justify-content-end  align-items-start" style={{ lineHeight: "2rem" }}>
                <ButtonPlus
                    key={`button-plus-${id}`}
                    id={`button-plus-${id}`}
                    placement="left"
                    info="Agregar clase"
                    onClick={addEquivalenceClass}
                    classes={"text-primary"}
                />
            </div>
        </div>
    );
}
