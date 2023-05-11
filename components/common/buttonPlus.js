import { Tooltip } from "../../node_modules/reactstrap";
import { useState } from "react";

export default function ButtonPlus({ id, placement, info, onClick, classes }) {
    const [tooltip, setTooltip] = useState(false);
    const toggleTooltip = () => {
        setTooltip(!tooltip);
    };

    return (
        <>
            <i
                className={`btn-plus bi bi-node-plus-fill text-end ${classes} `}
                style={{ cursor: "pointer", fontSize: "2rem" }}
                onClick={onClick}
                id={`tooltip-${id}`}
            />
            <Tooltip
                key={`tooltip-${id}`}
                target={`tooltip-${id}`}
                isOpen={tooltip}
                toggle={() => toggleTooltip()}
                placement={placement}>
                {info}
            </Tooltip>
        </>
    );
}
