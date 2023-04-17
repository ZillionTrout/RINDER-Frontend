import React, { useState, useEffect } from "react";
import CardBulletin from "../../components/CardBulletin";
import BulletinService from "../../services/bulletinService";
import { useAuth } from "../../hooks/useAuth";

export default function BulletinList() {
    const [bulletins, setBulletins] = useState([]);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        const getBulletins = async () => {
            try {
                const response = await BulletinService.getBulletins();
                setBulletins(response);
                        } catch (error) {
                console.error(error);
            }
        }
        getBulletins();
    }, [])

    const handleFilterMaster= () => {
        const filteredMaster = bulletins.filter(elem => elem.role === 'Master');
        setBulletins(filteredMaster);
    }

    const handleFilterPlayer= () => {
        const filteredPlayer = bulletins.filter(elem => elem.role === 'Player');
        setBulletins(filteredPlayer);
    }

    const handleDeleteBulletin = (game) => {
        setBulletins(bulletins.filter(bulletin => bulletin.game !== game));
    }

    return (
        <>
        {isLoggedIn && 
        <div>
            <h2>Pathfinder</h2>
            <div className="masterplayer-button">
                <button className="btn-modality" onClick={handleFilterMaster}>Master</button>
                <button className="btn-modality" onClick={handleFilterPlayer}>Player</button>
            </div>
            <div>
                {bulletins.filter(bulletin => bulletin.game === "Pathfinder").map(bulletin => (
                    <CardBulletin
                        key={bulletin._id}
                        bulletin={bulletin}
                        handleDelete={handleDeleteBulletin}
                    />
                ))}
            </div>
        </div>}
        </>
    );
}
