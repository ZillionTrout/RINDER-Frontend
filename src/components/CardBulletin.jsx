import React from "react";

export default function CardBulletin({ bulletin, handleDelete }) {
  const { campaign, image, description, _id } = bulletin;

  const handleDeleteBulletin = () => {
    handleDelete(_id);
  }

  return (
    <div className="card">
      <h3>{campaign}</h3>
      <img src={image} alt={campaign} />
      <p>{description}</p>
      <button className="btn" onClick={handleDeleteBulletin}>Borrar</button>
    </div>
  );
}