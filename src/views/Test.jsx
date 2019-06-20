import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import intialData from "./intial-data";
import Column from "./column";

class Dashboard extends React.Component {
  state = intialData;
  // onDragEnd = (result = {});
  render() {
    return this.state.columOrder.map(columId => {
            const column = this.state.colums[columId];
            const tasks = column.taskId.map(taskId => this.state.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} />;                 
    });
  }
}

export default Dashboard;
