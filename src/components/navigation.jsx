import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            DOÑA CIRE
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#nosotros" className="page-scroll">
                acerca de nosotros
              </a>
            </li>
            <li>
              <a href="#galeria" className="page-scroll">
                Galeria
              </a>
            </li>
            <li>
              <a href="#productos" className="page-scroll">
                Productos
              </a>
            </li>
            <li>
              <a href="#testimonios" className="page-scroll">
                Testimonios
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#preguntas" className="page-scroll">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="#contacto" className="page-scroll">
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
