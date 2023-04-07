import React, {useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import profileService from "../../services/profileService";

export default function EditProfile() {
    const { userId } = useParams();
    const [profile, SetProfile] = useState({});
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    
    const getProfile = async () => {
        try {
            const response = await profileService.getProfile(userId);
            SetProfile(response);
            setError(false);
            console.log(response);
        } catch (error) {
            console.error(error)
            setError(true)
        }
    }
    useEffect(() => {
        getProfile();
    // eslint-disable-next-line
    }, [])

    const handleChange = (e) => {
        SetProfile(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await profileService.editProfile(userId, profile);
            navigate(`/profile/${userId}`)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="holis">
            <form  onSubmit={handleSubmit}>
            {error && <p>Algo esta mal, no puedes editar tu perfil</p>}
            <input type="text" name="city" placeholder="¿De donde eres?" value={profile.place} onChange={handleChange}/>
            <input type="text" name="rolling" value={profile.email} onChange={handleChange}/>
            <input type="text" name="games" placeholder="¿Cuales son tus juegos favoritos?"></input>
            <input type="text" name="description" placeholder="Sobre ti"></input>
            <button type="submit">Guardar cambios</button>
            </form>
        </div>
)}