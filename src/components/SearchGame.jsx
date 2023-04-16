import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function SearchGame() {
    const { isLoggedIn } = useContext(AuthContext); 

    return (
        <>
            <div className="games">
                {isLoggedIn &&<div className="game-row">
                    <Link to="/carddungeons" className="game-button"><img src="https://i.postimg.cc/PprbKDyj/dungeon1.png" alt="dungeons&dragons" /></Link>
                    <Link to="/cardvampiro" className="game-button"><img src="https://i.postimg.cc/PvCWnk0V/vampiro1.png" alt="vampiro" /></Link>
                    <Link to="/cardchangeling" className="game-button"><img src="https://i.postimg.cc/PCYMqTJB/changeling1.png" alt="changeling" /></Link>
                </div>}{isLoggedIn &&<div className="listgames"><p>Dungeons&Dragons</p><p>Vampiro</p><p> Changeling</p></div>}
                {isLoggedIn &&<div className="game-row">
                    <Link to="/cardlobo" className="game-button"><img src="https://i.postimg.cc/XGHfPv1y/lobo1.png" alt="lobo" /></Link>
                    <Link to="/cardpathfinder" className="game-button"><img src="https://i.postimg.cc/XXqcCwXK/pathfinder1.png" alt="pathfinder" /></Link>
                    <Link to="/cardcustom" className="game-button"><img src="https://i.postimg.cc/bGRHQgQg/custom1.png" alt="custom" /></Link>
                </div>}{isLoggedIn &&<div className="listgames"><p>HombreLobo</p><p> Pathfinder</p><p> Custom</p></div>}
            </div>
        </>
    )
}