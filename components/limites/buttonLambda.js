import { Tooltip } from "../../node_modules/reactstrap";
import { useState } from "react";

export default function ButtonLambda({ id, onClick, placement, info, classes }) {
    const [tooltip, setTooltip] = useState(false);
    const toggleTooltip = () => {
        setTooltip(!tooltip);
    };

    return (
        <>
            <div
                className={`icon-circle ${classes} `}
                style={{
                    cursor: "pointer",
                    fontSize: "2rem",
                }}
                onClick={onClick}
                id={`tooltip-${id}`}>
                <div className="symbol-lambda">&#x03BB;</div>
            </div>

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
