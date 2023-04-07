import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Searchname from '../components/Searchname';
import SearchGame from '../components/SearchGame';

export default function Home() {
    const { isLoggedIn, user } = useContext(AuthContext); 
    return (
      <div className='home'>
        {!isLoggedIn && <li><NavLink to="/signup">Sign up</NavLink></li>}
        {!isLoggedIn && <li><NavLink to="/login">Login</NavLink></li>}
        {isLoggedIn && user && <h2>Hello {user.username}</h2> }
        {isLoggedIn &&<h3>Encuentra a tus amigos</h3>}
        {isLoggedIn &&<Searchname />}
        {isLoggedIn &&<h3>Elige tu juego</h3> }
        {isLoggedIn &&<SearchGame />}
        {isLoggedIn &&<Link to="/newbulletin" className='divcreate' ><p className="createbulltin-button">Crea tu anuncio</p> </Link>}
      </div>
  )
}