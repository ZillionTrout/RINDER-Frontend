import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";
import BulletinService from "../../services/bulletinService";
import CardsDungeons from '../Cards/CardsDungeons';
import CardVampiro from '../Cards/CardVampiro';
import CardsCustom from '../Cards/CardsCustom'
import CardChangeling from '../Cards/CardsChangeling'
import CardsLobo from '../Cards/CardsLobo'
import CardsPathfinder from '../Cards/CardsPathfinder'

export default function UserBulletin() {
    const { isLoggedIn } = useAuth();
    const { bulletinId, userId } = useParams();
    const [bulletin, setBulletins] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // cambiar por bulletinsbyuser
    const getBulletins = async () => {
        try {
            const response = await BulletinService.getBulletins(userId);
            setLoading(false);
            setBulletins(response);
            setError(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBulletins();
        // eslint-disable-next-line
    }, [userId])

    return (
        <>
        <div>
            {loading && <p>Loading...</p>}
    { isLoggedIn &&
            <p>Los anuncios que has creado</p>}
            {isLoggedIn && !loading && bulletin &&  <CardsDungeons bulletin={bulletin} />}
            {isLoggedIn && !loading && bulletin && <CardVampiro bulletin={bulletin} />}
            {isLoggedIn && !loading && bulletin && <CardsLobo bulletin={bulletin} />}
            {isLoggedIn && !loading && bulletin && <CardChangeling bulletin={bulletin} />}
            {isLoggedIn && !loading && bulletin && <CardsPathfinder bulletin={bulletin} />}
            {isLoggedIn && !loading && bulletin && <CardsCustom bulletin={bulletin} />}
            {isLoggedIn && error && <p>Algo salió mal</p>}
        </div></>
    )
}