import { useState } from "react";
import ButtonX from "../common/buttonX";
import { Tooltip } from "../../node_modules/reactstrap";

export default function EquivalenceClass({ id, onDelete, onDataChange }) {
    const [equivalenceName, setEquivalenceName] = useState("");
    const [equivalenceValue, setEquivalenceValue] = useState("");
    const [equivalenceValid, setEquivalenceValid] = useState(true);
    const [tooltip, setTooltip] = useState(false);

    const toggleTooltip = () => {
        setTooltip(!tooltip);
    };

    const handleEquivalenceNameChange = (e) => {
        setEquivalenceName(e.target.value);
        onDataChange(id, e.target.value, equivalenceValue, equivalenceValid);
    };

    const handleEquivalenceValueChange = (e) => {
        setEquivalenceValue(e.target.value);
        onDataChange(id, equivalenceName, e.target.value, equivalenceValid);
    };

    const handleCheckboxChange = (e) => {
        setEquivalenceValid(e.target.checked);
        onDataChange(id, equivalenceName, equivalenceValue, e.target.checked);
    };

    return (
        <div className="row">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Nombre equivalencia"
                    value={equivalenceName}
                    onChange={handleEquivalenceNameChange}
                />
                <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Representante"
                    value={equivalenceValue}
                    onChange={handleEquivalenceValueChange}
                />
                <div className="form-check form-switch ms-2 d-flex align-items-center">
                    <Tooltip
                        key={`tooltip-checkbox-${id}`}
                        target={`tooltip-checkbox-${id}`}
                        isOpen={tooltip}
                        toggle={() => toggleTooltip()}
                        placement="top">
                        Establecer clase a {equivalenceValid ? "no válida" : "válida"}
                    </Tooltip>

                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`tooltip-checkbox-${id}`}
                        checked={equivalenceValid}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <ButtonX
                    key={`button-equiv-x-${id}`}
                    id={id}
                    placement="right"
                    info="Eliminar clase"
                    onClick={() => onDelete(id)}
                />
            </div>
        </div>
    );
}
