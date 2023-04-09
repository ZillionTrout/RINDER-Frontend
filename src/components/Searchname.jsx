import React, { useState } from "react";
import SearchService from '../services/searchService';
import ProfileService from "../services/profileService";

const UserSearch = () => {
    const [username, setUsername] = useState("");
    const [profiles, setProfiles] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); 

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
            if (user !== null && typeof user === 'object') {
                console.log(user);
            } else {
                console.error("No hay ningún usuario con ese nombre");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            {hasSearched && profiles.length === 0 && (
                <p>No se encontraron resultados.</p>
            )}
            {profiles.length > 0 && (
                <ul>
                    {profiles.map((user) => (
                        <li key={user?.id}>
                            <a href={`/${user?.id}`} onClick={() => handleProfileClick(user?.id)}>{user?.username}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserSearch;
