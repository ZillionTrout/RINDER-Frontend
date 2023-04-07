import React, {useEffect, useState} from "react";
//hacer card de los bulletin
import BulletinService from '../services/bulletinService';

export default function SearchGame() {
    const [bulletins, setBulletins] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBulletins = async () => {
            try {
                const response = await BulletinService.getBulletins();
                setBulletins(response);
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
          }            // eslint-disable-next-line
        getBulletins();
    },[])

    const handleFilterDungeons5 = () => {
        console.log(bulletins)
        const filteredBulletins = bulletins.filter(elem => elem.type === 'Dungeons&Dragons 5');
        setBulletins(filteredBulletins)
    }

    const handleFilterVampiroLaMascarada = () => {
        const filteredBulletinVamp = bulletins.filter(elem => elem.type === 'Vampiro: La Mascarada');
        setBulletins(filteredBulletinVamp)
    }

    const handleFilterChangeling= () => {
        const filteredBulletinChange = bulletins.filter(elem => elem.type === 'Changeling');
        setBulletins(filteredBulletinChange)
    }

    const handleFilterHombreLobo = () => {
        const filteredBulletinLobo= bulletins.filter(elem => elem.type === 'Hombre Lobo: Apocalipsis');
        setBulletins(filteredBulletinLobo)
    }

    const handleFilterPathfinder = () => {
        const filteredBulletinPath= bulletins.filter(elem => elem.type === 'Pathfinder');
        setBulletins(filteredBulletinPath)
    }

    const handleFilterCustom = () => {
        const filteredBulletinCustom= bulletins.filter(elem => elem.type === 'Custom');
        setBulletins(filteredBulletinCustom)
    }

    return (
        <>
            {loading && <p>Loading...</p>}
        {!loading &&
            (<div>
                <button className="btn" onClick={handleFilterDungeons5}>Dungeons&Dragons 5</button>
                <button className="btn" onClick={handleFilterVampiroLaMascarada}>Vampiro: La Mascarada</button>
                <button className="btn" onClick={handleFilterChangeling}>Changeling</button>
                <button className="btn" onClick={handleFilterHombreLobo}>Hombre Lobo: Apocalipsis</button>
                <button className="btn" onClick={handleFilterPathfinder}>Pathfinder</button>
                <button className="btn" onClick={handleFilterCustom}>Custom</button>
                </div>)}
        </>)
}