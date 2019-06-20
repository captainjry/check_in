import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const expandRow = {
  onlyOneExpanding: true,
  renderer: row => (
    <BootstrapTable
      keyField="graph"
      data={row.data}
      columns={row.column}
      hover
    />
  )
};

class ReportTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BootstrapTable
        keyField="name"
        data={this.props.stateProducts}
        columns={this.props.stateColumns}
        expandRow={expandRow}
        bootstrap4
        hover
      />
    );
  }
}
export default ReportTable;
