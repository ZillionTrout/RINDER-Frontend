import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Searchname from '../components/Searchname';

export default function Home() {
    const { isLoggedIn, user } = useContext(AuthContext); 
    return (
    <div className='home'>
    {!isLoggedIn && <li><NavLink to="/signup">Sign up</NavLink></li>}
    {!isLoggedIn && <li><NavLink to="/login">Login</NavLink></li>}
    {isLoggedIn && user && <p>Hello {user.username}</p> }
    {/* {isLoggedIn &&<h1>¿A que quieres jugar?</h1> }
    {isLoggedIn &&<button>Dungeons&Dragons 5e</button>}
    {isLoggedIn &&<button>Anima</button>}
    {isLoggedIn &&<button>Changelling</button>}
    {isLoggedIn &&<button>Vampiro: La mascarada</button>}
    {isLoggedIn &&<button>Otros</button>}
    {isLoggedIn &&<button>Juegos customs</button>} */}
    {isLoggedIn &&<Searchname />}
      {isLoggedIn &&<Link to="/newbulletin" className="createbulltin-button"><p>Crea tu anuncio</p> </Link>}
    </div>
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
