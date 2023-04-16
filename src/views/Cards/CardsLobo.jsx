import React, { useState, useEffect } from "react";
import CardBulletin from "../../components/CardBulletin";
import BulletinService from "../../services/bulletinService";

export default function BulletinList() {
    const [bulletins, setBulletins] = useState([]);

    const getBulletins = async() => {
        try {
            const response = await BulletinService.getBulletins();
            setBulletins(response)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
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

    const handleDelete = async (bulletinId) => {
        try {
            await BulletinService.deleteBulletin(bulletinId);
        } catch (error) {
            console.error(error) }
                finally {
                    getBulletins()
                }
            }

    return (
        <>
        <h2>Hombre Lobo</h2>
            <div className="masterplayer-button">
                <button className="btn-modality" onClick={handleFilterMaster}>Master</button>
                <button className="btn-modality" onClick={handleFilterPlayer}>Player</button>
            </div>
        <div>
            {bulletins.filter(bulletin => bulletin.game === "Hombre Lobo").map(bulletin => (
                <CardBulletin
                    key={bulletin._id}
                    bulletin={bulletin}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
        </>
    );
}
