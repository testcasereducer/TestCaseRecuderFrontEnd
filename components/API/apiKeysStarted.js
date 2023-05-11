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
        </div>
    );
}
