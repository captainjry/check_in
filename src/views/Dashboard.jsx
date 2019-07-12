import Select from "react-select";
import React from "react";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import avatar from "../assets/img/faces/ayo-ogunseinde-2.jpg";
import { Component } from "react";
import TagsInput from "react-tagsinput";
import ReactDatetime from "react-datetime";
import moment from "moment";
import { getCurrentDate } from "./getdate";
import axios from "axios";

// reactstrap components
import {
  Collapse,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
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

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};
const yearOffset = 60;
var yesterday = ReactDatetime.moment();
var valid = function(current) {
  return current.isBefore(yesterday);
};
class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleSelect: { value: 2, label: "January" },
      data: null,
      late: 0,
      collapse: false,
      collapse2: false,
      datatable: [],
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

  componentWillMount() {
    let now = new Date();
    let year = now.getFullYear();

    this.setState({
      year_province: year,
      year_month: year,
      year_month_users: year,
      selectedValue: [],
      date_format: getCurrentDate() 
    });
  }
  handleStartDate = current => {
    var format = "YYYY-MM-DD";
    console.log(current);
    let date_format = moment(current, format).format(format);
    this.setState({ date_format: date_format });
    this.worktime(date_format);
    this.setState({ selectedValue: date_format });
  };
  componentDidMount() {
    this.OptionYear();
    this.worktime(this.state.date_format);
    this.late(this.state.date_format);
  }

  OptionYear = () => {
    let now = new Date();

    let thisYear = now.getFullYear();
    // // console.log("this.year: " + thisYear)

    let minYear = thisYear - yearOffset;
    let maxYear = thisYear + yearOffset;

    let optionYear = [];
    for (var i = maxYear; i > minYear; i--) {
      optionYear.push(i);
    }

    this.setState({ optionYear: optionYear, year_crop: thisYear });
  };
  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  toggle2 = () => {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  };

  worktime = date_format => {
    let startDate = { date: date_format };
    axios
      .post("http://192.168.16.50:3000/api/v1/worktime", startDate)
      .then(res => {
        const response = res.data.Data;
        let datatale = [];

        if (response.totalworktime === "No One Work Today!") {
          datatale.push({
            name: " "
          });
        } else {
          response.map((item, key) => {
            if (item.totalworktime.hours === undefined) {
              item.totalworktime.hours = "0";
            }
            if (item.totalworktime.minutes === undefined) {
              item.totalworktime.minutes = "0";
            }
            let now = moment(item.maxtime);
            let min = moment(item.mintime);
            let max = moment(item.mintime).add(9, "hours");
            datatale.push({
              name: item.person_firstname + " " + item.person_lastname,
              duration:
                item.totalworktime.hours +
                " ชั่วโมง " +
                item.totalworktime.minutes +
                " นาที",
              timenow: now.format("LTS"),
              timeAttend: min.format("LTS"),
              timeLeave: max.format("LTS")
            });
          });
        }
        this.setState({ datatable: datatale });
      })
      .catch(error => {
        console.log(error);
      });
  };

  late = date_format => {
    let startDate = { date: date_format };
    axios
      .post("http://192.168.16.50:3000/api/v1/attenp", startDate)
      .then(res => {
        let countlate = res.Data.late
        this.setState({ late: 1 });
      })
      .catch(error => {
        console.log(error);
      });
  };  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-badge text-warning1" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category1">19คน</p>
                        <CardTitle tag="pp">ทั้งหมด</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-briefcase-24 text-warning2" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category2">14คน</p>
                        <CardTitle tag="pp">มาทำงาน</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-time-alarm text-warning3" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category3">{this.state.late} คน</p>
                        <CardTitle tag="pp">มาสาย</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-bus-front-12 text-warning4" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category4">2คน</p>
                        <CardTitle tag="pp">ยังไม่มาทำงาน</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="9" sm="6">
              <Card>
                <CardHeader>
                  <Row>
                    <Col lg="5">
                      <div className="numbersD">แสดงเวลาเข้างาน</div>
                    </Col>
                    <Col lg="3">
                      <div style={{ display: "inline-block" }}>
                        <Input
                          className="search"
                          defaultValue=""
                          placeholder="Search..."
                          type="text"
                        />
                      </div>
                    </Col>
                    <Col lg="1">
                      <div
                        className="DCbutton"
                        style={{ display: "inline-block" }}
                      >
                        <Button className="btn-round btn-icon" color="primary">
                          <i className="nc-icon nc-calendar-60" />
                        </Button>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="datepicker">
                        <ReactDatetime
                          isValidDate={valid}
                          inputProps={{
                            className: "form-control",
                            placeholder: "Date Picker Here"
                          }}
                          timeFormat={false}
                          onChange={current => this.handleStartDate(current)}
                          timeFormat={false}
                          input={true}
                          value={this.state.selectedValue}
                          dateFormat={"YYYY-MM-DD"}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="Dtabletitle">
                      <tr>
                        <th> </th>
                        <th>ชื่อ</th>
                        <th>เวลาเข้างาน</th>
                        <th>เวลาออกงาน</th>
                        <th>เวลาปัจจุบันที่เจอ</th>
                        <th>ระยะเวลาทำงาน ณ ตอนนี้</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.datatable.map((item, key) => {
                        return (
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
                            <td>{item.name}</td>
                            <td>{item.timeAttend}</td>
                            <td>{item.timeLeave}</td>
                            <td>{item.timenow}</td>
                            <td>{item.duration}</td>
                          </tr>
                        );
                      })}

                      {/* <td>Dakota Rice</td>
                        <td>10:00</td>
                        <td>19:00</td>
                        <td>15:20</td>
                        <td>5 ชั่วโมง 32 นาที</td> */}
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <Col lg="12">
                      <div className="showmore">show more</div>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>

            <Col lg="3" sm="6">
              <Card className="Rcardd">
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left">หมายเหตุ</div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody className="RcarddB">
                  <div>
                    <Button
                      className="button"
                      onClick={this.toggle}
                      style={{ marginBottom: "1rem" }}
                    >
                      ไปทำงานนอกสถานที่
                    </Button>
                    <Collapse isOpen={this.state.collapse}>
                      <Row>
                        <Col md="4" xs="5">
                          <img
                            alt="..."
                            className="img-raisedc"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </Col>
                        <Col md="8" xs="5">
                          <div className="ss">
                            <p className="card-categoryR">Dakota Rice</p>
                            <CardTitle tag="ppR">10:00-12:00</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4" xs="5">
                          <img
                            alt="..."
                            className="img-raisedc"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </Col>
                        <Col md="8" xs="5">
                          <div className="ss">
                            <p className="card-categoryR">Dakota Rice</p>
                            <CardTitle tag="ppR">10:00-12:00</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4" xs="5">
                          <img
                            alt="..."
                            className="img-raisedc"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </Col>
                        <Col md="8" xs="5">
                          <div className="ss">
                            <p className="card-categoryR">Dakota Rice</p>
                            <CardTitle tag="ppR">10:00-12:00</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </Collapse>
                  </div>

                  <div>
                    <Button
                      className="button2"
                      onClick={this.toggle2}
                      style={{ marginBottom: "1rem" }}
                    >
                      ลาป่วย
                    </Button>
                    <Collapse isOpen={this.state.collapse2}>
                      <Row>
                        <Col md="4" xs="5">
                          <img
                            alt="..."
                            className="img-raisedc"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </Col>
                        <Col md="8" xs="5">
                          <div className="ss">
                            <p className="card-categoryR">Dakota Rice</p>
                            <CardTitle tag="ppR">10:00-12:00</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4" xs="5">
                          <img
                            alt="..."
                            className="img-raisedc"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </Col>
                        <Col md="8" xs="5">
                          <div className="ss">
                            <p className="card-categoryR">Dakota Rice</p>
                            <CardTitle tag="ppR">10:00-12:00</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4" xs="5">
                          <img
                            alt="..."
                            className="img-raisedc"
                            src={require("../assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </Col>
                        <Col md="8" xs="5">
                          <div className="ss">
                            <p className="card-categoryR">Dakota Rice</p>
                            <CardTitle tag="ppR">10:00-12:00</CardTitle>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </Collapse>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle>สรุปการทำงานเดือนนี้</CardTitle>
                  <p className="card-category">ทั้งหมด 19 คน</p>
                  <hr />
                </CardHeader>
                <CardBody className="Dchart">
                  <Row>
                    <Col lg="7">
                      <Doughnut
                        data={chartExample5.data}
                        options={chartExample5.options}
                        className="ct-chart ct-perfect-fourth"
                        height={300}
                        width={456}
                      />
                    </Col>
                    <Col lg="5">
                      <div className="legend">
                        <i className="fa fa-circle text-info1" />
                        มาสาย 15 ครั้ง
                      </div>
                      <div className="legend">
                        <i className="fa fa-circle text-info2" />
                        ไม่เข้างาน 15 ครั้ง
                      </div>
                      <div className="legend">
                        <i className="fa fa-circle text-info3" />
                        ลางาน 15 ครั้ง
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="showmore" x>
                    ข้อมูลเพิ่มเติม
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col md="8">
              <Card>
                <CardHeader>
                  <Row>
                    <Col lg="7" md="6">
                      <CardTitle tag="h4">ชั่วโมงการทำงานเดือนนี้</CardTitle>
                    </Col>
                    <Col lg="3" md="6" sm="3">
                      <FormGroup style={{ width: "150px" }}>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelectYearUsersMonth"
                          className="PromptFont"
                          placeholder="mothly"
                          //value={this.state.year_month_users}
                          //onChange={this.handleMonthUsers_year}
                        >
                          {this.state.optionMonth.map((item, key) => {
                            return <option value={item}>{item}</option>;
                          })}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg="2" md="6" sm="3">
                      <FormGroup style={{ width: "100px" }}>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelectYearUsersMonth"
                          className="PromptFont"
                          placeholder="yearly"
                          //value={this.state.year_month_users}
                          //onChange={this.handleMonthUsers_year}
                        >
                          {this.state.optionYear.map((item, key) => {
                            return <option value={item}>{item}</option>;
                          })}
                        </Input>
                      </FormGroup>
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
        </div>
      </>
    );
  }
}

export default Dashboard;
