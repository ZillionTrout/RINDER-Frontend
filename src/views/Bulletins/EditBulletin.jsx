import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bulletinService from '../../services/bulletinService';

export default function EditBulletin() {
    const { bulletinId } = useParams();
    const [bulletin, setBulletin] = useState({});
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const getBulletin = async () => {
        try {
            const response = await bulletinService.getBulletin(bulletinId);
            setBulletin(response);
            setError(false);
            console.log(response);
        } catch (error) {
            console.error(error)
            setError(true)
        }
    }

    useEffect(() => {
        getBulletin();
            // eslint-disable-next-line
    }, [bulletinId])

    const handleChange = (e) => {
        setBulletin(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await bulletinService.editBulletin(bulletinId, bulletin);
            navigate(`/bulletin/${bulletinId}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {error && <p>Algo ha ido mal. No has podido editar tu anuncio</p>}
                    <label>¿Eres Master o jugador?</label>
                    <input type="text" name="role" value={bulletinId.role} onChange={handleChange} required />
                    <label>¿Presencial u Online?</label>
                    <input type="text" name="modality" value={bulletinId.modality} onChange={handleChange} required />
                    <label>Ciudad</label>
                    <input type="text" name="place" value={bulletinId.place} onChange={handleChange} required />
                    <label>Descripción</label>
                    <input type="text" name="description" value={bulletinId.description} onChange={handleChange} required />
                    <button type='submit' className='btn'>Anunciate!</button>
                </form>
        </>
    ) 
}