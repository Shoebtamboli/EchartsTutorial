import React, { Component } from "react";
import UserSummary from "./UserSummary";
import UserMessageRepliesAndWithdrawn from "./UserMessageRepliesAndWithdrawn";

class UserStats extends Component {
  render() {
    return (
      <div className="wrapper">
        <UserSummary />
        <UserMessageRepliesAndWithdrawn />
      </div>
    );
  }
}

export default UserStats;
