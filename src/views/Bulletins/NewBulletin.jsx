import React, { useState, useContext } from 'react';
import BulletinService from '../../services/bulletinService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function NewBulletin() {
    const initialState = {
        image: '',
        game: '',
        campaign: '',
        role: '',
        modality: '',
        place: '',
        description: ''
    }

    const [newBulletin, setNewBulletin] = useState(initialState);
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext); 

    const handleChange = (e) => {
        setNewBulletin(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleAddBulletin = async () => {
        try {
            await BulletinService.createBulletin(newBulletin);
            navigate('/')
            console.log(newBulletin)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleAddBulletin();
        setNewBulletin(initialState)
    }

    return (
        <>
            <div className='formnew'>
            <h2>Crea tu anuncio</h2>
            {isLoggedIn &&<form className="form-edit" onSubmit={handleSubmit}>
                <label>Pon una imagen. Si quieres que se vea completa debe ser de 315x100px</label>
                    <input type="text" name="image" value={newBulletin.image} onChange={handleChange}  />
                    <label>Juego</label>
                    <input type="text" name="game" value={newBulletin.game} onChange={handleChange} required />
                    <label>Campaña</label>
                    <input type="text" name="campaign" value={newBulletin.campaign} onChange={handleChange} required />
                    <label>¿Eres Master o jugador?</label>
                    <input type="text" name="role" value={newBulletin.role} onChange={handleChange} required />
                    <label>¿Presencial u Online?</label>
                    <input type="text" name="modality" value={newBulletin.modality} onChange={handleChange} required />
                    <label>Ciudad</label>
                    <input type="text" name="place" value={newBulletin.place} onChange={handleChange} required />
                    <label>Descripción</label>
                    <input type="text" name="description" value={newBulletin.description} onChange={handleChange} required />
                    <button type='submit' className='btn'>Anunciate!</button>
                </form>}
            </div>
        </>
    )
}
