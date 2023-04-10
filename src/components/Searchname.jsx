import React, { useState } from "react";
import SearchService from '../services/searchService';
import ProfileService from "../services/profileService";
import { useParams } from "react-router-dom";

const UserSearch = () => {
    const [username, setUsername] = useState("");
    const [profiles, setProfiles] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); 
    const {id} = useParams();

    const searchName = { "username": username };

    const handleSearch = async () => {
        try {
            const data = await SearchService.searchUsers(searchName);
            if (Array.isArray(data)) {
                setProfiles(data);
            } else {
                setProfiles([data]);
            }
            setHasSearched(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleProfileClick = async (id) => {
        try {
            const user = await ProfileService.getProfile(id);
            if (user !== null && typeof user === 'object' && user.id) {
                console.log(user);
            } else {
                console.error("No hay ningún usuario con ese nombre");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="search">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button className="search-button" onClick={handleSearch}>Buscar</button>
            {hasSearched && profiles.length === 0 && (
                <p className="ul-search">No se encontraron resultados.</p>
            )}
            {profiles.length > 0 && (
                <ul className="ul-search">
                    {profiles.map((user) => (
                        <li key={id}>
                            <a href={`/${id}`} onClick={() => handleProfileClick(user.id)}>{user.username}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserSearch;
