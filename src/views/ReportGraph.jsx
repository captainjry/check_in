import React from "react";
import {
  Button,
  ButtonGroup,
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
import axios from "axios";
import { getCurrentDate } from "./getdate";

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
//date_format = {this.props.date_format}
import { Line, Bar, Doughnut } from "react-chartjs-2";
class ReportGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleSelect: { value: 2, label: "January" },
      data: null,
      //date_format: this.props.date_format,
      namelist: [],
      collapse: false,
      collapse2: false,
      optionYear: [],
      now: "",
      year_act: "",
      //chartdata:[],
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

  handleCilck() {
    // this.setState({
    //   chartdata:[0,0,0,0] 
    // });
    //this.props.chartdata=[0,0,0,0,0]
    //alert("damn")
  }
  render() {
        
    const chartReportDay1 = {
      data: {
        labels: [
          "6:00-6:59",
          "7:00-7:59",
          "8:00-8:59",
          "9:00-9:59",
          "10:00-10:59",
          "11:00-11:59",
          "12:00-12:59",
          "13:00-13:59",
          "14:00-14:59",
          "15:00-15:59",
          "16:00-16:59",
          "17:00-17:59",
          "19:00-18:59",
          "20:00-20:59",
          "21:00-21:59"
        ],
        datasets: [
          {
            label: "Data",
            borderColor: "#A3A1FB",
            fill: true,
            backgroundColor: "#A3A1FB",
            hoverBorderColor: "#A3A1FB",
            borderWidth: 5,
            data: this.props.chartdata
          }
        ]
      },
      options: {
        tooltips: {
          tooltipFillColor: "rgba(0,0,0,0.5)",
          tooltipFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          tooltipFontSize: 14,
          tooltipFontStyle: "normal",
          tooltipFontColor: "#fff",
          tooltipTitleFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          tooltipTitleFontSize: 14,
          tooltipTitleFontStyle: "bold",
          tooltipTitleFontColor: "#fff",
          tooltipYPadding: 6,
          tooltipXPadding: 6,
          tooltipCaretSize: 8,
          tooltipCornerRadius: 6,
          tooltipXOffset: 10
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#9f9f9f",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20
              },
              gridLines: {
                zeroLineColor: "transparent",
                display: true,
                drawBorder: false,
                color: "#9f9f9f"
              }
            }
          ],
          xAxes: [
            {
              barPercentage: 0.4,
              gridLines: {
                zeroLineColor: "white",
                display: false,
                drawBorder: false,
                color: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f",
                fontStyle: "bold"
              }
            }
          ]
        }
      }
    };
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
                    data={chartReportDay1.data}
                    options={chartReportDay1.options}
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
              <Row>
                <Col lg="5">
                  <h5>ข้อมูลช่วงเวลา</h5>
                </Col>
                <Col lg="7">
                  <ButtonGroup>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      ทั้งหมด
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      outline
                      type="button"
                    >
                      รายบุคคล
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardHeader>

            <Table responsive>
              <thead className="thead-light">
                <tr>
                  <th />
                  <th>ชื่อ</th>
                  <th>เวลาเข้างาน</th>
                </tr>
              </thead>
              <tbody>
                {this.props.products.map((item, key) => {
                  return (
                    <tr id="1" onClick={this.handleCilck}>
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
                      <td>{item.duration}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default ReportGraph;
