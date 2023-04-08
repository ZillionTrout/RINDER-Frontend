import React from "react";

export default function CardBulletin({ bulletin, handleDelete }) {
  const { _id } = bulletin;

  const handleDeleteBulletin = () => {
    handleDelete(_id);
  }

  return (
    <div className="card">
      <h3>{bulletin.campaign}</h3>
      <img src={bulletin.image} alt={bulletin.game} />
      <p>{bulletin.Role}</p>
      <button className="btn" onClick={handleDeleteBulletin}>Borrar</button>
    </div>
  );
}