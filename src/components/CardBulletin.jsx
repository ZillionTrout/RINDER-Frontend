import React from "react";
import { Link } from 'react-router-dom'

export default function CardBulletin({ bulletin, handleDelete }) {
  const { _id } = bulletin;

  const handleDeleteBulletin = () => {
    handleDelete(_id);
  }

  // EN PROCESO
  // const handlePointed = () => {

  // }

  return (
    <div className="card">
      <h3>{bulletin.campaign}</h3>
      <img src={bulletin.image} alt={bulletin.game} />
      <p>{bulletin.user}</p>
      <p>{bulletin.role}</p>
      <p>{bulletin.place}</p>
      <p>{bulletin.description}</p>
      <div className="btn-card">
      <button className="btn"><p>¡Apuntate!</p></button>
      <button className="btn"><Link to={`/bulletins/${_id}`}><p>Editar anuncio</p> </Link></button>
      <button className="btn" onClick={handleDeleteBulletin}>Borrar</button>
    </div></div>
  );
}