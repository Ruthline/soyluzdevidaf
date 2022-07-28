import React from 'react'
import '../ourImpact/OurImpact.css';
function OurImpact() {
  return (
    <section className='our-impact'>
        <h1 className='titulo'>Nuestro Impacto</h1>
        <div className='i-purple-one'>
            <h2>500 Niños</h2>
            <p>Niños de escasos recursos celebran sus cumpleaños</p>
        </div>
        <div className='i-blue-one'>
        <h2>100 Adultos Mayores</h2>
            <p>Comparten tardes afectivas y reciben donaciones</p>
        </div>
        <div className='i-purple-two'>
        <h2>Población general</h2>
            <p>segun el tipo de población se reparte donacion </p>
        </div>
        <div className='i-blue-two'>
        <h2>200 Niños</h2>
            <p>Reciben atención psicosocial y donaciones</p>
        </div>

    </section>
  )
}

export default OurImpact;