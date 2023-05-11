import { useState } from "react";
import ButtonX from "../common/buttonX";
import { Tooltip } from "../../node_modules/reactstrap";

export default function InputLambda({ id, onDelete, onDataChange }) {
    const [lambda, setLambda] = useState("");
    const [step, setStep] = useState("");
    const [tooltip, setTooltip] = useState(false);

    const toggleTooltip = () => {
        setTooltip(!tooltip);
    };

    const handleLambdaChange = (e) => {
        setLambda(e.target.value);
        onDataChange(id, e.target.value, step);
    };
    const handleStepChange = (e) => {
        setStep(e.target.value);
        onDataChange(id, lambda, e.target.value);
    };

    return (
        <div className="row">
            <div className="input-group input-group-sm">
                <div className="input-group-text text-primary">Lambda x :</div>
                <input
                    className="form-control form-control-sm"
                    placeholder=""
                    style={{ width: "40%" }}
                    value={lambda}
                    onChange={handleLambdaChange}
                />

                <input
                    id={`tooltip-lambda-step-${id}`}
                    type="number"
                    step="0.1"
                    className="form-control form-control-sm small me-2"
                    placeholder="paso"
                    value={step}
                    onChange={handleStepChange}
                />

                <Tooltip
                    key={`tooltip-lambda-step-${id}`}
                    target={`tooltip-lambda-step-${id}`}
                    isOpen={tooltip}
                    toggle={() => toggleTooltip()}
                    placement="top">
                    El paso es el incremento de x
                </Tooltip>

                <ButtonX
                    key={`button-equiv-x-${id}`}
                    id={id}
                    placement="right"
                    info="Eliminar Lambda"
                    onClick={() => onDelete(id)}
                />
            </div>
        </div>
    );
}
