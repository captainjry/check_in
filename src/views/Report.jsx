import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "./tables/reportTab.css";

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

const products = [
  {
    name: "asd",
    price: 123
  },
  {
    name: "asdd",
    price: 1234
  },
  {
    name: "as",
    price: 1234
  },
  {
    name: "a",
    price: 1234
  },
  {
    name: "add",
    price: 1234
  },
  {
    name: "asdds",
    price: 1234
  },
  {
    name: "asddq",
    price: 1234
  },
  {
    name: "asdd",
    price: 1234
  }
];
const columns1 = [
  {
    dataField: "name",
    text: "ชื่อ"
  },
  {
    dataField: "timeAttend",
    text: "เข้าทำงาน"
  },
  {
    dataField: "workOutside",
    text: "ทำงานนอกสถานที่"
  },
  {
    dataField: "leave",
    text: "ลางาน"
  },
  {
    dataField: "duration",
    text: "ระยะเวลาทำงาน"
  }
];
const dataTime = [
  {
    graph:"",
    timeAttend: "9:20",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที" },
  {
    graph:"",
    timeAttend: "9:20",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"  },
  {
    graph:"",
    timeAttend: "9:20",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"},
  {
    graph:"",
    timeAttend: "9:20",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"},
  {
    graph:"",
    timeAttend: "9:20",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที" },
  {
    graph:"",
    timeAttend: "9:20",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"
  },
  {
    graph:"",
    timeAttend: "9:20",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"
  },
  {
    graph:"",
    timeAttend: "9:20",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"
  }
];
const dataTime2 = [
  {
    graph:"",
    timeAttend: "18.30",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที" },
  {
    graph:"",
    timeAttend: "18.30",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"  },
  {
    graph:"",
    timeAttend: "18.30",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"},
  {
    graph:"",
    timeAttend: "18.30",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"},
  {
    graph:"",
    timeAttend: "18.30",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที" },
  {
    graph:"",
    timeAttend: "18.30",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"
  },
  {
    graph:"",
    timeAttend: "18.30",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"
  },
  {
    graph:"",
    timeAttend: "18.30",
    late:2,
    workOutside:4,
    leave:3,
    duration:"- 1 ชั่วโมง 15 นาที"
  }
];
const columns2 = [
  {
    dataField: "graph",
    text: "สรุปการทำงาน"
  },
  {
    dataField: "timeAttend",
    text: "เข้าทำงาน"
  },
  {
    dataField: "late",
    text: "มาสาย"
  },
  {
    dataField: "workOutside",
    text: "ทำงานนอกสถานที่"
  },
  {
    dataField: "leave",
    text: "ลางาน"
  },
  {
    dataField: "duration",
    text: "ระยะเวลาทำงาน"
  }
];

const expandRow = {
  onlyOneExpanding: true,
  renderer: row => (
    <BootstrapTable
      keyField="graph"
      data={dataTime}
      columns={columns2}
      hover
    />
  )
};

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "Day"
    };
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="headWrap">
            <Row>
              <Col lg="6" md="6" sm="6">
                <Row>
                  <Col /*style={{maxWidth:27+'%'}}*/ lg="5" md="3" sm="6">
                    <h2 className="reportHeader ">Reporting</h2>
                  </Col>
                  <Col /*style={{maxWidth:20+'%'}}*/ lg="4" md="3" sm="3">
                    <Button className="" color="default">
                      แสดงรูปแบบกราฟ
                    </Button>
                  </Col>
                  <Col /*style={{maxWidth:20+'%'}}*/ lg="3" md="3" sm="3">
                    <UncontrolledDropdown group>
                      <DropdownToggle caret color="default">
                        แสดงระบุเวลา
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
              </Col>
              <Col lg="6" md="6" sm="6">
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
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <Col md="6" className="col-md-6Table">
                    <Card className="cardTable">
                      <CardBody className="card-bodytab card-bodyTable">
                        <div className="nav-tabs-navigation">
                          <div className="nav-tabs-wrapper">
                            <Nav id="tabs" role="tablist" tabs>
                              <NavItem>
                                <NavLink
                                  aria-expanded={
                                    this.state.horizontalTabs === "Day"
                                  }
                                  data-toggle="tab"
                                  href="#pablo"
                                  role="tab"
                                  className={
                                    this.state.horizontalTabs === "Day"
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    this.setState({ horizontalTabs: "Day" })
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
                                  data-toggle="tab"
                                  href="#pablo"
                                  role="tab"
                                  className={
                                    this.state.horizontalTabs === "Week"
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    this.setState({ horizontalTabs: "Week" })
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
                                  data-toggle="tab"
                                  href="#pablo"
                                  role="tab"
                                  className={
                                    this.state.horizontalTabs === "Month"
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    this.setState({ horizontalTabs: "Month" })
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
                                  data-toggle="tab"
                                  href="#pablo"
                                  role="tab"
                                  className={
                                    this.state.horizontalTabs === "Year"
                                      ? "active"
                                      : ""
                                  }
                                  onClick={() =>
                                    this.setState({ horizontalTabs: "Year" })
                                  }
                                >
                                  Year
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
                          <TabPane tabId="home" role="tabpanel">
                            <p>
                              Larger, yet dramatically thinner. More powerful,
                              but remarkably power efficient. With a smooth
                              metal surface that seamlessly meets the new Retina
                              HD display.
                            </p>
                          </TabPane>
                          <TabPane tabId="profile" role="tabpanel">
                            <p>Here is your profile.</p>
                          </TabPane>
                          <TabPane tabId="messages" role="tabpanel">
                            <p>Here are your messages.</p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                </CardHeader>
                <CardBody className="report">
                  <BootstrapTable
                    keyField="name"
                    data={products}
                    columns={columns1}
                    expandRow={expandRow}
                    hover
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Report;
