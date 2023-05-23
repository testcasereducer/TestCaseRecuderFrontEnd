import React, { useState } from "react";
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
            <h3 className="display-6">Autenticación</h3>
            <p>
                Para acceder al endpoint /api, se requiere una clave de API válida. La clave de API debe ser
                proporcionada en los encabezados o parámetros de la solicitud como autenticación.
            </p>
            <h3 className="display-6">Endpoint</h3>
            <code>GET /api</code>
            <p>Este endpoint permite generar casos de prueba utilizando diferentes técnicas.</p>
            <h3 className="display-6">Parámetros de solicitud: </h3>
            <ul>
                <li>api_key (obligatorio): La clave de API utilizada para autenticar la solicitud.</li>
                <li>
                    technique (obligatorio): La técnica a utilizar para generar los casos de prueba. Los valores
                    admitidos son:
                    <ul>
                        <li>"EP" (Equivalence Partitioning),</li>
                        <li>"LVA" (Limit Value Analysis)</li>
                        <li>"OA" (Orthogonal Array).</li>
                    </ul>
                </li>
                <li>
                    parameters (obligatorio): Los parámetros necesarios para la generación de casos de prueba en formato
                    JSON.
                </li>
            </ul>
            <h3 className="display-6">Ejemplo solicitud:</h3>
            <code>
                {
                    'Get /api?api_key={API_KEY}&technique=EP&parameters={"param1":{"equiv_class1":{"valid":true,"value":"food"}},"param2":{"equiv_class1":{"valid":true,"value":42}}}'
                }
            </code>
            <h3 className="display-6">Respuesta: </h3>
            <p>La API devuelve una respuesta en formato JSON con la siguiente estructura:</p>
            <code>{'{"error": false, "technique": "EP", "test-cases": [], "elapsed-time": "0.12345"}'}</code>
            <br></br>
            <ul>
                <li>error (booleano): Indica si se produjo un error durante el procesamiento de la solicitud.</li>
                <li>technique (cadena): La técnica utilizada para generar los casos de prueba.</li>
                <li>test-cases (array): Los casos de prueba generados.</li>
                <li>
                    elapsed-time (cadena): El tiempo transcurrido en segundos durante el procesamiento de la solicitud.
                </li>
            </ul>
            <p>En caso de error, la respuesta tendrá la siguiente estructura:</p>
            <code>{'{ "error": true, "error-message": "Mensaje de error", "elapsed-time": "0.12345"}'}</code>
            <hr className="hr hr-blurry" />
        </div>
    );
}
