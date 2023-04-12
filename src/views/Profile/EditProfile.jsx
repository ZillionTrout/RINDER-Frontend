import React, { useState, useEffect, useContext } from 'react';
import ProfileService from "../../services/profileService";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileEdit() {
    const { isLoggedIn, userId, user } = useContext(AuthContext); 
    const [profile, setProfile] = useState({
        avatar: "",
        place: "",
        rolling: "",
        games: "",
        description: ""
    });
    // const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const response = await ProfileService.getProfile(userId)
            setProfile(response)
            setError(false)
            console.log(response)
            // setIsLoading(false);
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
        setProfile(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await ProfileService.editProfile(userId, profile)
            navigate(`/`);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        {/* {isLoading && <div>Loading...</div>} */}
        {isLoggedIn && user && <div>
            <h2>Edita tu perfil</h2>
            <form className="form-edit" onSubmit={handleSubmit}>
                <label>Avatar:</label>
                <input type="text" name="avatar" value={profile.avatar} onChange={handleChange} />
                <label>Ciudad:</label>
                <input type="text" name="place" value={profile.place} onChange={handleChange}/>
                <label>¿Eres Master o Jugador?</label>
                <input type="text" name="rolling" value={profile.rolling} onChange={handleChange}/>
                <label>¿Qué juegos te gustan?</label>
                <input type="text" name="games" value={profile.games} onChange={handleChange}/>
                <label>Cuéntanos sobre ti</label>
                <input type="text" name="description" value={profile.description} onChange={handleChange}/>
                <button type="submit" className="btn">Editar</button>
            </form>
        </div>}
        </>
    )
}
