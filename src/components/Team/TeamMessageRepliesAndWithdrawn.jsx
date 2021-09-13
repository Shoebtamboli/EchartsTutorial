/*
import React, { Component } from "react";
import LineCard from "../Line/LineCard";
import { range, defaultRange } from "../../contants";
import { GetScopeLabels, GetScopeData } from "../../utils";
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

class TeamMessageRepliesAndWithdrawn extends Component {
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
        <LineCard
          header="Drawn cases by creditor"
          scope={range}
          selectedScope={selectedRange}
          handleChangeScope={event => this.handleChangeRange(event)}
          selectorProps={MenuProps}
          data={GetDataLineChartDrawVsNew()}
          paperStyle="paper-wrapper-large"
        />
      </div>
    );
  }
}

function GetDataLineChartDrawVsNew(scope) {
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
        data: GetScopeData(scope)
      },
      {
        label: "New cases",
        fill: false,
        lineTension: 0.2,
        backgroundColor: "#1E90FF",
        borderColor: "#1E90FF",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#000",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#1E90FF",
        pointHoverBorderColor: "#1E90FF",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: GetScopeData(scope)
      }
    ]
  };
}

export default TeamMessageRepliesAndWithdrawn;
*/
