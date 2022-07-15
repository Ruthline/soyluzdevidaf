import React from 'react'
import { Link } from 'react-router-dom';
import '../texthomeNT/TextHomeNT.css'
function TextHomeNT() {
  return (
    <div className='box-nt'>
    <div className='container-nt'>
        <div className='text-nt'>
            <h1>Nuestro Trabajo</h1>
            <p>Tabajamos de manera integral las problemáticas de niños, niñas, adolescentes  y adultos haciendo énfasis en los más vulnerables, de modo que estos sean partícipes de su propio cambio, reconociendo sus potencialidades, siendo luz para sí mismos como para los demás. De modo que generen buen impacto a la sociedad, a sus familias y su entorno.</p>
        </div>
        <div className='container-more'>
          <button className='more'><Link to="/workus">Conocer más</Link></button>
        </div>
    </div>
    </div>
  )
}

export default TextHomeNT;