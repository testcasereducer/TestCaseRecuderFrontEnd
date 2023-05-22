import React, { useState } from "react";
import GetApiKey from "./getApiKey";


export default function ApiKeysStarted() {

    return (
        <div className="container " >
            <h3 className="display-2">Crear Api Key </h3>
            <p className="">
                Para crear o ver tu Api Key, haz clic en "Generar clave API" e introduce tu dirección de
                correo electrónico. Si ya tienes una clave de API creada, se te enviará esa clave. De lo contrario, se
                creará una nueva.
            </p>
            <GetApiKey />
            <hr className="hr hr-blurry" />
            <h3 className="display-6">Autenticación</h3>
            <p>
            Para acceder al endpoint /api, se requiere una clave de API válida. La clave de API debe ser proporcionada en los encabezados o parámetros de la solicitud como autenticación.
            </p>
            <h3 className="display-6">Endpoint</h3>
            <code>GET /api</code>
            {/* AQUIII */}
            <h4></h4>
        </div>
    );
}
