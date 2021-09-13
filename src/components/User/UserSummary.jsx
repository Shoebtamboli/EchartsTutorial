import React, { Component } from "react";
import DoughnutCard from "../Doughnut/DoughnutCard";
import { range, defaultRange } from "../../contants";
import { randomIntGenerator } from "../../utils";

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

class UserSummary extends Component {
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
        <DoughnutCard
          header="My Summary"
          scope={range}
          selectedScope={selectedRange}
          handleChangeScope={event => this.handleChangeRange(event)}
          selectorProps={MenuProps}
          data={MySummaryMockData()}
          paperStyle="paper-wrapper"
        />
      </div>
    );
  }
}

function MySummaryMockData() {
  return {
    labels: ["Message replies", "Drawn cases", "New messages", "New cases"],
    datasets: [
      {
        data: MySummaryData(),
        backgroundColor: ["#ffa000", "#275cab", "#FF6600", "#1E90FF"],
        hoverBackgroundColor: ["#ffa001", "#275cac", "#FF6600", "#1E90FF"]
      }
    ]
  };
}

function MySummaryData() {
  return [
    randomIntGenerator(1, 30),
    randomIntGenerator(1, 30),
    randomIntGenerator(1, 30),
    randomIntGenerator(1, 30)
  ];
}

export default UserSummary;
