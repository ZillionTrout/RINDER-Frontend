import React from "react";

export default function MpCreate() {
    return (
        <>
            <p>Formulario par enviar un mensaje privado</p>
            <form >
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea></textarea>
                <button type="submit">Enviar mensaje</button>
            </form>
        </>
    )
}