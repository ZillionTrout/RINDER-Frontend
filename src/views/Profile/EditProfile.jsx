// import React, {useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import profileService from "../../services/profileService";

// export default function EditProfile() {
//     const { userId } = useParams();
//     const [profile, setProfile] = useState({  
//         city: "",
//         rolling: "",
//         games: "",
//         description: ""
//     });
//     const [error, setError] = useState(false);
//     const navigate = useNavigate();
    
//     const getProfile = async () => {
//         try {
//             const response = await profileService.getProfile(userId);
//             setProfile(response);
//             setError(false);
//             console.log(response);
//         } catch (error) {
//             console.error(error)
//             setError(true)
//         }
//     }
//     useEffect(() => {
//         getProfile();
//     // eslint-disable-next-line
//     }, [])

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfile(prev => {
//             return {
//                 ...prev,
//                 [name]: value
//             }
//         })
//     }
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await profileService.editProfile(userId, profile);
//             navigate(`/profile/${userId}`)
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     return (
//         <div className="holis">
//             <form  onSubmit={handleSubmit}>
//             {error && <p>Algo esta mal, no puedes editar tu perfil</p>}
//             <input type="text" name="city" placeholder="¿De donde eres?" value={profile.city} onChange={handleChange}/>
//             <input type="text" name="rolling" value={profile.email} onChange={handleChange}/>
//             <input type="text" name="games" placeholder="¿Cuales son tus juegos favoritos?"></input>
//             <input type="text" name="description" placeholder="Sobre ti"></input>
//             <button type="submit">Guardar cambios</button>
//             </form>
//         </div>
// )}

import React, { useState, useEffect, useContext } from 'react';
import ProfileService from "../../services/profileService";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ProfileEdit() {
    
    const { isLoggedIn, user } = useContext(AuthContext); 
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
            const response = await ProfileService.getProfile()
            setProfile(response)
            console.log(response)
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProfile()
    }, []);

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
            await ProfileService.editProfile(profile) // Corrección: se pasa el objeto profile
            navigate('/profile');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        {isLoading && <div>Loading...</div>}
        {isLoggedIn && <div>
            <h2>Editing {user.username}</h2>
            <form onSubmit={handleSubmit}>
                <label>Ciudad:</label>
                <input type="text" name="city" value={user.place} onChange={handleChange}/>
                <label>¿Eres Master o Jugador?</label>
                <input type="text" name="rolling" value={user.rolling} onChange={handleChange}/>
                <label>¿Qué juegos te gustan?</label>
                <input type="text" name="games" value={user.games} onChange={handleChange}/>
                <label>Cuéntanos sobre ti</label>
                <input type="text" name="description" value={user.description} onChange={handleChange}/>
                <button type="submit">Edit profile</button>
            </form>
        </div>}
        </>
    )
}
