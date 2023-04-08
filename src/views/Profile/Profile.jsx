import React, { useContext }from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileUser() {

    const { isLoggedIn, user } = useContext(AuthContext); 

    return (
        <>
        {isLoggedIn &&<div>Holi, soy el perfil :D</div>}
        {user&&  <h2>Holi {user.username}</h2>}
        <div>
            {user&& <p>Vivo en {user.place}</p>}
            {user&& <p>{user.description}</p>}
        </div>

        {isLoggedIn && <Link to="/editprofile"><p>Editar perfil</p> </Link>}
        {isLoggedIn && <Link to="/userbulletins"><p>Mis anuncios</p> </Link>}</>
    )
}
