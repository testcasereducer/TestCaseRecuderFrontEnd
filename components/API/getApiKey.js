import React, { useState } from "react";
import { API_KEY, API_URL } from "../utilities/env";

export default function GetApiKey() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [alert, setAlert] = useState(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setAlert(null);
        setEmail("");
    };

    const handleGenerateApiKey = async () => {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setAlert({
                message: "Por favor, ingrese un correo electrónico válido",
                type: "danger",
            });
            setTimeout(() => {
                setAlert(null);
            }, 2000);
            return;
        }


        const url = `${API_URL}/create_user?api_key=${API_KEY}&email=${email}`;

        try {
            setLoading(true);
            const response = await fetch(url, { method: "POST" });
            setLoading(false);
            const content = await response.json();
            if (content.success) {
                setAlert({
                    message: content.message,
                    type: "success",
                });
            } else {
                setAlert({
                    message: content.message,
                    type: "danger",
                });
            }
        } catch (error) {
            setAlert({
                message: "Error generating API key",
                variant: "danger",
            });
            setLoading(false);
        }
    };
    return (
        <>
            <div className="text-center">
                <button className="btn btn-outline-primary btn-sm mt-1 mb-2" onClick={() => setShowModal(true)}>
                    Generar clave API <i className="bi bi-key-fill"></i>
                </button>
            </div>
            <div
                style={{
                    display: showModal ? "block" : "none",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1040,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}>
                <div
                    className="modal"
                    tabIndex="-1"
                    role="dialog"
                    style={{
                        display: showModal ? "block" : "none",
                        zIndex: 1041,
                        position: "fixed",
                        top: "80%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    data-backdrop="static">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Generar clave API</h5>
                                <button type="button" className="btn btn-unstyled" onClick={() => handleCloseModal()}>
                                    <i className="bi bi-x-lg" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingrese su correo electrónico"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <button className="btn btn-primary" type="button" onClick={handleGenerateApiKey}>
                                        Generar clave
                                    </button>
                                </div>
                                {loading && (
                                    <div className="text-center">
                                        <div className="spinner-border text-primary" role="status" />
                                    </div>
                                )}
                                {alert && (
                                    <div className={`alert alert-${alert.type} mt-3`} role="alert">
                                        {alert.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
