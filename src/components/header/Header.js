
import React from 'react'
import Logo from '../header/logo.svg';
import {Link} from 'react-router-dom';
import "../header/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBars} from '@fortawesome/free-solid-svg-icons';

function Header() {
    
  return (
    <header>
        <nav>
            <Link to="/home" className='item'>
            <img src={Logo} alt="Logo" className="logo"></img></Link>
            <input type="checkbox" id="check"></input>
            <label for="check" className="checkbtn">
            <FontAwesomeIcon icon={faBars} />
            </label>
            <ul>
                <li>
                    <Link to="/home" className='item'>Inicio</Link>
                </li>

                <li>
                <div class="dropdown">
                        <div className="dropbtn item">Proyectos</div>
                        <div className="dropdown-content">
                            <div className='dropdown-box'>
                            <Link to="/workus">Nuestro Trabajo</Link>
                        <Link to="/projects">Prevención, Formación y asistencia</Link>
                            </div>
                        
                        </div>
                    </div>
                </li>

                <li>
                    <Link to="/us" className='item'>Nosotros
                    </Link>
                </li>
                
                <li>
                    <Link to="/contact" className='item'>Contáctanos
                   </Link>
                </li>

                
            </ul>
        </nav>
    </header>
  )
}

export default Header;