import React, { useState, useEffect, useContext } from 'react';
import ProfileService from "../../services/profileService";
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileEdit() {
    const { isLoggedIn, user } = useContext(AuthContext); 
    const {userId} = useParams();
    const [profile, setProfile] = useState({  
        place: "",
        rolling: "",
        games: "",
        description: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const response = await ProfileService.getProfile(userId)
            setProfile(response)
            setError(false)
            console.log(response)
            setIsLoading(false);
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    useEffect(() => {
        getProfile()
    },
    // eslint-disable-next-line
    [userId]);

    const handleChange = (e) => {
        console.log('holi')
        const { name, value } = e.target;
        setProfile(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await ProfileService.editProfile(profile, userId)
            navigate(`/profile/${userId}`);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        {isLoading && <div>Loading...</div>}
        {isLoggedIn && user && <div>
            <h2>Edita tu perfil</h2>
            <form onSubmit={handleSubmit}>
                <label>Ciudad:</label>
                <input type="text" name="city" value={profile.place} placeholder={user.place} onChange={handleChange}/>
                <label>¿Eres Master o Jugador?</label>
                <input type="text" name="rolling" value={profile.rolling} onChange={handleChange}/>
                <label>¿Qué juegos te gustan?</label>
                <input type="text" name="games" value={profile.games} onChange={handleChange}/>
                <label>Cuéntanos sobre ti</label>
                <input type="text" name="description" value={profile.description} onChange={handleChange}/>
                <button type="submit">Editar</button>
            </form>
        </div>}
        </>
    )
}
