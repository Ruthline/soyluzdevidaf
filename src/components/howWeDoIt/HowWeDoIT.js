import React from 'react'
import '../howWeDoIt/HowWeDoIT.css';
import {Link} from 'react-router-dom'
function HowWeDoIT() {
  return (
    <section className='how-We'>
        <div className='text-how'>
            <h1>¿Cómo lo hacemos? </h1>
            <p>Con la ejecución de programas que aporten al desarrollo comunitario mediante procesos de promoción, asistencia  y prevención dirigidos a la comunidad en general, con la ayuda desinteresada de terceros.</p>
        </div>
        <div className='programs'>
            <Link to="/projects" className='program'>
                    <h2>Asistencia</h2>
            </Link>
            <Link to="/projects" className='program-two'>
                    <h2>Promoción</h2>
            </Link>
            <Link to="/projects" className='program-three'>
                    <h2>Prevención</h2>
            </Link>
        </div>
    </section>
  )
}

export default HowWeDoIT;