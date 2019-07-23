import React from "react";
// import Dragula from "react-dragula";
// import "../../node_modules/dragula/dist/dragula.css";
// import "../../node_modules/dragula/dist/dragula.min.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

const personsData = {
  persons: {
    "person-1": { id: "person-1", content: "omegaLUL" },
    "person-2": { id: "person-2", content: "omegalol" },
    "person-3": { id: "person-3", content: "omegaLawl" },
    "person-4": { id: "person-4", content: "omegaLel" },
    "person-5": { id: "person-5", content: "omegaez" },
    "person-6": { id: "person-6", content: "omegaclap" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      personsID: [
        "person-1",
        "person-2",
        "person-3",
        "person-4",
        "person-5",
        "person-6"
      ]
    }
  },
  columnOrder: ["column-1"]
};

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

class Setting extends React.Component {
  //   componentDidMount() {
  //     let left = document.getElementById("left");
  //     let left2 = document.getElementById("left2");
  //     let left3 = document.getElementById("left3");
  //     let left4 = document.getElementById("left4");
  //     let left5 = document.getElementById("left5");
  //     let left6 = document.getElementById("left6");
  //     let right = document.getElementById("right");
  //     let right2 = document.getElementById("right2");
  //     Dragula([left, left2, left3, left4, left5, left6, right, right2]);
  //   }
  state = {
    items: getItems(10),
    selected: getItems(5, 10)
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: "items",
    droppable2: "selected"
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2
      });
    }
  };
  render() {
    return (
      <div className="content">
        <div className="headWrap">
          <Row>
            <Col lg="7">
              <h2 className="tagHeader">Tag</h2>
            </Col>
            <Col lg="3">
              <h2 className="personHeader">Persons</h2>
            </Col>
            <Col lg="2">
              <Button color="default">Add person</Button>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <Form>
                <InputGroup className="no-border">
                  <Input defaultValue="" placeholder="Search..." type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="nc-icon nc-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
            <Col lg="5">
              <Form>
                <InputGroup className="no-border">
                  <Input defaultValue="" placeholder="Search..." type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="nc-icon nc-zoom-split" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col lg="7">
              <Card>
                <Row>
                  <Col lg="6">
                    <Card>
                      <CardHeader>tag1</CardHeader>
                      <hr />
                      <div id="left">
                        <CardBody>
                          <p>user1</p>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                      </div>
                    </Card>
                    <Card>
                      <CardHeader>tag2</CardHeader>
                      <hr />
                      <div id="left2">
                        <CardBody>
                          <p>user2</p>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                      </div>
                    </Card>
                    <Card>
                      <CardHeader>tag3</CardHeader>
                      <hr />
                      <div id="left3">
                        <CardBody>
                          <p>user3</p>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col lg="6">
                    <Card>
                      <CardHeader>tag4</CardHeader>
                      <hr />
                      <div id="left4">
                        <CardBody>
                          <p>user4</p>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                      </div>
                    </Card>
                    <Card>
                      <CardHeader>tag5</CardHeader>
                      <hr />
                      <div id="left5">
                        <CardBody>
                          <p>user5</p>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                      </div>
                    </Card>
                    <Card>
                      <CardHeader>tag6</CardHeader>
                      <hr />
                      <div id="left6">
                        <CardBody>
                          <p>user6</p>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="5">
              <Card>
                <Row>
                  <Col>
                    <Card>
                      <div id="right">
                        <CardBody>
                          <p>user7</p>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                      </div>
                    </Card>
                    <Card>
                      <div id="right2">
                        <CardBody>
                          <p>user8</p>
                          <p>Lorem ipsum dolor sit amet.</p>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="droppable2">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.selected.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          </Row>
        </div>
      </div>
    );
  }
}
export default Setting;