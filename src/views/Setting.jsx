import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./intial-data";
import Column from "./column";
import { Card, CardHeader, CardBody, Input, Row, Col } from "reactstrap";
import { Container } from "react-smooth-dnd";

class Setting extends React.Component {
  state = initialData;
  onDragEnd = result => {
    // later
  };
  render() {
    return (
      <>
         <div className="content">
         {/* <Row>
            <Col lg="8">
              Tage
              <Row>
                <Col>
                  <Input
                    className="search2"
                    defaultValue=""
                    placeholder="Search..."
                    type="text"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card>
                    <CardBody className="Bigcard">
                      <Row>
                        <Col lg="6">
                          <Card className="Midcard">
                            <CardHeader>tage_conn_001</CardHeader>
                            <CardBody />
                          </Card>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              Persons
              <Row>
                <Col>
                  <Input
                    className="search3"
                    defaultValue=""
                    placeholder="Search..."
                    type="text"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="Bigcard">
                    <CardBody> */}
                      <DragDropContext onDragEnd={this.onDragEnd}> 
                      {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map(
                          taskId => this.state.tasks[taskId]
                        );
                        return (
                          <Column
                            key={column.id}
                            columns={column}
                            tasks={tasks}
                          />
                        );
                      })}
                       </DragDropContext> 
                    {/* </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>*/}
        </div>
      </> 
    );
  }
}

export default Setting;
