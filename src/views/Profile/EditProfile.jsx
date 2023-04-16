import React, { useState, useEffect, useContext } from 'react';
import ProfileService from "../../services/profileService";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileEdit() {
    const { isLoggedIn, user } = useContext(AuthContext); 
    const [profile, setProfile] = useState({    });
    const [, setError] = useState();
    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const response = await ProfileService.getProfile(user)
            setProfile({
                avatar: response.user.avatar,
                place: response.user.place,
                rolling: response.user.rolling,
                games: response.user.description,
                description: response.user.description
            })
            setError(false)
        } catch (error) {
            setError(true)
        }
    }

    const handleChange = (e) => {
        setProfile(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    };

    useEffect(() => {
        getProfile()
    },
    // eslint-disable-next-line
    [user]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await ProfileService.editProfile(user, profile)
            navigate(`/`);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        { isLoggedIn && profile && <div>
            <h2>Edita tu perfil</h2>
            <form className="form-edit" onSubmit={handleSubmit}>
                <label>Avatar:</label>
                <input type="text" name="avatar" value={profile.avatar ?? ''} onChange={handleChange} />
                <label>Ciudad:</label>
                <input type="text" name="place" value={profile.place ?? ''}  onChange={handleChange}/>
                <label>¿Eres Master o Jugador?</label>
                <input type="text" name="rolling" value={profile.rolling ?? ''} onChange={handleChange}/>
                <label>¿Qué juegos te gustan?</label>
                <input type="text" name="games" value={profile.games ?? ''} onChange={handleChange}/>
                <label>Cuéntanos sobre ti</label>
                <input type="text" name="description" value={profile.description ?? ''} onChange={handleChange}/>
                <button type="submit" className="edit-btn">Editar</button>
            </form>
        </div>}
        </>
    )
}
