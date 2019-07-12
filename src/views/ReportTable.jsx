import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const expandRowC = {
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
    //const isWorkday = this.state.isworkday;
    //console.log(isWorkday)


  }
  componentDidUpdate() {
    console.log(this.props.statehorizontalTabs);
  }

  render() {
    const isDay = () => {
      if (this.props.statehorizontalTabs === "Day") {
        return "";
      }
      return expandRowC;
    };

    return (
      <>
        {this.props.statehorizontalTabs !== "Day" ? (
          <BootstrapTable
            keyField="name"
            data={this.props.stateProducts}
            columns={this.props.stateColumns}
            //horizontalTabs={this.props.statehorizontalTabs}
            //isDay={this.props.statehorizontalTabs === "Day"? "":expandRow}
            expandRow={expandRowC}
            bootstrap4
            hover
          />
        ) : (
          <>
    <div>

    </div>

          <BootstrapTable
            keyField="name"
            data={this.props.stateProducts}
            columns={this.props.stateColumns}
            //horizontalTabs={this.props.statehorizontalTabs}
            //isDay={this.props.statehorizontalTabs === "Day"? "":expandRow}  
            expandRow={""}
            bootstrap4
            hover
          />
          </>
        )}
      </>
    );
    //console.log(expandRowC);
  }
}
export default ReportTable;
