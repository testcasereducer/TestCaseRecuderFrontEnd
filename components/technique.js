
import Link from "next/link"

export default function Technique({title, description, link, iconName}) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3" >
            <div className="card text-center d-flex  h-100 ">
                <div className="card-body d-flex flex-column">
                    <i className={`bi ${iconName}`} style={{fontSize: '3em'}}></i>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <Link href={link} className="btn btn-outline-primary btn-sm mt-auto">
                        Try Algortimo
                        <i className="ms-1 bi bi-box-arrow-up-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}