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
              <div id="a1"  className="etiqueta" >¿Donde nos ubicamos?</div>
              <div className="contenido"  >
              Nuestro punto de venta se encuentra en un puesto de pollos  en infonavid presidentes, en la gloriera en tijuana, Baja California. en los horarios de .... ..... ...
              </div>
          </div>

          <hr className="largo"/>
          <div className={active.a2}  onClick={handleClick} >
              <div id="a2" className="etiqueta">¿Que presentaciones de su producto manejan?</div>
              <div className="contenido">
              Actualmente contantamos con 2 presentaciones de nuestro producto, 250 gramos y 500 gramos de nuestro rico y delisioso Mole Tradicional DOÑA CIRE
              </div>
          </div>

          <hr className="largo"/>
          <div className={active.a3}  onClick={handleClick} >
              <div id="a3" className="etiqueta">¿Que hace distinto a su producto?</div>
              <div className="contenido">
              Nuestro producto es una reseta artesanal, pasado de generacion en generacion, al estilo Oaxaqueño, usando productos 100% naturales y sin conservadores.
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
