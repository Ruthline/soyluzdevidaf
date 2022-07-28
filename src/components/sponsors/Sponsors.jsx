import React from 'react'
import Patrocinador1 from '../sponsors/patrocinador1.png';
import Patrocinador2 from '../sponsors/patrocinador2.png';
import Patrocinador3 from '../sponsors/patrocinador3.png';
import Patrocinador4 from '../sponsors/patrocinador4.jpg';
import '../sponsors/Sponsors.css'
function Sponsors() {
  return (
    <section className='container-marks'>
        <h1>Nuestros patrocinadores</h1>
        <div className="marks">
          <div className="cont-imgs-s">
          <img src={Patrocinador1} alt="Imagen patrocinadora" className='img-s'/>
          </div>
          <div className="cont-imgs-s">
          <img src={Patrocinador2} alt="Imagen patrocinadora" className='img-s'/>
          </div>
          <div className="cont-imgs-s">
          <img src={Patrocinador3} alt="Imagen patrocinadora" className='img-st'/>
          </div>
          <div className="cont-imgs-s">
          <img src={Patrocinador4} alt="Imagen patrocinadora" className='img-sf'/>
          </div>
          <div className="cont-imgs-s">
          <img src={Patrocinador2} alt="Imagen patrocinadora" className='img-s'/>
          </div>
            
            
        </div>
    </section>
  )
}

export default Sponsors;