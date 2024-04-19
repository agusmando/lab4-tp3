import React from "react";
import { Instrumento } from "../data/datos";
import { Col, Container, Row } from "react-bootstrap";

interface InstrumentoProps {
  instrumento: Instrumento;
}

const InstrumentoComponent: React.FC<InstrumentoProps> = ({ instrumento }) => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={"../../img/" + instrumento.imagen}
            alt={instrumento.nombre}
          />
        </Col>
        <Col xs={10}>
          <h6>{instrumento.nombre}</h6>
          <h3>${instrumento.precio}</h3>
          {instrumento.costoEnvio === "G" ? (
            <p style={{ color: "#3FBF48" }}><img src="../../img/camion.png" alt="Camión" />Envío gratis a todo el país</p>
          ) : (
            <p style={{ color: "#F2620F" }}>Costo de Envío Interior de Argentina: ${instrumento.costoEnvio}</p>
          )}
          <p>{instrumento.cantidadVendida} vendidos</p>
        </Col>
        <hr />
      </Row>
    </Container>
  );
};

export default InstrumentoComponent;
