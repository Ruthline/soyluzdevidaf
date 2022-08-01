import "../history/History.css";
import Logo from '../history/logo1.png';

function History () {
    return(
        <history>
            <div className="card-primary">
                <div className="card-history">
                    <h1>NUESTRA HISTORIA</h1>
                    <div className="imagen">
                        <img src={Logo} alt="Logo" className="logo-h"></img>   
                    </div>
                    <div className="texto">
                        <p>La Fundación Soy Luz de vida es una entidad sin ánimo de lucro  que nace el 09 de julio del 2020, como una iniciativa filantrópica de profesionales sociales,   que tienen como objetivo la formulación y ejecución de programas que aporten al desarrollo comunitario mediante procesos de formación, asistencia  y bienestar dirigidos a la comunidad en general, con la ayuda desinteresada de terceros que por medio de donaciones* han permitido suplir las necesidades de seres humanos en dificultad y así construir tejido social; entendiendo que pese a la adversidad se puede ser luz de vida para los demás. </p>
                    </div>
                </div>
            </div>  
        </history>
    )     
}

export default History;