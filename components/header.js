import Link from "next/link";

export default function Header() {
    return (
        <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <i className="bi bi-box-seam-fill" style={{ fontSize: "2em" }} />
                <h1 className="ms-4 mt-2 h5">TCR</h1>
            </Link>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 border rounded">
                <li>
                    <Link href="/" className="nav-link px-2 link-primary text-dark">
                        Inicio
                    </Link>
                </li>
                <div class="mt-2 text-secondary">|</div>
                <li>
                    <Link href="/about" className="nav-link px-2 link-primary text-dark">
                        About
                    </Link>
                </li>
            </ul>

            <div className="col-md-3 text-end">
                <Link href="/try-api" className="btn btn-outline-dark btn-sm">
                    Try API
                </Link>
            </div>
        </header>
    );
}
