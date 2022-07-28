import React from 'react'
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import IntroductionPPA from '../../../components/introductionPPA/IntroductionPPA';
import { getAll } from '../../../components/sectionsAPP/Projects';
import SectionsAPP from '../../../components/sectionsAPP/SectionsAPP';

function PPA() {
    const projects=getAll();
  return (
    <div>
        <Header/>
        <div className='ppa-section'>
            <IntroductionPPA/>
            <div>
            {
                            projects.map(p=>(
                                <SectionsAPP
                                p1={p.id}
                                p2={p.titulo}
                                p3={p.description}
                                p4={p.imagen}/>
                            ))
                            
                        }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PPA;