import React, { Component } from "react";

import TeamDrawnCases from "./TeamDrawnCases";
import TeamMessageRepliesAndWithdrawn from "./TeamMessageRepliesAndWithdrawn";

class TeamStats extends Component {
  render() {
    return (
      <div className="wrapper">
        <TeamDrawnCases />
      </div>
    );
  }
}

export default TeamStats;
