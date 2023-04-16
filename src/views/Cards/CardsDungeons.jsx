import React, { useState, useEffect, useContext } from "react";
import CardBulletin from "../../components/CardBulletin";
import BulletinService from "../../services/bulletinService";
import { AuthContext } from '../../context/AuthContext';

export default function BulletinList() {
    const [bulletins, setBulletins] = useState([]);
    const { isLoggedIn } = useContext(AuthContext); 

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

    const handleFilterMaster = () => {
        const filteredMaster = bulletins.filter(elem => elem.role === 'Master');
        setBulletins(filteredMaster);
    }

    const handleFilterPlayer = () => {
        const filteredPlayer = bulletins.filter(elem => elem.role === 'Player');
        setBulletins(filteredPlayer);
    }

    const handleDeleteBulletin = (game) => {
        setBulletins(bulletins.filter(bulletin => bulletin.game !== game));
    }

    return (
        <>{isLoggedIn &&
            <h2>Dungeons&Dragons</h2>}
            {isLoggedIn &&<div className="masterplayer-button">
                <button className="btn-modality" onClick={handleFilterMaster}>Master</button>
                <button className="btn-modality" onClick={handleFilterPlayer}>Player</button>
            </div>}
            {isLoggedIn &&<div>
                {bulletins.filter(bulletin => bulletin.game === "Dungeons&Dragons").map(bulletin => (
                    <CardBulletin
                        key={bulletin._id}
                        bulletin={bulletin}
                        handleDelete={handleDeleteBulletin}
                    />
                ))}
            </div>}
        </>
    );
}
