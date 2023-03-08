import React from "react";

export const Nosotros = (props) => {
  return (
    <div id="nosotros">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/nosotros.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="nosotros-text">
              <h2>Acerca de nosotros</h2>
              <p>{props.data ? props.data.parrafo : "Cargando..."}</p>
              <h3>¿Porque elegirnos?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Porque.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "Cargando"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Porque2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "Cargando"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
