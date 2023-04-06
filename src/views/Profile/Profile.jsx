import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";


export default function Profile() {
    const { isLoggedIn } = useAuth();
    return (
        <>
        {isLoggedIn &&<div>Holi, soy el perfil :D</div>}

        {isLoggedIn && <Link to="/editprofile"><p>Editar perfil</p> </Link>}
        {isLoggedIn && <Link to="/userbulletins"><p>Mis anuncios</p> </Link>}</>
    )
}

// import React from "react";
// import { Link } from 'react-router-dom';

// export default function Profile() {
//     return (
//         <>
//         <p>Soy el perfil</p>
//         <Link to="/editprofile"><p>Edita tu Perfil</p> </Link>
//         </>
//     )
// }