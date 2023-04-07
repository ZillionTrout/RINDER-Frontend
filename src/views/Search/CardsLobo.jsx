import React, { useState, useEffect } from "react";
import CardBulletin from "../../components/CardBulletin";
import BulletinService from "../../services/bulletinService";

export default function BulletinList() {
    const [bulletins, setBulletins] = useState([]);

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
        <h2>Hombre Lobo</h2>
            <div className="masterplayer-button">
                <button className="btn" onClick={handleFilterMaster}>Master</button>
                <button className="btn" onClick={handleFilterPlayer}>Player</button>
            </div>
        <div>
            {bulletins.filter(bulletin => bulletin.game === "Hombre Lobo").map(bulletin => (
                <CardBulletin
                    key={bulletin.game}
                    bulletin={bulletin}
                    handleDelete={handleDeleteBulletin}
                />
            ))}
        </div>
        </>
    );
}
