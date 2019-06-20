import React from "react";
import { Container } from "react-smooth-dnd";
import { Draggable } from "react-beautiful-dnd";

export default class Task extends React.Component {
    
  render() {
    return (
        // <Draggable draggableId={this.props.task.id} index={this.props.index} >
        //     {provided => (
      <Container
                // {...provided.draggableProps}
                // {...provided.dragHandleProps}
                // innerRef={provided.innerRef}
      >
        <div className="dragcard">{this.props.task.content}</div>
      </Container>
      //       )}
      // </Draggable>
     );
    
  }
}
