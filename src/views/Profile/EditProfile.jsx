import React from "react";

export default function EditProfile() {
    return (
        <div class="holis">
            <form>
            <input type="text" name="city" placeholder="¿En que ciudad vives?"></input>
            <input type="text" name="roling" placeholder="¿Desde cuando juegas a rol?"></input>
            <input type="text" name="games" placeholder="¿Cuales son tus juegos favoritos?"></input>
            <input type="text" name="description" placeholder="Sobre ti"></input>
            <button type="submit">Save changes</button>
            </form>
        </div>
)}