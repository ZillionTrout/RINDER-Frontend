import React, { useContext }from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileUser() {

    const { isLoggedIn, user } = useContext(AuthContext); 

    // const getProfile = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await ProfileService.getProfile();
    //         setUser(response.user);
    //         setLoading(false);
    //         } catch (error) {
    //         console.error(error);
    //         }
    //     }

    //     useEffect(() => {
    //         getProfile();
    //                 // eslint-disable-next-line
    //     }, []);

    return (
        <>
        {isLoggedIn &&user&& <div className="profilediv"><h2>Holi {user.username}</h2>
        <img src={user.avatar} alt={user.username} />
            <p>Vivo en {user.place}</p>
            <p>Soy {user.rolling}</p>
            <p>Me gusta {user.games}</p>
            <p>Sobre mi: {user.description}</p>
            <Link to="/user/:userId"><div>Las partidas que organizo </div></Link>
            <Link to="/pointedbulletins"><div>Las partidas en las que estoy apuntado</div></Link> 
        </div>}</>
    )
}
