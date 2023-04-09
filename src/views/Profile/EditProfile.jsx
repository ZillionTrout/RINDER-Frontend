import React, { useState, useEffect, useContext } from 'react';
import ProfileService from "../../services/profileService";
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileEdit() {
    const { isLoggedIn, user } = useContext(AuthContext); 
    const {id} = useParams();
    const [profile, setProfile] = useState({  
        place: "",
        rolling: "",
        games: "",
        description: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const getProfile = async () => {
        try {
            const response = await ProfileService.getProfile(id)
            setProfile(response)
            console.log(response)
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProfile()
    },
    // eslint-disable-next-line
    []);

    const handleChange = (e) => {
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
            await ProfileService.editProfile(profile, id)
            navigate(`/profile/${id}`);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        {isLoading && <div>Loading...</div>}
        {isLoggedIn && <div>
            <h2>Edita tu perfil</h2>
            <form onSubmit={handleSubmit}>
                <label>Ciudad:</label>
                <input type="text" name="city" value={user.place} onChange={handleChange}/>
                <label>¿Eres Master o Jugador?</label>
                <input type="text" name="rolling" value={user.rolling} onChange={handleChange}/>
                <label>¿Qué juegos te gustan?</label>
                <input type="text" name="games" value={user.games} onChange={handleChange}/>
                <label>Cuéntanos sobre ti</label>
                <input type="text" name="description" value={user.description} onChange={handleChange}/>
                <button type="submit">Editar</button>
            </form>
        </div>}
        </>
    )
}
