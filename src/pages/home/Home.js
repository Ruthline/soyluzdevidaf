import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SliderHome from '../../components/sliderHome/SliderHome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <div>
        <Header/>

        <button className='whatsapp'><a href='https://api.whatsapp.com/send?phone=+573193124627&text=Hola!%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre...'><i><FontAwesomeIcon  icon={faWhatsapp}/></i></a></button>
        <SliderHome/>
        <Footer/>
    </div>
  )
}

export default Home;