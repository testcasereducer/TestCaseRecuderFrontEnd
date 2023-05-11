

export default function MainSectionTech({title, description}) {
    return (
        <div className="text-center w-0">
            <h1 className="display-2" style={{fontWeight: 'bold'}}>{title}</h1>
            <p className="lead mt-4">{description}</p>
        </div>
    )
}