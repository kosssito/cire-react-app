import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.titulo : "Cargando"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.parrafo: "Cargando"}</p>
                <a
                  href="#nosotros"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Acerca de nosotros
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
