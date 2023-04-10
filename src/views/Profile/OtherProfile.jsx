import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileService from "../../services/profileService";

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const { userId } = useParams(); // Invocar la función para obtener el valor

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const user = await ProfileService.getProfile(userId);
                if (user !== null && typeof user === 'object' && user.id) {
                    setUserProfile(user);
                } else {
                    console.error("No se pudo cargar el perfil del usuario");
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserProfile();
    }, [userId]);

    return (
        <div>
            {userProfile ? (
                <div>
                    <h1>Perfil del Usuario</h1>
                    <p>Nombre de usuario: {userProfile.username}</p>
                    <p>Nombre completo: {userProfile.name}</p>
                    <p>Email: {userProfile.email}</p>
                    <p>Teléfono: {userProfile.phone}</p>
                </div>
            ) : (
                <p>Cargando perfil de usuario...</p>
            )}
        </div>
    );
};

export default UserProfile;

