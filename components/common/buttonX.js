import { Tooltip } from "../../node_modules/reactstrap";
import { useState } from "react";

export default function ButtonX({ id, placement, info, onClick, classes = "mt-1 me-2" }) {
    const [tooltip, setTooltip] = useState(false);

    const toggleTooltip = () => {
        setTooltip(!tooltip);
    };

    const handleClick = () => {
        setTooltip(!tooltip);
        onClick();
    };

    return (
        <>
            <i
                className={`bi bi-x ${classes}`}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                id={`tooltip-x-${id}`}
            />

            {
                <Tooltip
                    key={`tooltip-x-${id}`}
                    target={`tooltip-x-${id}`}
                    isOpen={tooltip}
                    toggle={() => toggleTooltip()}
                    placement={placement}>
                    {info}
                </Tooltip>
            }
        </>
    );
}
