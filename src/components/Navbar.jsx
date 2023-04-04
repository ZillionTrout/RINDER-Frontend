// import React, { useContext } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// export default function Navbar() {
//   const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 
//   const navigate = useNavigate();
//   return (
//     <div>
      
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/profile" className="profile-button">
      <img src="http://cdn.onlinewebfonts.com/svg/img_561543.png" alt="avatar" />
      </Link>
      <Link to="/" className="logo">
        <img src="https://t3.ftcdn.net/jpg/04/90/47/18/360_F_490471895_AxT4bn59q7GAtN3k3VDJkB7u12E3BHMS.jpg" alt="Logo de la aplicación" />
      </Link>
    </nav>
  );
}

export default Navbar;