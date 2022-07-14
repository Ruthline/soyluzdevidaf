import React from 'react'
import '../footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div className='contactUs'>
                <h2>Contáctanos</h2>
                <div className='contacUs-icons'>
                    <p><i><FontAwesomeIcon icon={faEnvelope}/> </i>correo@correo.com</p>
                    <a href=''><i><FontAwesomeIcon icon={faInstagram}/></i> Fundación Soy luz de Vida</a>
                    <a href=''><i><FontAwesomeIcon icon={faFacebook}/></i> Fundación Soy luz de Vida</a>
                    <a href=''><i><FontAwesomeIcon icon={faYoutube}/></i> Fundación Soy luz de Vida</a>
                </div>
            </div>
            <div className='sources'>
                <h2>Recursos</h2>
                <div className='sources-link'>
                    <Link to="/terms">Política de privacidad</Link>
                    <Link to="/surrender">Informes mensuales</Link>
                    <Link to="/volunter">Voluntariado</Link>
                    <Link to="/us">Nosotros</Link>
                    <Link to="/donation">Donaciones</Link>
                </div>
            </div>
            <div className='rights'>
            <h2>Fundación Soy Luz de Vida</h2>
                <div className='rights-link'>
                    <p>Fundación sin ánimo de lucro</p>

                    <Link to="/rights-reserved">2022 © Derechos Reservados • Desarrollado por estudiantes Kuepa</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;