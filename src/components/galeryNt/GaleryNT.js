import '../galeryNt/GaleryNT.css';
import Galery1 from '../galeryNt/galery1.jpeg';
import Galery2 from '../galeryNt/galery2.jpeg';
import Galery3 from '../galeryNt/galery3.jpeg';
import Galery4 from '../galeryNt/galery4.jpeg';
import Galery5 from '../galeryNt/galery5.jpeg';
import Galery6 from '../galeryNt/galery6.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft, faXmark} from '@fortawesome/free-solid-svg-icons';
function GaleryNT(props){
    return(
        
        <div className="container-galery">
            <h1>Nuestro Trabajo</h1>
            <p>Seguimos llevando felicidad a quienes la necesitan:</p>
            <span className='linea'>
                
            </span>
            <section className='galeria'>
            <a href='#image1'><img src={Galery1} alt=""></img></a>
                <a href='#image2'>
                    <img src={Galery2} alt=""></img>
                </a>
                <a href='#image3'><img src={Galery3} alt=""></img></a>
                <a href='#image4'><img src={Galery4} alt=""></img></a>
                <a href='#image5'><img src={Galery5} alt=""></img></a>
                <a href='#image6'><img src={Galery6} alt=""></img></a>
            </section>

            <article className='light-box' id="image1">
                <a href='#image6' className='next-g'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery1} alt=''>
                </img>
                
                <p>
                <h3>titulo</h3><br></br>
                    titulo</p></div>
                <a href='#image2' className='next-g'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>

            <article className='light-box' id="image2">
                <a href='#image1' className='next-g'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery2} alt=''>
                </img>
                <p>
                <h3>titulo</h3><br></br>
                    titulo</p></div>
                <a href='#image3' className='next-g'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>

            <article className='light-box' id="image3">
                <a href='#image2' className='next-g'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery3} alt=''>
                </img>
                <p>
                <h3>titulo</h3><br></br>
                    titulo</p></div>
                <a href='#image4' className='next-g'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>

            <article className='light-box' id="image4">
                <a href='#image3' className='next-g'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery4} alt=''>
                </img>
                <p>
                <h3>titulo</h3><br></br>
                    titulo</p></div>
                <a href='#image5' className='next-g'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>

            <article className='light-box' id="image5">
                <a href='#image4' className='next-g'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery5} alt=''>
                </img>
                <p>
                <h3>titulo</h3><br></br>
                    titulo</p></div>
                <a href='#image6' className='next-g'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>
            
            <article className='light-box' id="image6">
                <a href='#image5' className='next-g'><FontAwesomeIcon icon={faArrowLeft}/></a>
                <div className='more-info-galery'>
                <img src={Galery6} alt=''>
                </img>
                <p>
                <h3>titulo</h3><br></br>
                    titulo</p></div>
                <a href='#image1' className='next-g'><FontAwesomeIcon icon={faArrowRight}/></a>
                <a href='#' className='close'>
                <FontAwesomeIcon icon={faXmark}/>
                </a>
            </article>
        </div>
    );
}

export default GaleryNT;