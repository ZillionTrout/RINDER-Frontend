import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BulletinService from '../../services/bulletinService';
import { AuthContext } from '../../context/AuthContext';

export default function EditBulletin() {
    const { isLoggedIn } = useContext(AuthContext);
    const { bulletinId } = useParams();
    const [bulletinUser, setBulletinUser] = useState({
        image: '',
        role: '',
        modality: '',
        place: '',
        description: ''
    });
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const getBulletin = async () => {
        try {
            const response = await BulletinService.getBulletin(bulletinId);
            setBulletinUser({
                image: response.image,
                role: response.role,
                modality: response.modality,
                place: response.place,
                description: response.description
            });
            setError(false);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    useEffect(() => {
        getBulletin();
        // eslint-disable-next-line
    }, [bulletinId]);

    const handleChange = (e) => {
        setBulletinUser(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await BulletinService.editBulletin(bulletinId, bulletinUser);
            navigate(`/`);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {isLoggedIn  &&
                <h2>Edita tu anuncio</h2>}
            {isLoggedIn  && bulletinUser &&
                <form className="form-edit" onSubmit={handleSubmit}>
                    <label>Cambia la imagen</label>
                    <input type="src" name="image" value={bulletinUser.image ?? ''} onChange={handleChange} />
                    <label>¿Eres Master o jugador?</label>
                    <input type="text" name="role" value={bulletinUser.role ?? ''} onChange={handleChange} />
                    <label>¿Presencial u Online?</label>
                    <input type="text" name="modality" value={bulletinUser.modality ?? ''} onChange={handleChange} />
                    <label>Ciudad</label>
                    <input type="text" name="place" value={bulletinUser.place ?? ''} onChange={handleChange} />
                    <label>Descripción</label>
                    <input type="text" name="description" value={bulletinUser.description ?? ''} onChange={handleChange} />
                    <button type='submit' className='btn'>¡Editado!</button>
                </form>}
        </>
    )
}

