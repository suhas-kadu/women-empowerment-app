import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const NGOInfo = ({ obj1, obj2 }) => {
  return (
    < >
      <Row  className="mb-3 g-5" >
        <Col
          xs={12}
          lg={6}
          md={6}
          className="d-flex flex-column justify-content-center text-left "
        >
          <h3 className="mb-3">{obj1.title}</h3>
          <p className="mb-3">{obj1.content}</p>
          <Button>
            <a className="text-white text-decoration-none" href={obj1.link}>
              Learn more
            </a>
          </Button>
        </Col>
        <Col
          xs={12}
          lg={6}
          md={6}
          className="d-flex flex-column justify-content-between text-left "
          
        >
          <h3 className="mb-3">{obj2.title}</h3>
          <p className="mb-3">{obj2.content}</p>
          <Button>
            <a className="text-white text-decoration-none" href={obj2.link}>
              Learn more
            </a>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default NGOInfo;
