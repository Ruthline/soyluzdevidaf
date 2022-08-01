import React from 'react'
import "../contactanosb/Contactanosb.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contactanosb() {
    return (
        <div className="contac-p">
            <h1>Contáctanos</h1>
            <div className="text-contac">
                <p> Su opinión es muy importante para nosotros! Para sugerencias, felicitaciones y quejas o peticiones enviar un mensaje por alguno de nuestros canales de comunación o dando click en el botón de WhatsApp.</p>
                <button className='whats'><h4>WhatsApp  </h4> <a href='https://api.whatsapp.com/send?phone=+573193124627&text=Hola!%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre...'> <i><FontAwesomeIcon icon={faWhatsapp} /></i></a></button>
                
            </div>
            <div className="iconos-redes">
                    <a href='mailto:correo@correo.com'><i><FontAwesomeIcon icon={faEnvelope}/></i></a>
                    <a href='https://www.facebook.com/fundacionsoyluzdevida'><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                    <a href='soyluzdevidaf'><i><FontAwesomeIcon icon={faInstagram} /></i></a>

                </div>

        </div>
    )
}

export default Contactanosb;