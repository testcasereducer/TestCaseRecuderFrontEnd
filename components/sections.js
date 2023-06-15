export const techniques = [
    {
        id: 0,
        title: "Partición de Equivalencias",
        description:
            "Divide los datos de entrada en grupos equivalentes para reducir el número de casos de prueba necesarios.",
        link: "/equivalencias",
        iconName: "bi-boxes",
    },
    {
        id: 1,
        title: "Valores al Límite",
        description:
            "Prueba los valores más pequeños y más grandes que una función puede aceptar para detectar errores.",
        link: "/limites",
        iconName: "bi-body-text",
    },
    {
        id: 2,
        title: "Arreglos Ortogonales",
        description: "muestra todas las combinaciones posibles de entrada de una función de manera eficientes.",
        link: "/ortogonales",
        iconName: "bi-arrows-expand",
    },
];

export default function Sections() {
    return (
        <>
            <div className="container bg-light">
                <div className="row">
                    <div className="col-md-6">
                        <section className="bg-light py-2 text-center">
                            <h1 className="display-2 text-center" style={{ fontWeight: "bold" }}>
                                Arreglos Ortogonales
                            </h1>
                            <p className="ms-2 me-2">
                                Los arreglos ortogonales son una técnica que se utiliza para probar todas las
                                combinaciones posibles de entrada de una función de manera eficiente. En lugar de probar
                                todas las combinaciones posibles, los arreglos ortogonales permiten realizar pruebas en
                                un número limitado de casos que cubran la mayoría de los posibles escenarios. Esto ayuda
                                a ahorrar tiempo y recursos en el proceso de prueba.
                            </p>
                        </section>
                    </div>
                    <div className="col-md-6">
                        <section className="bg-light py-5">
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ position: "relative" }}>
                                <img
                                    src="https://picsum.photos/450/300"
                                    alt="Imagen de ejemplo"
                                    className="img-fluid mb-4 rounded-"
                                    style={{ borderRadius: "20px", overflow: "hidden", zIndex: 1 }}
                                />
                                <span
                                    className="display-4 text-light"
                                    style={{
                                        position: "absolute",
                                        bottom: "2rem",
                                        right: "5rem",
                                        zIndex: 2,
                                        fontWeight: "bold",
                                    }}>
                                    -30% de casos
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <section className="py-2">
                            <h2>Ventajas</h2>
                            <ul>
                                <li>
                                    <span className="bi bi-check-lg text-success"></span> Cubre todos los posibles
                                    escenarios de entrada.
                                </li>
                                <li>
                                    <span className="bi bi-check-lg text-success"></span> Es fácil de entender y
                                    aplicar.
                                </li>
                                <li>
                                    <span className="bi bi-x-lg text-danger"></span> No requiere conocimientos avanzados
                                    en programación.
                                </li>
                                <li>
                                    <span className="bi bi-x-lg text-danger"></span> Puede ser costoso en términos de
                                    tiempo y recursos.
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="col">
                        <section className="py-2">
                            <h2>Desventajas</h2>
                            <ul>
                                <li>
                                    <span className="bi bi-x-lg text-danger"></span> Requiere mucho tiempo y recursos
                                    para probar todas las combinaciones.
                                </li>
                                <li>
                                    <span className="bi bi-x-lg text-danger"></span> No es escalable para funciones con
                                    muchas entradas.
                                </li>
                                <li>
                                    <span className="bi bi-check-lg text-success"></span> Puede cubrir una amplia
                                    variedad de posibles escenarios de entrada.
                                </li>
                                <li>
                                    <span className="bi bi-check-lg text-success"></span> Puede ser más eficiente que el
                                    arreglo ortogonal completo.
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
