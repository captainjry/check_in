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

import floor1 from "../assets/img/SIIT floor plan 2/f1.svg";
import floor2 from "../assets/img/SIIT floor plan 2/f1.svg";
import floor3 from "../assets/img/SIIT floor plan 2/f1.svg";
import floor4 from "../assets/img/SIIT floor plan 2/f1.svg";
import floor5 from "../assets/img/SIIT floor plan 2/f1.svg";
import TrackMap from "./TrackMap";
//import floor1 from "../assets/img/SIIT floor plan 2/building1/B1_L1.jpg"
// import floor2 from "../assets/img/SIIT floor plan 2/building1/B1_L2.jpg";
// import floor3 from "../assets/img/SIIT floor plan 2/building1/B1_L3.jpg";
// import floor4 from "../assets/img/SIIT floor plan 2/building1/B1_L4.jpg";
// import floor5 from "../assets/img/SIIT floor plan 2/building1/B1_L5.jpg";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "fl1",
      imageState: floor1
    };
  }

  render() {
    return (
      <>
        <div className="content">
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
                              imageState: floor1
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
                              imageState: floor2
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
                              imageState: floor3
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
                              imageState: floor4
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
                              imageState: floor5
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
                            this.setState({ horizontalTabs: "fl6" })
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
          </Card>
          <Row>
            <Col lg="8">
              <Card>
                {/* <img src={this.state.imageState} /> */}
                <TrackMap />
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
