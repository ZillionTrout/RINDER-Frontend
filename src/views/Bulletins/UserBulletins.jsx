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
    const { isLoggedIn, user } = useAuth();
    const { bulletinId, userId } = useParams();
    const [bulletin, setBulletins] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // NO FUNCIONA
    const getUserBulletins = async () => {
        try {
            const response = await BulletinService.getUserBulletins(userId);
            const filteredBulletins = response.filter(bulletin => bulletin.user === user.userId); 
            setLoading(false);
            setBulletins(filteredBulletins);
            console.log(filteredBulletins)
            setError(false);
        } catch (error) {
            setLoading(true);
        }
    }
    
    useEffect(() => {
        getUserBulletins();
        // eslint-disable-next-line
    }, [userId])

    return (
        <>
        <div>
            {loading && <p>Loading...</p>}
    { isLoggedIn &&
            <p>Los anuncios que has creado</p>}
            {isLoggedIn && !loading && user &&  <CardsDungeons bulletin={bulletin} />}
            {isLoggedIn && !loading && user && <CardVampiro bulletin={bulletin} />}
            {isLoggedIn && !loading && user && <CardsLobo bulletin={bulletin} />}
            {isLoggedIn && !loading && bulletin && <CardChangeling bulletin={bulletin} />}
            {isLoggedIn && !loading && bulletin && <CardsPathfinder bulletin={bulletin} />}
            {isLoggedIn && !loading && bulletin && <CardsCustom bulletin={bulletin} />}
            {isLoggedIn && error && <p>Algo salió mal</p>}
        </div></>
    )
}