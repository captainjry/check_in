import React from "react";
import axios from "axios";

import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

const buttonStyle = {
  margin: 0
};
class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peopleinfo: []
    };
  }
  componentDidMount() {
    axios

      .post("http://192.168.16.50:3000/api/v1/peopleinfo")
      .then(res => {
        const response = res.data.Data;
        //console.log(response);
        let peopleinfo = [];
        response.map((item, key) => {
          peopleinfo.push({
            name: item.person_firstname + " " + item.person_lastname,
            tel: item.person_tel,
            email: item.person_email
          });
        });
        this.setState({ peopleinfo: peopleinfo });

        console.log(peopleinfo);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <div className="numbersD">User Management</div>
            </Col>
            <Col>
              <div className="right">
                <Button color="info">
                  <span className="btn-label">
                    <i className="nc-icon nc-simple-add" />
                  </span>
                  Add Management
                </Button>
              </div>
            </Col>
          </Row>
          <Input
            className="search2"
            defaultValue=""
            placeholder="Search..."
            type="text"
          />
          <Row>
          {this.state.peopleinfo.map((item, key) => {
            return (
              
              <Col lg="6">
                <Card>
                  <CardBody>
                    <Row>
                      <Col lg="3">
                        <img
                          alt="..."
                          className="img-raisedc2"
                          src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                        />
                      </Col>
                      <Col lg="9">
                        <Row className="menucard">
                          <Button
                            style={buttonStyle}
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip42906017"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-ruler-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip42906017"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            style={buttonStyle}
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip570363224"
                            title=""
                            type="button"
                          >
                            <i className="nc-icon nc-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip570363224"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </Row>
                        <Row>
                          <Col className="name">{item.name}</Col>
                        </Row>

                        <Row className="info">Mobile : {item.tel}</Row>
                        <Row className="info">Email : {item.email}</Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              
            );
          })}
          </Row>

          <Row className="page">
            <nav aria-label="Page navigation example">
              <Pagination
                className="pagination pagination-primary"
                listClassName="pagination-primary"
              >
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    5
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
