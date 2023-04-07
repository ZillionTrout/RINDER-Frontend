import { useEffect, useState } from "react";
import ProfileService from '../services/profileService';
// import axios from "axios";

export default function SearchName() {
    const [searchTerm, setSearchTerm] = useState("");
    const [profiles, setProfiles] = useState([]);

    const getOtherProfile = async () => {      
        try {
        const response = await ProfileService.getOtherProfile();
// console.log(response);
        setProfiles(response);
        } catch (error) {
        console.error(error);
        }
    };

    useEffect(() => {
        getOtherProfile();
    }, []);

    const handleSearch = (event) => {
    event.preventDefault();
    const filtered = profiles.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProfiles(filtered);
    };

    const handleChange = (event) => {
    setSearchTerm(event.target.value);
    };
    return (
    <div className="searchname">
        <form onSubmit={handleSearch}>
            <input type="text" id="searchTerm" value={searchTerm} onChange={handleChange}/>
            <button className="profile-button"onClick={() => {getOtherProfile()}}>Search </button>
        </form>
        {profiles.map((user) => (
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
);
}