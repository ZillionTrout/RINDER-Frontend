import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { Link } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
  return (
    <footer>
    {isLoggedIn &&<Link className="profile-button" to="/tutorial">Tutorial</Link>}
    <h6>Desarrollado por Estefania Egea</h6>
      <button className="profile-button" onClick={() => navigate(-1)}>Go back</button>
    </footer>
  );
}

export default Footer;