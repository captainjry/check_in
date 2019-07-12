import React from "react";
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Table
} from "reactstrap";

import TrackMap from "./TrackMap";

import "./Track.css";

import floor1 from "../assets/img/SIIT floor plan 2/f1.svg";
import floor2 from "../assets/img/SIIT floor plan 2/f2.svg";
import floor3 from "../assets/img/SIIT floor plan 2/f3.svg";
import floor4 from "../assets/img/SIIT floor plan 2/f4.svg";
import floor5 from "../assets/img/SIIT floor plan 2/f5.svg";
import floor6 from "../assets/img/SIIT floor plan 2/f6.svg";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: ""
    };
  }

  render() {
    return (
      <>
        <div className="content">
          <div className = "headWrap">
            <Row>
              <Col lg="6" md="8" sm="10" xs="10">
                <h2 className="trackHeader">Tracking</h2>
              </Col>
              <Col lg="6" md="4" sm="8" xs="8">
                <Form className="pull-right">
                  <InputGroup className="no-border">
                    <Input
                      defaultValue=""
                      placeholder="Search..."
                      type="text"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="nc-icon nc-zoom-split" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </div>
          <Card>
            <Row>
              <Col lg="6" md="6">
                <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <Nav id="tabs" role="tablist" tabs>
                      <NavItem>
                        <NavLink
                          aria-expanded={this.state.horizontalTabs === "fl1"}
                          data-toggle="tab"
                          href="#pablo"
                          role="tab"
                          className={
                            this.state.horizontalTabs === "fl1" ? "active" : ""
                          }
                          onClick={() =>
                            this.setState({
                              horizontalTabs: "fl1",
                              floorState: floor1
                            })
                          }
                        >
                          Fl1
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-expanded={this.state.horizontalTabs === "fl2"}
                          data-toggle="tab"
                          href="#pablo"
                          role="tab"
                          className={
                            this.state.horizontalTabs === "fl2" ? "active" : ""
                          }
                          onClick={() =>
                            this.setState({
                              horizontalTabs: "fl2",
                              floorState: floor2
                            })
                          }
                        >
                          Fl2
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-expanded={this.state.horizontalTabs === "fl3"}
                          data-toggle="tab"
                          href="#pablo"
                          role="tab"
                          className={
                            this.state.horizontalTabs === "fl3" ? "active" : ""
                          }
                          onClick={() =>
                            this.setState({
                              horizontalTabs: "fl3",
                              floorState: floor3
                            })
                          }
                        >
                          Fl3
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-expanded={this.state.horizontalTabs === "fl4"}
                          data-toggle="tab"
                          href="#pablo"
                          role="tab"
                          className={
                            this.state.horizontalTabs === "fl4" ? "active" : ""
                          }
                          onClick={() =>
                            this.setState({
                              horizontalTabs: "fl4",
                              floorState: floor4
                            })
                          }
                        >
                          Fl4
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-expanded={this.state.horizontalTabs === "fl5"}
                          data-toggle="tab"
                          href="#pablo"
                          role="tab"
                          className={
                            this.state.horizontalTabs === "fl5" ? "active" : ""
                          }
                          onClick={() =>
                            this.setState({
                              horizontalTabs: "fl5",
                              floorState: floor5
                            })
                          }
                        >
                          Fl5
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-expanded={this.state.horizontalTabs === "fl6"}
                          data-toggle="tab"
                          href="#pablo"
                          role="tab"
                          className={
                            this.state.horizontalTabs === "fl6" ? "active" : ""
                          }
                          onClick={() =>
                            this.setState({
                              horizontalTabs: "fl6",
                              floorState: floor6
                            })
                          }
                        >
                          Fl6
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <TabContent
                  className="text-center"
                  id="my-tab-content"
                  activeTab={this.state.horizontalTabs}
                >
                  <TabPane tabId="fl1" role="tabpanel">
                    <p>Floor1</p>
                  </TabPane>
                  <TabPane tabId="fl2" role="tabpanel">
                    <p>Floor2</p>
                  </TabPane>
                  <TabPane tabId="fl3" role="tabpanel">
                    <p>Floor3</p>
                  </TabPane>
                  <TabPane tabId="fl4" role="tabpanel">
                    <p>Floor4</p>
                  </TabPane>
                  <TabPane tabId="fl5" role="tabpanel">
                    <p>Floor5</p>
                  </TabPane>
                  <TabPane tabId="fl6" role="tabpanel">
                    <p>Floor6</p>
                  </TabPane>
                </TabContent>
              </Col>
              <Col lg="6" md="6">
                <p className="pull-right">Export CSV</p>
              </Col>
            </Row>
          </Card>
          <Row>
            <Col lg="8">
              <Card>
                <TrackMap stateFloor={this.state.floorState} />
              </Card>
            </Col>

            <Col lg="4">
              <Card>
                <CardHeader>
                  <h4>ข้อมูลช่วงเวลา</h4>
                </CardHeader>
                <Table responsive>
                  <thead className="thead-light">
                    <tr>
                      <th />
                      <th>Name</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="img-row">
                        <div className="img-wrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </div>
                      </td>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                    </tr>
                    <tr>
                      <td className="img-row">
                        <div className="img-wrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </div>
                      </td>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                    </tr>
                    <tr>
                      <td className="img-row">
                        <div className="img-wrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </div>
                      </td>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                    </tr>
                    <tr>
                      <td className="img-row">
                        <div className="img-wrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </div>
                      </td>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Track;
