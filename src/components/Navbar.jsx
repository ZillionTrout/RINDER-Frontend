import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {Spiral as Hamburger} from 'hamburger-react'
// import { NavLink } from 'react-router-dom';

function Navbar() {
    const { isLoggedIn, logOutUser } = useContext(AuthContext); 
    const [isOpen, setOpen] = useState(false)
  return (
    <nav className='navlist'><Hamburger toggled={isOpen} toggle={setOpen} />
    { isOpen &&
    <ul>
      <li className='li-nav'>{isLoggedIn &&<Link to="/profile"><p>Perfil</p> </Link>}</li>
      <li className='li-nav'>{isLoggedIn &&<Link to="/editprofile"><p>Edita tu Perfil</p> </Link>}</li>
      <li className='li-nav'>{isLoggedIn &&<Link to="/yoursmp"><p>Tus mensajes</p> </Link>}</li>
      <li className='li-nav'>{isLoggedIn && <p onClick={() => logOutUser()}>Log out</p>}</li>
      </ul>}      
      <Link to="/" className="logo">
        <img src="https://t3.ftcdn.net/jpg/04/90/47/18/360_F_490471895_AxT4bn59q7GAtN3k3VDJkB7u12E3BHMS.jpg" alt="Logo de la aplicación" />
      </Link>
    </nav>
  );
}

export default Navbar;