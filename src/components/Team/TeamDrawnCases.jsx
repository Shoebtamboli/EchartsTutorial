import React, { Component } from "react";
import BarCard from "../Bar/BarCard";
import { range, defaultRange } from "../../contants";

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 120
    }
  }
};

class TeamDrawnCases extends Component {
  constructor() {
    super();
    this.state = {
      selectedRange: defaultRange
    };
  }
  handleChangeRange(event) {
    this.setState({ selectedRange: event.target.value });
  }
  render() {
    const { selectedRange } = this.state;
    return (
      <div>
        <BarCard
          header="Drawn cases by creditor2"
          scope={range}
          selectedScope={selectedRange}
          handleChangeScope={event => this.handleChangeRange(event)}
          selectorProps={MenuProps}
          data={GetDrawnCasesByCreditorMockDataBar()}
          paperStyle="paper-wrapper"
        />
      </div>
    );
  }
}

function GetDrawnCasesByCreditorMockDataBar() {
  return {
    label: "233",
    labels: ["Telia", "Fjellinjen", "Komplett", "Komplett mobil"],
    datasets: [
      {
        label: "Cases drawn",
        backgroundColor: "#275cac",
        borderColor: "#275cac",
        borderWidth: 1,
        hoverBackgroundColor: "#275cac",
        hoverBorderColor: "#FFF",
        data: [65, 59, 80, 81]
      }
    ]
  };
}

export default TeamDrawnCases;
