import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
import Searchname from '../components/Searchname';

export default function Home() {
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 
  // const navigate = useNavigate();
  return (
    <>
    <h1>¿A que quieres jugar?</h1>
    <button>Dungeons&Dragons 5e</button>
    <button>Anima</button>
    <button>Changelling</button>
    <button>Vampiro: La mascarada</button>
    <button>Otros</button>
    <button>Juegos customs</button>
      <Searchname />
    </>
    // <div>
    //       {user && <p>Hello {user.username}</p> }
    //   <h1>Home</h1>
    //   <ul>
    //     <li><NavLink to="/">Home</NavLink></li>
    //     {!isLoggedIn && <li><NavLink to="/signup">Sign up</NavLink></li>}
    //     {!isLoggedIn && <li><NavLink to="/login">Login</NavLink></li>}
    //     {isLoggedIn && <li><NavLink to="/private">Private view</NavLink></li>}
    //     {isLoggedIn && <li><button onClick={() => logOutUser()}>Log out</button></li>}
    //     <li><button onClick={() => navigate(-1)}>Go back</button></li>
    //   </ul>
    //   <Searchname />
    // </div>
  )
}
