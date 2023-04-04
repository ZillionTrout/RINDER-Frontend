import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

  return (
    <footer>
      <button onClick={() => navigate(-1)}>Go back</button>
    </footer>
  );
}

export default Footer;