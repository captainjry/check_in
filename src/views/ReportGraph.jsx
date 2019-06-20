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
  CardTitle,
  FormGroup,
  CardFooter,
  Table
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample10
} from "../variables/charts.jsx";

import { Line, Bar, Doughnut } from "react-chartjs-2";

class ReportGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleSelect: { value: 2, label: "January" },
      data: null,
      collapse: false,
      collapse2: false,
      optionYear: [],
      now: "",
      year_act: "",
      optionMonth: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  }
  render() {
    return (
      <Row>
        <Col lg="8">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <Row>
                    <Col lg="12" md="6">
                      <CardTitle tag="h4">ชั่วโมงการทำงานเดือนนี้</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={chartExample10.data}
                    options={chartExample10.options}
                  />
                </CardBody>
                <CardFooter />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <Row>
                    <Col lg="12" md="6">
                      <CardTitle tag="h4">ชั่วโมงการทำงานเดือนนี้</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </CardBody>
                <CardFooter />
              </Card>
            </Col>
          </Row>
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
    );
  }
}
export default ReportGraph;
