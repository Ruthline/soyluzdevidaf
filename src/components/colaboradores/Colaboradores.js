import "../colaboradores/Colaboradores.css";
import Kuepa from '../colaboradores/kuepa.png';
import Citi from '../colaboradores/citi.png';


function Colaboradores () {
    return(
        <div className="colab-primary">
            <h1 className="titulo-p">NUESTROS COLABORADORES</h1>
            <div className="text-colab">
                <h2 className="titulo-second">Ruth Nemoga y Lina Trujillo</h2>
                <p className="texto-d"> Por medio de un programa en alianza con la institución Kuepa y Citi fundation las  estudiantes egresadas hicieron parte del desarrollo  de este proceso web.</p>
            </div>
            <div className="imagenes">
                <div className="img-kuepa">
                    <img src={Kuepa} alt="Kuepa" className="kuepa"></img>
                </div>
                <div className="img-citi">
                    <img src={Citi} alt="Citi" className="citi"></img>
                </div> 
            </div>
                   
        </div>

    )  
}

export default Colaboradores;
