import React, { useState } from "react";

export const Preguntas = (props) => {
  const [active, setActive] = useState({});

  const handleClick = (e) => {
    if (
      active[e.target.id] === "contenedor" ||
      active[e.target.id] === undefined
    )
      return setActive({
        ...active,
        [e.target.id]: "contenedor activa",
      });

    return setActive({
      ...active,
      [e.target.id]: "contenedor",
    });
  };

  return (
    <div id="preguntas" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Preguntas Frecuentes</h2>
        </div>
        <div className="acordeon-cuerpo">
          <div className="acordeon etiqueta">
            {props.data
              ? props.data.map((p, i) => (
                  <div
                    key={i}
                    className={active["a" + (i + 1)]}
                    onClick={handleClick}
                  >
                    <hr className="largo" />
                    <div id={`a${i + 1}`} className="etiqueta">
                      {p.pregunta}
                    </div>
                    <div className="contenido">{p.respuesta}</div>
                  </div>
                ))
              : "loading"}
          </div>
          <hr className="largo acordeon-cuerpo" />
        </div>
      </div>
    </div>
  );
};
