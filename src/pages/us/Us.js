import React from 'react'
import Colaboradores from '../../components/colaboradores/Colaboradores';
import Footer from '../../components/footer/Footer';
import Fundadores from '../../components/fundadores/Fundadores';
import Header from '../../components/header/Header';
import History from '../../components/history/History';
import Vismis from '../../components/vismis/Vismis';


function Us() {
  return (
    <div>
        <Header/>
        <History/>
        <Vismis/>
        <Fundadores/>
        <Colaboradores/>
        <Footer/>
    </div>
  )
}

export default Us