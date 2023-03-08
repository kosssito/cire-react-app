import React from "react";

export const Contact = () => {
  return (
    <div id="contacto">
      <div className="section-title">
        <h2>Contactanos</h2>
      </div>
      <div className="container"></div>
      <div className="container">
        <div className="cont">
          <div className="row">
            <div className="col-sm-6">
              <div className="well">
                <h3 style={{ line_height: "20%" }}>
                  <i
                    className="fa fa-home fa-1x"
                    style={{ line_height: "6%", color: "#339966" }}
                  ></i>{" "}
                  Punto de Venta
                </h3>
                <p style={{ margin_top: "6%", line_height: "35%" }}>
                  Vicente Guerrero 6331, Presidentes, 22215 Tijuana, B.C.
                </p>

                <h3 style={{ line_height: "20%" }}>
                  <i
                    className="fa fa-envelope fa-1x"
                    style={{ line_height: "6%", color: "#339966" }}
                  ></i>{" "}
                  E-Mail
                </h3>
                <p style={{ margin_top: "6%", line_height: "35%" }}>
                  molecireventas@gmail.com
                </p>

                <h3 style={{ line_height: "20%" }}>
                  <i
                    className="fa fa-phone fa-1x"
                    style={{ line_height: "6%", color: "#339966" }}
                  ></i>{" "}
                  <i
                    className="fa fa-whatsapp fa-1x"
                    style={{ line_height: "6%", color: "#339966" }}
                  ></i>{" "}
                  Telefonos
                </h3>

                <p>(664) 224-91-47 </p>
                <p>(663) 240-88-30</p>
                <p>(664) 891-51-30</p>

                <h3 style={{ line_height: "20%" }}>
                  <i
                    className="fa fa-yelp fa-1x"
                    style={{ line_height: "6%", color: "#339966" }}
                  ></i>{" "}
                  Redes Sociales
                </h3>

                <div className="d-flex">
                  <i
                    className="fa fa-facebook-square fa-5x "
                    style={{ font_size: "48px", color: "blue" }}
                  ></i>{" "}
                  <i
                    className="fa fa-youtube-play fa-5x"
                    style={{ font_size: "48px", color: "red" }}
                  ></i>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              {
                // eslint-disable-next-line jsx-a11y/iframe-has-title
                <iframe src="https://maps.google.com/maps?output=embed&amp;q=%E2%80%8BVicente%20Guerrero%206331%2C%20Presidentes%2C%2022215%20Tijuana%2C%20B.C.&amp;t=m"></iframe>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
