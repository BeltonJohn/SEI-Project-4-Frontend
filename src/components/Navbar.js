import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/auth';
import { removeToken, removeUserId } from '../lib/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const userId = getLoggedInUserId();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    console.log(userId);
    removeUserId();
    navigate('/');
    console.log('logged out');
  };

  return (
    <nav className='navbar-wrapper'>
      {getLoggedInUserId() ? (
        <div className='navigator'>
          <div className='nav'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/create' className='nav-link'>
              Add Entry
            </Link>
            <Link to='/stats' className='nav-link'>
              Stats
            </Link>

            <Link
              to='/'
              id='logout-link'
              className='nav-link'
              onClick={handleLogout}
            >
              Logout
              <i className='fa-solid fa-door-open'></i>
            </Link>
          </div>
        </div>
      ) : (
        <div className='navigator'>
          <div className='nav'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/register' className='nav-link'>
              Register
            </Link>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
