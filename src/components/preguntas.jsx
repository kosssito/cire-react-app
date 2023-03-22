import React, { useState } from "react";

export const Preguntas = (props) => {


const [active, setActive]= useState({
  a1: "contenedor",
  a2: "contenedor",
  a3: "contenedor",
  a4: "contenedor",
  a5: "contenedor"
})

const handleClick = (e)=>{
  if(active[e.target.id] === "contenedor")
  return setActive({
    ...active,
    [e.target.id]: "contenedor activa"
  })

  return setActive({
    ...active,
    [e.target.id]: "contenedor"
  })
}

  return (
    <div id="preguntas" className="text-center">
      <div className="container" >
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Preguntas Frecuentes</h2>
        </div>
        <div className="acordeon-cuerpo">
          <div className="acordeon">
         
          <hr className="largo"/>
          <div  className={active.a1}  onClick={handleClick} >
              <div id="a1"  className="etiqueta" >¿Qué sabor tiene su mole?</div>
              <div className="contenido"  >
              Es un mole negro poco dulce con un toque de amargo y no es picoso. Al mero estilo oxaqueño con ingredientes 100% naturales.
              </div>
          </div>

          <hr className="largo"/>
          <div className={active.a2}  onClick={handleClick} >
              <div id="a2" className="etiqueta">¿Como se prepara?</div>
              <div className="contenido">
              Este mole esta listo para agregarle el caldo de pollo, y esta listo para cervirse.
              </div>
          </div>

          <hr className="largo"/>
          <div className={active.a3}  onClick={handleClick} >
              <div id="a3" className="etiqueta">¿Se puede hacer mas dulce o picoso el mole?</div>
              <div className="contenido">
              Para hacer mas dulce el mole agrregue chocolate en barra o azucar, y si quiere mas picoso, agragar chile de arbol, frito y molido.
              </div>
          </div>

          <hr className="largo"/>
          <div className={active.a4}  onClick={handleClick} >
              <div id="a4" className="etiqueta">¿Hacen pedidos por encargo?</div>
              <div className="contenido">
              ¿Hacen pedidos por encargo?
              </div>
          </div>
          
          <hr className="largo"/>
          <div className={active.a5}  onClick={handleClick} >
              <div id="a5" className="etiqueta">¿Entregan a domicilio?</div>
              <div className="contenido">
              Despues de 5 Kg entregamos a domicilio en tijuana, Baja California
              </div>
          </div>
          <hr className="largo"/>
  

            

          </div>
        </div>
      </div>
    </div>
  );
};
