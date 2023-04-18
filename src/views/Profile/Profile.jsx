import React, { useContext, useState, useEffect }from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ProfileService from "../../services/profileService";

export default function ProfileUser() {

    const { isLoggedIn } = useContext(AuthContext); 
    const [user, setUser ] = useState({})
    const getProfile = async () => {
        try {
            const response = await ProfileService.getProfile(user);
            setUser(response.user);
            } catch (error) {
            console.error(error);
            }
        }

        useEffect(() => {
            getProfile();
                    // eslint-disable-next-line
        }, []);

    return (
        <>
        {isLoggedIn &&user&& 
        <div className="profilediv">
        <div className="profile">
            <h2>{user.username}</h2>
            <img src={user.avatar} alt=""/>
            <p>Vivo en {user.place}</p>
            <p>Soy {user.rolling}</p>
            <p>Me gusta {user.games}</p>
            <p>Sobre mi: {user.description}</p>
        </div>
        <div className="profilediv-btn">
            <Link to={`/bulletins/user/${user._id}`}><div>Las partidas que organizo </div></Link>
            <Link to={`/pointed/user/${user._id}`}><div>Las partidas en las que estoy apuntado</div></Link> 
            </div>
        </div>}</>
    )
}
