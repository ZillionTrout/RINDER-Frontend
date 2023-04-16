import React, { useState, useContext } from 'react';
import BulletinService from '../../services/bulletinService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function NewBulletin() {
    const { isLoggedIn, user } = useContext(AuthContext);
    const initialState = {
        username: user ? user.username : '',
        userId: user ? user._id : '',
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

    const handleChange = (e) => {
        setNewBulletin(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleAddBulletin = async (bulletin) => {
        try {
            await BulletinService.createBulletin(bulletin);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleAddBulletin(newBulletin);
        setNewBulletin(initialState);
    }

    return (
        <>
            <div className='formnew'>
                <h2>Crea tu anuncio</h2>
                {isLoggedIn && <form className="form-edit" onSubmit={handleSubmit}>
                    <label>Pon una imagen</label>
                    <p>Si quieres que se vea completa debe ser de 315x100px</p>
                    <input type="text" name="image" value={newBulletin.image} onChange={handleChange} />
                    <label>Juego</label>
                    <p>Dungeons&Dragons, Vampiro, Changeling, Hombrelobo, Pathfinder, Custom</p>
                    <input type="text" name="game" value={newBulletin.game} onChange={handleChange} required />
                    <label>Campaña</label>
                    <input type="text" name="campaign" value={newBulletin.campaign} onChange={handleChange} required />
                    <label>¿Eres Master o Player?</label>
                    <input type="text" name="role" value={newBulletin.role} onChange={handleChange} required />
                    <label>¿Presencial u Online?</label>
                    <input type="text" name="modality" value={newBulletin.modality} onChange={handleChange} required />
                    <label>Ciudad</label>
                    <input type="text" name="place" value={newBulletin.place} onChange={handleChange} required />
                    <label>Descripción</label>
                    <p>Recuerda poner alguna forma de contacto</p>
                    <input type="text" name="description" value={newBulletin.description} onChange={handleChange} required />
                    <button type='submit' className='btn'>Anunciate!</button>
                    <p>IMPORTANTE: el formulario es sensible a las mayúsculas, no te olvides de ellas</p>
                </form>}
            </div>
        </>
    )
}

