import { Link } from 'react-router-dom';
import { useLogout } from './../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

//styles & images
import './Navbar.css'
import logo from '../assets/idea.png'

const Navbar = () => {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={logo} alt="logo"/>
          <span>Team Tasks</span>
        </li>
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
          <>
            <li>
              {!isPending && <button className="btn" onClick={logout}>Logout</button>}
              {isPending && <button className="btn" disabled>Logging...</button>}
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;