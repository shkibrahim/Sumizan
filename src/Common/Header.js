import React from 'react';
import Logo from '../Images/Logo SVG/Sumizan Logo SVG.svg'
import '../CSS/Main.css'
import '../CSS/Common.css';
import '../CSS/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <nav className='header'>
        <div className='brand'>
          <img src={Logo} alt='logo' className='logo' />
        </div>
        <ul className='headLinks'>
        <li>
            <Link to='/' style={{ textDecoration: 'none'}} className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' style={{ textDecoration: 'none'}} className='link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/services' style={{ textDecoration: 'none'}} className='link'>
              Services
            </Link>
          </li>
          <li>
            <Link to='/portfolio' style={{ textDecoration: 'none'}} className='link'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to='/contact' style={{ textDecoration: 'none'}} className='link'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
     );
    };
    
    export default Header;