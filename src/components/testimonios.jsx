import React from "react";

export const Testimonios = (props) => {
  return (
    <div id="testimonios">
      <div className="container">
        <div className="section-title text-center">
          <h2>¿Que dicen nuestros clientes?</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonios">
                    <div className="testimonios-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonios-content">
                      <p>"{d.text}"</p>
                      <div className="testimonios-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
