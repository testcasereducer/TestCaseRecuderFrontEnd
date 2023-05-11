import Technique from "./technique";
import techniques from "../public/techniques.json";

export default function Techniques() {
    return (
        <div className="row justify-content-center d-flex align-items-stretch">
            {techniques.map(({ id, title, description, link, iconName }) => (
                <Technique key={id} title={title} description={description} link={link} iconName={iconName} />
            ))}
        </div>
    );
}
