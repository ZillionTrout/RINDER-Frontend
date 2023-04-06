import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

export default function UserBulletin() {
    const { isLoggedIn } = useAuth();
    return (
        <><p>Los anuncios que has creado</p>
        {isLoggedIn && <Link to="/editbulletin"><p>Editar anuncio</p> </Link>}</>
    )
}