import React from "react";
import { Container } from "react-smooth-dnd";
import Task from "./task";
import { Droppable } from "react-beautiful-dnd";

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        {/* <Droppable 
        droppableId={this.props.columns.id}>
          {provided => ( */}
            <div 
            // innerRef={provided.innerRef} 
            // {...provided.droppableProps}
            > 
              {this.props.tasks.map(task => (
                <Task key={task.id} task={task}  />
               ))}
               {/* {provided.placeholder} */}
            </div> 
          )}
         {/* </Droppable> */}
      </Container>
    );
  }
}
