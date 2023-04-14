import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {Spiral as Hamburger} from 'hamburger-react'

function Navbar() {
    const { isLoggedIn, logOutUser } = useContext(AuthContext); 
    const [isOpen, setOpen] = useState(false)
  return (
    <nav className='navlist'><Hamburger toggled={isOpen} toggle={setOpen} />
    { isOpen &&
      <ul>
        <li className='li-nav'>{isLoggedIn &&<Link to="/profile"><p className='li-nav'>Perfil</p> </Link>}</li>
        <li className='li-nav'>{isLoggedIn &&<Link to="/user/editprofile"><p className='li-nav'>Edita tu Perfil</p> </Link>}</li>
        <li className='li-nav'>{isLoggedIn && <p className='li-nav' onClick={() => logOutUser()}>Log out</p>}</li>
      </ul>}      
      <Link to="/" className="logo">
        <img src="https://i.postimg.cc/HkP98j4H/logogreen.png" alt="Logo de la aplicación"/>
      </Link>
    </nav>
  );
}

export default Navbar;