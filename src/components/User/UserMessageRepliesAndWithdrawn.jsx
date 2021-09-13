import React, { Component } from "react";
import LineCard from "../Line/LineCard";
import { GetScopeLabels, GetScopeData, randomIntGenerator } from "../../utils";
import {
  range,
  defaultRange,
  defaultMessageCode,
  messageCodes
} from "../../contants";
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

class UserMessageRepliesAndWithdrawn extends Component {
  constructor() {
    super();
    this.state = {
      selectedRange: defaultRange,
      selectedMessageCode: defaultMessageCode
    };
    console.log(this.state.selectedRange);
  }
  handleChangeRange(event) {
    this.setState({ selectedRange: event.target.value });
  }
  handleChangeMessageCode(event) {
    console.log(33);
    this.setState({ selectedMessageCode: event.target.value });
  }
  render() {
    const { selectedRange, selectedMessageCode } = this.state;
    return (
      <div>
        <LineCard
          header="Message replies and withdrawn cases"
          scope={range}
          selectedScope={selectedRange}
          handleChangeScope={event => this.handleChangeRange(event)}
          selectorProps={MenuProps}
          messageCodes={messageCodes}
          selectedMessageCode={selectedMessageCode}
          handleChangeMessageCode={event => this.handleChangeMessageCode(event)}
          data={GetDataLineChart(selectedRange)}
          paperStyle="paper-wrapper-large"
        />
      </div>
    );
  }
}

function GetDataLineChart(scope) {
  return {
    labels: GetScopeLabels(scope),
    datasets: [
      {
        label: "Cases drawn",
        fill: false,
        lineTension: 0.2,
        backgroundColor: "#275cac",
        borderColor: "#275cac",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#000",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#275cac",
        pointHoverBorderColor: "#275cac",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        sum: randomIntGenerator(200, 500),
        data: GetScopeData(scope)
      },
      {
        label: "Message replies",
        fill: false,
        lineTension: 0.2,
        backgroundColor: "#ffa000",
        borderColor: "#ffa000",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#000",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#ffa000",
        pointHoverBorderColor: "#ffa000",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        sum: randomIntGenerator(200, 500),
        data: GetScopeData(scope)
      }
    ]
  };
}

export default UserMessageRepliesAndWithdrawn;
