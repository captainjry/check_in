import React from "react";
import Dragula from "react-dragula";
import "../../node_modules/dragula/dist/dragula.css";
import "../../node_modules/dragula/dist/dragula.min.css";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

const personsData = {
  persons: {
    "person-1": { id: "person-1", content: "omegaLUL" },
    "person-2": { id: "person-2", content: "omegalol" },
    "person-3": { id: "person-3", content: "omegaLawl" },
    "person-4": { id: "person-4", content: "omegaLel" },
    "person-5": { id: "person-5", content: "omegaez" },
    "person-6": { id: "person-6", content: "omegaclap" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      personsID: [
        "person-1",
        "person-2",
        "person-3",
        "person-4",
        "person-5",
        "person-6"
      ]
    }
  },
  columnOrder: ["column-1"]
};

class Setting extends React.Component {
  componentDidMount() {
    let left = document.getElementById("left");
    let left2 = document.getElementById("left2");
    let right = document.getElementById("right");
    Dragula([left, left2, right]);
  }
  render() {
    return (
      <div className="content">
        <div className="headWrap">
          <Row>
            <Col lg="7">
              <h2 className="tagHeader">Tag</h2>
            </Col>
            <Col lg="3">
              <h2 className="personHeader">Persons</h2>
            </Col>
            <Col lg="2">
              <Button color="default">Add person</Button>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <Form>
                <InputGroup className="no-border">
                  <Input defaultValue="" placeholder="Search..." type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="nc-icon nc-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
            <Col lg="5">
              <Form>
                <InputGroup className="no-border">
                  <Input defaultValue="" placeholder="Search..." type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="nc-icon nc-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <Card>
                <Row>
                  <Col lg="6" id="left">
                    <Card>
                      <CardHeader>user1</CardHeader>
                      <CardBody>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>user2</CardHeader>
                      <CardBody>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>user3</CardHeader>
                      <CardBody>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" id="left2">
                    <Card>
                      <CardHeader>user4</CardHeader>
                      <CardBody>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>user5</CardHeader>
                      <CardBody>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>user6</CardHeader>
                      <CardBody>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="5">
              <Card>
                <Row>
                  <Col id="right">
                    <Card>
                      <CardHeader>user7</CardHeader>
                      <CardBody>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>user8</CardHeader>
                      <CardBody>
                        <p>Lorem ipsum dolor sit amet.</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Setting;
