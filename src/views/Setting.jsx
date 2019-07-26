import React from "react";
// import Dragula from "react-dragula";
// import "../../node_modules/dragula/dist/dragula.css";
// import "../../node_modules/dragula/dist/dragula.min.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios"

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
import { throws } from "assert";

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
  constructor() {
    super();
    this.state = {
      items: getItems(10),
      selected: getItems(5, 10),
      isDraggedOver: false,
      taggedItem: [{ tag: 1, person: [] }, { tag: 2, person: [] }, { tag: 3, person: [] }, { tag: 4, person: [] }, { tag: 5, person: [] }, { tag: 6, person: [] },],
      people: []
    };
  }

  getPersons() {
    axios.post(`http://192.168.16.50:3000/api/v1/peopleinfo`)
      .then(response => {
        if (response.status == 200) {
          this.setState({
            people: response.data.Data
          })
        }
      })
  }

  componentDidMount() {
    this.getPersons();
  }


  cardOnDrag = (index, target) => {
    this.state.counter = 0
    if (target == "person") {
      this.setState({ peopleIndex: index })

    } else {
      this.setState({ tagIndex: index })
    }
  }
  cardOnDrop = (dropon, index) => {
    let state = this.state
    if (dropon == "tag") {
      state.taggedItem[index].person = [state.people[state.peopleIndex]]
      state.people = state.people.filter((item, index) => {
        return index != state.peopleIndex
      })
      this.setState({
        people: state.people,
        taggedItem: state.taggedItem,
        overIndex: null
      })
    } else {
      // console.log(state.tagIndex)
      state.people.push(state.taggedItem[state.tagIndex].person.pop())
      this.setState({
        taggedItem: state.taggedItem,
        overIndex: null
      })

    }
  }

  cardOnDragOver = e => {
    e.preventDefault();
  }
  cardOnDragEnter = index => {
    this.state.counter++
    this.setState({ isDraggedOver: true, overIndex: index })
  }

  cardOnDragLeave = index => {
    this.state.counter--
    if (this.state.counter == 0) {
      this.setState({ isDraggedOver: false, overIndex: index })
    }
  }
  render() {
    let dragOverStyle = {
      background: "lawngreen",
      filter: "drop-shadow(0 0 10px lawngreen)",
      transform: "scale(1.1)",
      letterSpacing: "2px",
      transition: "0.5s"
    }

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

            {/* TAG */}
            <Col lg="7">
              <Card>
                <CardBody>
                  <Row>
                    {
                      this.state.taggedItem.map((item, index) => {
                        console.log(item);
                        return (
                          <Col lg="6">
                            <Card
                              style={
                                item.person.length < 1 &&
                                  this.state.tagIndex == null &&
                                  this.state.isDraggedOver &&
                                  this.state.overIndex == index ?
                                  dragOverStyle : {}}
                              draggable={this.state.taggedItem[index].person.length != 0 ? true : false}
                              onDragStart={() => this.cardOnDrag(index, "tag")}
                              onDragEnd={() => this.setState({ overIndex: null, tagIndex: null })}
                              onDrop={() => {
                                if (item.person.length < 1 && this.state.tagIndex == null) {
                                  this.cardOnDrop("tag", index)
                                }
                              }}
                              onDragOver={this.cardOnDragOver}
                              onDragEnter={() => this.cardOnDragEnter(index)}
                              onDragLeave={() => this.cardOnDragLeave(index)}
                            >
                              <CardBody>
                                <p><b>Tag {item.tag}</b></p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                {
                                  item.person.length != 0 ?
                                    <div>
                                      <p>
                                        <b>User:</b> {item.person[0].person_firstname} {item.person[0].person_lastname}
                                      </p>
                                      <p>
                                        <b>User:</b> {item.person[0].person_tel}
                                      </p>
                                      <p>
                                        <b>User:</b> {item.person[0].person_email}
                                      </p>
                                    </div>
                                    : null
                                }
                              </CardBody>
                            </Card>
                          </Col>
                        );
                      })
                    }
                  </Row>
                </CardBody>
              </Card>
            </Col>


            {/* PERSONS */}
            <Col lg="5" >
              <Card


              >
                <CardBody>
                  <Row
                    style={{
                      maxHeight: "300px",
                      overflow: "scroll"
                    }}>
                    {
                      this.state.people.map((item, index) => {
                        return (
                          <Col lg="6">
                            <Card
                              draggable={true}
                              onDragStart={() => this.cardOnDrag(index, "person")}
                              onDragEnd={() => { this.setState({ peopleIndex: null }) }}
                            >
                              <CardBody>
                                <p><b>{`${item.person_firstname}  ${item.person_lastname}`}</b></p>
                                <p><b>Tel:</b> {item.person_tel}</p>
                                <p><b>Email: </b>{item.person_email}</p>
                              </CardBody>
                            </Card>
                          </Col>
                        )
                      })
                    }
                  </Row>
                  <Row>
                    <Col lg="12">
                      <Card
                        style={this.state.isDraggedOver && this.state.overIndex == -1 ? dragOverStyle : {}}
                        onDrop={() => this.cardOnDrop("person", -1)}
                        onDragOver={this.cardOnDragOver}
                        onDragEnter={() => this.cardOnDragEnter(-1)}
                        onDragLeave={() => this.cardOnDragLeave(-1)}
                      >
                        <CardHeader></CardHeader>
                        <CardBody>
                          <p><b>+ DROP CARD HERE</b></p>
                        </CardBody>
                      </Card>
                    </Col>

                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </div >
    );
  }
}
export default Setting;