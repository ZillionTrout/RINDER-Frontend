import React from "react";
import { useParams } from "react-router-dom";
import profileServices from "../../services/profileService";

export default function OtherProfile() {
    const { userId } = useParams();
    return (
        <>
            <p>Perfil de otro usuario</p>
            <h2>Perfil de {userId.nombre}</h2>
        </>
    )
}