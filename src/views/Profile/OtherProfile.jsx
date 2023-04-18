import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileService from "../../services/profileService";
import { useAuth } from "../../hooks/useAuth";

const OtherUserProfile = () => {
    const { userId } = useParams();
    const [otherUser, setOtherUser] = useState(null);
    const { isLoggedIn } = useAuth();


    const getUser = async () => {
    try {
        const response = await ProfileService.getOtherUser(userId);
            setOtherUser(response.otherUser);
        } catch (error) {
            console.error(error)
        
    }}

    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, [userId]);

    return (
    <>
        {isLoggedIn && otherUser && (
            <div className="profilediv">
                <div className="profile">
                    <h1>Perfil de {otherUser.username}</h1>
                    <img src={otherUser.avatar}alt=""/>
                    <p>Es {otherUser.rolling}</p>
                    <p>Ciudad: {otherUser.place}</p>
                    <p>Sobre {otherUser.username}: {otherUser.description}</p>
                </div>
            </div>
        )}
    </>
    );
}


export default OtherUserProfile;
