import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import  PropTypes  from "prop-types";
export const MyCard = (props) => {
  let { name, url, description, via } = props;
  let fSize=description.length > 60 ? "13px" : null;

  return (
    <div className="contaier m-2">
      <Card
        className=" ps-3 m-auto bg-secondary text-light"
        style={{ width: "25rem" }}
      >
        <Row className="d-flex align-items-center ">
          <Col>
            <Card.Img src={url} style={{height:"9rem"}}/>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text className="fst-italic" style={{fontSize:fSize}}>{description} </Card.Text>
              <Card.Subtitle
                className="mb-2 text-end"
                style={{ fontSize: "12px" }}
              >
              via: {via}
              </Card.Subtitle>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
MyCard.protoTypes = {
    name:PropTypes.string,
    url:PropTypes.string,
    description:PropTypes.string,
    via:PropTypes.string
}