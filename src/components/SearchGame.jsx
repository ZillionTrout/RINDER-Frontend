import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function SearchGame() {
    const { isLoggedIn } = useContext(AuthContext); 

    return (
        <>
            <div className="games">
            {isLoggedIn &&<div className="game-row">
                    <Link to="/carddungeons" className="game-button"><p>Dungeons&Dragons</p></Link>
                    <Link to="/carddungeons" className="game-button"><p>Vampiro</p></Link>
                    <Link to="/carddungeons" className="game-button"><p>Changeling</p></Link>
                </div>}
                {isLoggedIn &&<div className="game-row">
                    <Link to="/carddungeons" className="game-button"><p>Hombre Lobo</p></Link>
                    <Link to="/carddungeons" className="game-button"><p>Pathfinder</p></Link>
                    <Link to="/carddungeons" className="game-button"><p>Custom</p></Link>
                </div>}
            </div>
        </>)
}