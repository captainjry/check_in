import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "./tables/reportTab.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ReportTable from "./ReportTable";
import ReportGraph from "./ReportGraph";
import axios from "axios";
import ReactDatetime from "react-datetime";
import moment from "moment";
import { getCurrentDate } from "./getdate";

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
  TabContent
} from "reactstrap";

import "./Report.css";

// Mock Data

const columnsDay = [
  {
    dataField: "name",
    text     : "ชื่อ"
  },
  {
    dataField: "timeAttend",
    text     : "เวลาเข้างาน"
  },
  {
    dataField: "timeLeave",
    text     : "เวลาออกงาน"
  },

  {
    dataField: "duration",
    text     : "ระยะเวลาทำงาน ณ ตอนนี้"
  }
];
const dataTime = [
  {
    graph      : "",
    timeAttend : "9:20",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "9:20",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "9:20",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "9:20",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "9:20",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "9:20",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "9:20",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "9:20",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  }
];
const dataTime2 = [
  {
    graph      : "",
    timeAttend : "18.30",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "18.30",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "18.30",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "18.30",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "18.30",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "18.30",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "18.30",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  },
  {
    graph      : "",
    timeAttend : "18.30",
    late       : 2,
    workOutside: 4,
    leave      : 3,
    duration   : "- 1 ชั่วโมง 15 นาที"
  }
];
const columnsWeek = [
  {
    dataField: "name",
    text     : "สรุปการทำงาน"
  },
  {
    dataField: "timeAttend",
    text     : "เข้าทำงาน"
  },
  {
    dataField: "late",
    text     : "มาสาย"
  },
  {
    dataField: "workOutside",
    text     : "ทำงานนอกสถานที่"
  },
  {
    dataField: "leave",
    text     : "ลางาน"
  },
  {
    dataField: "duration",
    text     : "ระยะเวลาทำงาน"
  }
];
const columnsMonth = [
  {
    dataField: "name",
    text     : "ชื่อ"
  },
  {
    dataField: "timeAttend",
    text     : "เข้าทำงาน"
  },
  {
    dataField: "workOutside",
    text     : "ทำงานนอกสถานที่"
  },
  {
    dataField: "leave",
    text     : "ลางาน"
  },
  {
    dataField: "duration",
    text     : "ระยะเวลาทำงาน"
  }
];
const productsMonth = [
  {
    name : "how",
    price: 123
  },
  {
    name : "to",
    price: 1234
  },
  {
    name : "do",
    price: 1234
  },
  {
    name : "this",
    price: 1234
  },
  {
    name : "shit",
    price: 1234
  },
  {
    name : "you",
    price: 1234
  },
  {
    name : "asddq",
    price: 1234
  },
  {
    name : "asdd",
    price: 1234
  }
];
const columnsYear = [
  {
    dataField: "name",
    text     : "ชื่อ"
  },
  {
    dataField: "timeAttend",
    text     : "เข้าทำงาน"
  },
  {
    dataField: "workOutside",
    text     : "ทำงานนอกสถานที่"
  },
  {
    dataField: "leave",
    text     : "ลางาน"
  },
  {
    dataField: "duration",
    text     : "ระยะเวลาทำงาน"
  }
];
const productsYear = [
  {
    name : "what",
    price: 123
  },
  {
    name : "am",
    price: 1234
  },
  {
    name : "I",
    price: 1234
  },
  {
    name : "doin",
    price: 1234
  },
  {
    name : "here",
    price: 1234
  },
  {
    name : "dafuq",
    price: 1234
  },
  {
    name : "we",
    price: 1234
  },
  {
    name : "ale",
    price: 1234
  }
];
const columns2 = [
  {
    dataField: "name",
    text     : "ชื่อ"
  },
  {
    dataField: "timeAttend",
    text     : "เข้าทำงาน"
  },
  {
    dataField: "workOutside",
    text     : "ทำงานนอกสถานที่"
  },
  {
    dataField: "leave",
    text     : "ลางาน"
  },
  {
    dataField: "duration",
    text     : "ระยะเวลาทำงาน"
  }
];
const productsWeek = [
  {
    name       : "",
    timeAttend : "10.45",
    timeLeave  : "19:45",
    workOutside: "All day",
    leave      : "-",
    duration   : "8 ชั่วโมง  -  นาที",
    data       : [
      {
        graph      : "",
        timeAttend : "9:20",
        late       : 2,
        workOutside: 4,
        leave      : 3,
        duration   : "- 1 ชั่วโมง 15 นาที"
      }
    ],
    column: [
      {
        dataField: "summary",
        text     : "สรุปการทำงาน"
      },
      {
        dataField: "week",
        text     : " "
      },
      {
        dataField: "timeAttend",
        text     : "เข้าทำงาน"
      },
      {
        dataField: "workOutside",
        text     : "ทำงานนอกสถานที่"
      },
      {
        dataField: "leave",
        text     : "ลางาน"
      },
      {
        dataField: "duration",
        text     : "ระยะเวลาทำงาน"
      }
    ]
  }
];

console.log(getCurrentDate());
var yesterday = ReactDatetime.moment();
var valid     = function(current) {
  return current.isBefore(yesterday);
};
//const date_format="2019-06-15";
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "Day",
      products      : [],
      productsDay   : [],
      columns       : columnsDay,
      showGraph     : false,
      a             : [],
      chartdata     : [],
      date_format   : getCurrentDate(),
      selectedValue : [],
    };
  }

  handleStartDate = (current) => {
    var format = "YYYY-MM-DD";
    console.log(current);
    let date_format = moment(current, format).format(format);
    console.log(date_format);
    this.setState({ date_format: date_format });
    this.worktime(date_format);
    this.chartdata(date_format);
    this.setState({ selectedValue: date_format });
  };

  componentDidMount() {
    this.worktime(this.state.date_format);
    this.chartdata(this.state.date_format);
    console.log(this.state.date_format);
  }

  worktime = date_format => {
    let startDate = { date: date_format };
    // console.log(this.state.date_format);

    axios
      .post("http://192.168.16.50:3000/api/v1/worktime", startDate)
      .then(res => {
        const response = res.data.Data;
        console.log(response);
        //console.log(response);
        let productsDay = [];
        
        if (response.totalworktime === "No One Work Today!"){
          productsDay.push({
            name    : " ",
            
          
          });
          console.log( )

        }
        else{
        response.map((item, key) => {
          if (item.totalworktime.hours === undefined) {
            item.totalworktime.hours = "0";
          }
          if (item.totalworktime.minutes === undefined) {
            item.totalworktime.minutes = "0";
          }
          let min = moment(item.mintime);
          let max = moment(item.mintime).add(9,'hours');
          productsDay.push({
            name    : item.person_firstname + " " + item.person_lastname,
            duration:   
              item.totalworktime.hours +
              " ชั่วโมง " +
              item.totalworktime.minutes +
              " นาที",
            timeAttend: min.format("LTS"),
            timeLeave : max.format("LTS"),
          });
        });

      }
        this.setState({ products: productsDay });
        this.setState({ productsDay: productsDay });

        //console.log(productsDay);
        //console.log(a);
        //this.state.a
        //const persons = res.data;
        //this.setState({ persons : res });
        //console.log({persons});
      })
      .catch(error => {
        console.log(error);
      });
  };

  chartdata = date_format => {
    let startDate = { date: date_format };
    axios
      .post("http://192.168.16.50:3000/api/v1/checkintime", startDate)
      .then(res2 => {
        const response2 = res2.data.Data;
        console.log(response2);
        let chartdata = [];
        response2.map((item, key) => {
          chartdata.push(item.count);
        });
        this.setState({ chartdata: chartdata });
        console.log(chartdata);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <>
        <div className = "content">
        <div className = "headWrap">
            <Row>
              <Col lg = "6" md = "8" sm = "10" xs = "10">
                <Row>
                  <Col lg        = "5" md = "5" sm = "5" xs = "5">
                  <h2  className = "reportHeader ">Reporting</h2>
                  </Col>
                  <Col lg = "4" md = "4" sm = "4" xs = "4">
                    <Button
                      className = ""
                      color     = "default"
                      onClick   = {() => {
                        this.setState({ showGraph: !this.state.showGraph });
                      }}
                    >
                      {this.state.showGraph === false
                        ? "แสดงรูปแบบกราฟ"
                        : "แสดงรูปแบบตาราง"}
                    </Button>
                  </Col>
                  <Col lg = "3" md = "3" sm = "3" xs = "3">
                    <UncontrolledDropdown group>
                      <DropdownToggle caret color = "default">
                        แสดงระบุเวลา
                      </DropdownToggle>
                      <DropdownMenu>
                        <div className = "datepicker">
                          <ReactDatetime
                            isValidDate = {valid}
                            inputProps  = {{
                              className  : "form-control",
                              placeholder: "Date Picker Here"
                            }}
                            onChange   = {current => this.handleStartDate(current)}
                            timeFormat = {false}
                            input      = {false}
                            value      = {this.state.selectedValue}
                            dateFormat = {"YYYY-MM-DD"}
                          />
                        </div>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
              </Col>
              <Col        lg        = "6" md = "4" sm = "8" xs = "8">
              <Form       className = "pull-right">
              <InputGroup className = "no-border">
                    <Input
                      defaultValue = ""
                      placeholder  = "Search..."
                      type         = "text"
                    />
                    <InputGroupAddon addonType = "append">
                      <InputGroupText>
                        <i className = "nc-icon nc-zoom-split" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </div>
          <Row>
            <Col md = "12">
              <Card>
                <CardHeader>
                  <Col md = "6" className = "col-md-6Table">
                    {/* <Card className="cardTable">
                      <CardBody className="card-bodytab card-bodyTable"> */}
                    <div className = "nav-tabs-navigation">
                    <div className = "nav-tabs-wrapper">
                    <Nav id        = "tabs" role = "tablist" tabs>
                          <NavItem>
                            <NavLink
                              aria-expanded={
                                this.state.horizontalTabs === "Day"
                              }
                              data-toggle = "tab"
                              //href=""
                              role      = "tab"
                              className = {
                                this.state.horizontalTabs === "Day"
                                  ? "active"
                                  :  ""
                              }
                              onClick={() =>
                                this.setState({
                                  horizontalTabs: "Day",
                                  columns       : columnsDay,
                                  products      : this.state.productsDay
                                })
                              }
                            >
                              Day
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              aria-expanded={
                                this.state.horizontalTabs === "Week"
                              }
                              data-toggle = "tab"
                              //href=""
                              role      = "tab"
                              className = {
                                this.state.horizontalTabs === "Week"
                                  ? "active"
                                  :  ""
                              }
                              onClick={() =>
                                this.setState({
                                  horizontalTabs: "Week",
                                  columns       : columnsWeek,
                                  products      : productsWeek
                                })
                              }
                            >
                              Week
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              aria-expanded={
                                this.state.horizontalTabs === "Month"
                              }
                              data-toggle = "tab"
                              href        = "#pablo"
                              role        = "tab"
                              className   = {
                                this.state.horizontalTabs === "Month"
                                  ? "active"
                                  :  ""
                              }
                              onClick={() =>
                                this.setState({
                                  horizontalTabs: "Month",
                                  columns       : columnsMonth,
                                  products      : productsMonth
                                })
                              }
                            >
                              Month
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              aria-expanded={
                                this.state.horizontalTabs === "Year"
                              }
                              data-toggle = "tab"
                              href        = "#pablo"
                              role        = "tab"
                              className   = {
                                this.state.horizontalTabs === "Year"
                                  ? "active"
                                  :  ""
                              }
                              onClick={() =>
                                this.setState({
                                  horizontalTabs: "Year",
                                  columns       : columnsYear,
                                  products      : productsYear
                                })
                              }
                            >
                              Year
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                    </div>
                    <TabContent
                      className = "text-center"
                      id        = "my-tab-content"
                      activeTab = {this.state.horizontalTabs}
                    >
                      <TabPane tabId = "Day" role = "tabpanel">
                        <p>Day</p>
                      </TabPane>
                      <TabPane tabId = "Week" role = "tabpanel">
                        <p>Week</p>
                      </TabPane>
                      <TabPane tabId = "Month" role = "tabpanel">
                        <p>Month</p>
                      </TabPane>
                      <TabPane tabId = "Year" role = "tabpanel">
                        <p>Year</p>
                      </TabPane>
                    </TabContent>
                    {/* </CardBody>
                    </Card> */}
                  </Col>
                </CardHeader>
                    
                <CardBody className = "report">
                {/* {a = this.state.horizontalTabs === "Day"?  "false" :  "tr"} */}
                  {this.state.showGraph === false  && (
                    <ReportTable
                      stateColumns        = {this.state.columns}
                      stateProducts       = {this.state.products}
                      statehorizontalTabs = {this.state.horizontalTabs}
                      
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
          {this.state.showGraph === true && (
            <ReportGraph
              date_format = {this.state.date_format}
              products    = {this.state.products}
              chartdata   = {this.state.chartdata}
            />
          )}
        </div>
      </>
    );
  }
}
export default Report;
