import React from "react";
import GetApiKey from "./getApiKey";

export default function ApiKeysStarted() {
    return (
        <div className="container ">
            <h3 className="display-2">Crear Api Key </h3>
            <p className="">
                Para crear o ver tu Api Key, haz clic en "Generar clave API" e introduce tu dirección de correo
                electrónico. Si ya tienes una clave de API creada, se te enviará esa clave. De lo contrario, se creará
                una nueva.
            </p>
            <GetApiKey />
            <hr className="hr hr-blurry" />
            <h3 className="display-3"> Documentación</h3>
            <p>
                La documentación de la API se encuentra alojada en Apiary.io. Por favor, haz clic en el siguiente botón
                para acceder a la documentación completa:{" "}
            </p>
            <div className="text-center mb-4">
                <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => window.open("https://testcasereducer.docs.apiary.io/#", "_blank")}
                    taget="_blank">
                    Ir a la documentación <i className="bi bi-arrow-right"></i>
                </button>
            </div>
            <p>
                La documentación de la API proporciona información detallada sobre los endpoints disponibles, sus
                funcionalidades, los parámetros requeridos y ejemplos de solicitudes y respuestas. Sirve como una guía
                completa para que los desarrolladores comprendan e integren la API del Test Case Reducer. Siéntete libre
                de explorar la documentación y consultarla para cualquier pregunta o aclaración sobre el uso de la API.
                Te ayudará a utilizar de manera efectiva la API del Test Case Reducer para generar casos de prueba
                utilizando diversas técnicas de reducción. Para acceder al endpoint /api, se requiere una clave de API
                válida. La clave de API debe ser proporcionada en los encabezados o parámetros de la solicitud como
                autenticación.
            </p>
            <hr className="hr hr-blurry" />
        </div>
    );
}
