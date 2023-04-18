import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function FAQs() {
    const { isLoggedIn } = useAuth();

    return (
        <>
        { isLoggedIn &&
            <div className="faqs">
                <h1>FAQs</h1>
                <h3><img src="https://static.thenounproject.com/png/2453698-200.png" alt="dice" width={'40px'} />¿Puedo crear anuncios para juegos que no están en la lista?</h3>
                <p>¡Por supuesto! Utiliza la opción "Custom" y en "Campaña" escribe el nombre del juego al que quieres jugar. Con el tiempo ampliaremos las opciones.</p>
                <h3><img src="https://static.thenounproject.com/png/2453698-200.png" alt="dice" width={'40px'} />¿Puedo recibir mensajes privados?</h3>
                <p>Todavia estamos trabajando en ello. Por ahora no olvides poner tu forma de contacto en el anuncio o tu perfil.</p>
                <h3><img src="https://static.thenounproject.com/png/2453698-200.png" alt="dice" width={'40px'} />¿Puedo apuntarme a más de una partida?</h3>
                <p>¡Claro! Puedes apuntarte a todas las que quieras siempre y cuando puedas asistir.</p>
                <h3>Si tienes dudas o sugerencias puedes escribirnos a admin@gmail.com</h3>
            </div>
        }
        </>
    )
}