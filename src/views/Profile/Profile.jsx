import React, { useContext }from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import UserBulletins from "../Bulletins/UserBulletins";

export default function ProfileUser() {

    const { isLoggedIn, user } = useContext(AuthContext); 

    return (
        <>
        {isLoggedIn &&<div>Holi, soy el perfil :D</div>}
        {user&& <div><h2>Holi {user.username}</h2>
            <p>Vivo en {user.place}</p>
            <p>Soy {user.rolling}</p>
            <p>Me gusta {user.games}</p>
            <p>Sobre mi: {user.description}</p>
        </div>}
        {isLoggedIn && <Link to="/user/:userId"><p>Las partidas que organizo</p> </Link>}
        {isLoggedIn && <Link to="/pointedbulletins"><p>Las partidas en las que estoy apuntado</p> </Link>}</>

    )
}
