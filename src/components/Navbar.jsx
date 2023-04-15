import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {Spiral as Hamburger} from 'hamburger-react'

function Navbar() {
    const { isLoggedIn, logOutUser, user } = useContext(AuthContext); 
    const [isOpen, setOpen] = useState(false)
  return (
    <nav className='navlist'><Hamburger toggled={isOpen} toggle={setOpen} />
    { isOpen &&
      <ul>
        <li className='li-nav'>{isLoggedIn &&<Link to={`/profile/${user._id}`}><p className='li-nav'>Perfil</p> </Link>}</li>
        <li className='li-nav'>{isLoggedIn &&<Link to={`/profile/edit/${user._id}`}><p className='li-nav'>Edita tu Perfil</p> </Link>}</li>
        <li className='li-nav'>{isLoggedIn && <p className='li-nav' onClick={() => logOutUser()}>Log out</p>}</li>
      </ul>}      
      <Link to="/" className="logo">
        <img src="https://i.postimg.cc/QMxFQ2wL/logogreenbig.png" alt="Logo de la aplicación"/>
      </Link>
    </nav>
  );
}

export default Navbar;