import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BulletinService from '../../services/bulletinService';

export default function EditBulletin() {
    const { bulletinId } = useParams();
    const [bulletin, setBulletin] = useState({
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
            await BulletinService.editBulletin(bulletinId, bulletin);
            navigate(`/bulletins/${bulletinId}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {error && <p>Algo ha ido mal. No has podido editar tu anuncio</p>}
                    <label>Cambia la imagen</label>
                    <input type="url" name="image" value={bulletin.image} onChange={handleChange}  />
                    <label>¿Eres Master o jugador?</label>
                    <input type="text" name="role" value={bulletin.role} onChange={handleChange}  />
                    <label>¿Presencial u Online?</label>
                    <input type="text" name="modality" value={bulletin.modality} onChange={handleChange}  />
                    <label>Ciudad</label>
                    <input type="text" name="place" value={bulletin.place} onChange={handleChange}  />
                    <label>Descripción</label>
                    <input type="text" name="description" value={bulletin.description} onChange={handleChange}  />
                    <button type='submit' className='btn'>¡Editado!</button>
                </form>
        </>
    ) 
}