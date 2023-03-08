import React from "react";

export const Productos = (props) => {
  return (
    <div id="productos" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Productos</h2>
          <p>
            Calidad y servicio nuestro lema.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <img src={d.img} className="img-responsive" alt={d.img} />{" "}
                  <div className="productos-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
