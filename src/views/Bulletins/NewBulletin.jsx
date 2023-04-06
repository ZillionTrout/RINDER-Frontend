import React, { useState } from 'react';

const NewBulletin = () => {
    const [game, setGame] = useState('');
    const [campaign, setCampaign] = useState('');
    const [where, setWhere] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('New Bulletin:', { game, campaign, where, place, description });
    }

    return (
        <><p>Crea tu anuncio</p>
        <form onSubmit={handleSubmit}>
            <label>
            Juego:
            <input type="text" value={game} onChange={(event) => setGame(event.target.value)} />
            </label>
            <label>
            Campaña:
            <input type="text" value={campaign} onChange={(event) => setCampaign(event.target.value)} />
            </label>
            <label>
            Donde:
            <input type="text" value={where} onChange={(event) => setWhere(event.target.value)} />
            </label>
            <label>
            Ciudad:
            <input type="text" value={place} onChange={(event) => setPlace(event.target.value)} />
            </label>
            <label>
            Descripción:
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <button type="submit">Enviar</button>
        </form> </>
    );
}

export default NewBulletin;
