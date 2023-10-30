import { Principio } from "../Recarga.js";
import "./6Curiosidades.css";

export function CEscrito() {     
  return<body onLoad={window.scroll(0,0)}>
    <div>
     <h2 id="ME1">Mécanicas</h2>
     <p id="ME2">Dicho en la primera seccion del al página, una de las ideas que mejoró la potencia del motor fue 
      la incoporacion cono de difusion variables, esto permite adaptarse a la velocidad del avion para que 
      halla una entrada de aire optima para el funcionamiento del motor, cuando se llega a velocidad 
      supersónica, se crea una onda de choque que actua como freno para el aire que entra al motor, 
      lo que genera una reduccion en la velocidad del aire y enita que se provoque turbulencia 
      dentro del motor.</p>
      <ul>
        <div className="vel">
        <li id="subsonico"></li><figure id="subsonicoF">Entrada de aire a velocidad subsonica, con 
        el difusor dentro de la entrada de aire</figure></div>
        <div className="vel">
        <li id="supersonico"></li><figure id="supersonicoF">Entrada de aire a velocidad Supersónica,
         con difusor adelantado, la onda de choque actua de freno para la entrada de aire actuando como freno
         para el aire que va a entrar al motor</figure>
        </div>
        <div className="vel">
      <li id="schieren"><iframe width="400" height="400" src="https://www.youtube.com/embed/iO-O64q7d_o" frameborder="0">
        </iframe><figure id="schierenF">Entrada de aire a velocidad variable en un cono fijo bajo el Efecto Schlieren</figure></li>        
        </div>
        <div id="DF">
          <li id="difusor"></li><figure id="difusorF">Zona marcada del difusor del Mirage III, 
          en verde es la zona exterior de la entrada de aire, en amarillo es el difusor, 
          y en rojo es un corte que donde se aleja la entrada de aire al chasis del avíon 
          para una entrada limpia sin turbulencia.</figure>
        </div>
     </ul>
    </div>
    <button onClick={Principio} id="BT"> Volver al Inicio</button>  
    </body>
    
}