import "./0Principal/principal.css"
/*importacion de página principal*/
import {React} from "react"
import { useState, useEffect } from "react";
import { Titulo, Pestañas } from "./0Principal/cabecera.js";
import { Inicio, Avance, Combate, Jubilacion,Curiosidades} from "./0Principal/cuerpo.js";
import { Pie } from "./0Principal/final";
/*importacion de página 1*/
import CabeceraC from "./1Comienzo/CabeceraC.js";
import { EscritoC } from "./1Comienzo/TextoC.js";
/*importacion de página 2*/
import CabeceraA from "./2Avance/CabeceraA.js";
import { EscritoA } from "./2Avance/TextoA.js";
/*importacion de página 3*/
import CabeceraF from "./4Combate/CabeceraF.js";
import { EscritoF } from "./4Combate/TextoF.js";
/*importacion de página 5*/
import CabeceraJ from "./5Jubilacion/CabeceraJ.js";
import { EscritoJ } from "./5Jubilacion/textoJ.js";
/*última página*/
import CCabecera from "./6Curiosidades/CabeceraC.js"
import {CEscrito} from "./6Curiosidades/CTexto.js"

export function Prueba(tarea){
  /*almacenaje de datos para seleccion de páginas*/
  const [UsoPagina, setUsoPagina] = useState(0)  

  useEffect(() => {
    localStorage.setItem('Numero', JSON.stringify(UsoPagina))
  }, [])

  useEffect((e) =>{
    let dato = localStorage.getItem('Numero')
    if(dato){setUsoPagina(JSON.parse(UsoPagina))}
  }, [UsoPagina])  

/*opciones de IF para  cambiar de páginas*/
const Pagina = (tarea) =>{
  if(UsoPagina === 0){
    return<body>     
      <Titulo/>
       <Pestañas/>       
     <Inicio/>
     <button className="NM" onClick={() =>{setUsoPagina(1)}}>Click para Seguir Leyendo</button>
    <div>
     <Avance/>
     <button className="NM" onClick={() =>{setUsoPagina(2)}}>Click para Seguir Leyendo</button>
     </div>
     <div>
     <Combate/>
     <button className="NM" onClick={() =>{setUsoPagina(3)}}>Click para Seguir Leyendo</button>
     </div>
     <div>
     <Jubilacion/>
     <button className="NM" onClick={() =>{setUsoPagina(4)}}>Click para Seguir Leyendo</button>
     </div>     
     <div>
     <Curiosidades/>
     <button className="NM" onClick={() =>{setUsoPagina(5)}}>Click para Seguir Leyendo</button>
     </div>
     <div>      
     <Pie />
     </div>
  </body>
  }

if(UsoPagina === 1){
  return <form><td> 
       {CabeceraC()}
       <EscritoC /> 
       </td></form>}
if(UsoPagina === 2){
  return <form><td>  
       {CabeceraA()}
       <EscritoA/> 
       </td></form>}
if(UsoPagina === 3){
  return <form><td>  
       {CabeceraF()}
       <EscritoF/> 
    </td></form>}
if(UsoPagina === 4){
  return <form><td>  
       {CabeceraJ()}
       <EscritoJ/> 
       </td></form>}
if(UsoPagina === 5){
  return <form><td>  
       {CCabecera()}
       <CEscrito/> 
       </td></form>}
}
    return <form><td>
      {Pagina()}
      </td></form>
  }