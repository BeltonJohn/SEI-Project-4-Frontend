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
    <nav className='navbar-wrapper is-dark'>
      {getLoggedInUserId() ? (
        <div className='navigator'>
          <div className='nav'>
            <Link to='/' className='navbar-item'>
              <p className='fontstyling'>Home </p>
              <span className='icon'>
                <i className='fas fa-home has-text-white'></i>
              </span>
            </Link>
            <Link to='/create' className='navbar-item'>
              <p className='fontstyling'>Add Entry </p>
              <span className='icon'>
                <i className='fas fa-plus-circle has-text-white'></i>
              </span>
            </Link>
            <Link to='/stats' className='navbar-item'>
              <p className='fontstyling'>Stats </p>
              <span className='icon'>
                <i className='fas fa-list-alt has-text-white'></i>
              </span>
            </Link>

            <Link
              to='/'
              id='logout-link'
              className='navbar-end'
              onClick={handleLogout}
            >
              <p className='fontstyling'>Logout </p>
              <span className='icon'>
                <i className='fas fa-solid fa-door-open has-text-white'></i>
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div className='navigator'>
          <div className='nav'>
            <Link to='/' className='navbar-item'>
              <p className='fontstyling'>Home </p>
              <span className='icon'>
                <i className='fas fa-home has-text-white'></i>
              </span>
            </Link>
            <Link to='/register' className='navbar-item'>
              <p className='fontstyling'>Register </p>
              <span className='icon'>
                <i className='fas fa fa-user-plus has-text-white'></i>
              </span>
            </Link>
            <Link to='/login' className='navbar-item'>
              <p className='fontstyling'>Login </p>
              <span className='icon'>
                <i className='fas fa-sign-in-alt has-text-white'></i>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
