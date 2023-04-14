import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import bulletinService from "../services/bulletinService";
import pointedService from "../services/pointedService";
import { AuthContext } from '../context/AuthContext';

export default function CardBulletin({ bulletin }) {

  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AuthContext);
  const [newPointed, setNewPointed] = useState(null);
  const [pointedList, setPointedList] = useState([]); 

  useEffect(() => {
    const fetchPointedList = async (userId) => {
      try {
        const response = await pointedService.getPointedList(userId);
        setPointedList(response.users);
      } catch (error) {
        console.error(error)
      }
    }
    fetchPointedList();
  }, [bulletin._id]);

  const handleDeleteBulletin = async () => {
    try {
      await bulletinService.deleteBulletin(bulletin._id);
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  }

  const handlePointed = async () => { 
    try {
      await pointedService.createPointed(bulletin._id, user._id, user.username); 
      setNewPointed({ bulletinId: bulletin._id, userId: user._id, username: user.username });
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      {isLoggedIn && user &&
        <div className="card">
          <h3>{bulletin.campaign}</h3>
          <img src={bulletin.image} alt={bulletin.game} />
          <p>{bulletin.username}</p>
          <p>{bulletin.role}</p>
          <p>{bulletin.place}</p>
          <p>{bulletin.description}</p>
          <p>Usuarios apuntados: {pointedList ? pointedList.length : 0}</p>
          <div className="btn-card">
            <button className="btn" onClick={() => handlePointed(bulletin._id)}><p>¡Apuntate!</p></button>
            <button className="btn"><Link to={`/user/editbulletin`}><p>Editar anuncio</p> </Link></button>
            <button className="btn" onClick={() => handleDeleteBulletin(bulletin._id)}>Borrar</button>
          </div>
        </div>
      }
    </>
  );
}
