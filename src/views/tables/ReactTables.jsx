import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import "./reportTab.css";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Col
} from "reactstrap";

const dataTable = [
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
  ["Gloria Little", "Systems Administrator", "New York", "59"],
  ["Bradley Greer", "Software Engineer", "London", "41"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
  ["Jenette Caldwell", "Development Lead", "New York", "30"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
  ["Gavin Joyce", "Developer", "Edinburgh", "42"],
  ["Jennifer Chang", "Regional Director", "Singapore", "28"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
  ["Michelle House", "Integration Specialist", "Sidney", "37"],
  ["Suki Burks", "Developer", "London", "53"],
  ["Prescott Bartlett", "Technical Author", "London", "27"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
  ["Hope Fuentes", "Secretary", "San Francisco", "41"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Timothy Mooney", "Office Manager", "London", "37"],
  ["Jackson Bradshaw", "Director", "New York", "65"],
  ["Olivia Liang", "Support Engineer", "Singapore", "64"]
];

class ReactTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          position: prop[1],
          office: prop[2],
          age: prop[3]
        };
      })
    };
  }
  render() {
    return (
      <>
        <div className="content">
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
                  <ReactTable
                    data={this.state.data}
                    filterable
                    columns={[
                      {
                        Header: "ชื่อ",
                        accessor: "name"
                      },
                      {
                        Header: "เวลาเข้างาน",
                        accessor: "position"
                      },
                      {
                        Header: "เวลาออกงาน",
                        accessor: "office"
                      },
                      {
                        Header: "ทำงานนอกสถานที่",
                        accessor: "age"
                      },
                      {
                        Header: "ลางาน",
                        accessor: "age"
                      },
                      {
                        Header: "ระยะเวลาทำงาน ณ  ตอนนี้",
                        accessor: "actions"
                      }
                    ]}
                    defaultPageSize={10}
                    showPaginationTop={false}
                    showPaginationBottom
                    /*
                      You can choose between primary-pagination, info-pagination, success-pagination, warning-pagination, danger-pagination or none - which will make the pagination buttons gray
                    */
                    className="-striped -highlight primary-pagination"
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

export default ReactTables;
