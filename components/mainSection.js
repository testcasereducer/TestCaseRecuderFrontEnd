import Link from "next/link";
export default function MainSection() {
    return (
        <div className="text-center">
            <h1 className="display-1" style={{ fontWeight: "bold" }}>
                Reduce pruebas con técnicas avanzadas!
            </h1>
            {/* <p className="lead mt-4">
                Optimiza tus pruebas de software y ahorra tiempo y recursos con nuestra herramienta avanzada de
                reducción de casos de prueba, basada en técnicas líderes de la industria como partición de
                equivalencias, los valores límite y los arreglos ortogonales.
            </p> */}
            <p className="lead mt-4">
                Optimiza tus pruebas de software y ahorra tiempo y recursos con nuestra herramienta avanzada de
                reducción de casos de prueba, basada en técnicas líderes de la industria como
                <strong> partición de equivalencias, valores límite y arreglos ortogonales.</strong>
            </p>
            <div className="mt-4">
                <Link href="/try-api" className="btn btn-outline-dark btn-sm">Try API</Link>
                <Link href="/documentacion" className="btn btn-primary btn-sm ms-2">
                    Documentación <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
            
        </div>
    );
}
