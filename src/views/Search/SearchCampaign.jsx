import React from "react";

export default function SearchCampaign() {
    return (
        <>
        <form action="/search" method="POST">
            <label>Elige campaña</label>
            <select className="select" name="Campaign" multiple required>
                <option value="Descenso a Averno">Descenso a Averno</option>
                <option value="La tumba de la aniquilación">La tumba de la aniquilación</option>
                <option value="other">Other</option>
            </select>
            <div className="button-form-container">
                <button type="submit">Join us</button>
            </div>
        </form></>
    )
}