import "../fundadores/Fundadores.css";
import Enrique from '../fundadores/enrique.png';
import Laura from '../fundadores/laura.png';

function Fundadores (){
    return(
        <div className="funda-primary">
            <h1 className="titulo">FUNDADORES</h1>
            <div className="raf">
                <h2 className="titulo-r">Rafael Enrique Vargas Olmos</h2>
                <div className="img-raf">
                    <img src={Enrique} alt="Enrique"
                    className="enri"></img>
                </div>
                <p className="text-raf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="Lau">
                <h2 className="titulo-l">Laura Hernández Gutierrez</h2>
                <div className="img-lau">
                    <img src={Laura} alt="Laura"
                    className="lau"></img>
                </div>
                <p className="text-lau">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </div>
    )
}

export default Fundadores;