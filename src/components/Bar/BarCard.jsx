import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Paper, Divider, Select, Input, MenuItem } from "@material-ui/core";

class DoughnutCard extends Component {
  static propTypes = {
    scope: PropTypes.array.isRequired,
    selectedScope: PropTypes.string.isRequired,
    handleChangeScope: PropTypes.func.isRequired,
    selectorProps: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired,
    paperStyle: PropTypes.string.isRequired
  };

  render() {
    const {
      selectedScope,
      data,
      handleChangeScope,
      scope,
      selectorProps,
      header,
      paperStyle
    } = this.props;
    return (
      <Paper elevation={1} className={paperStyle}>
        <div className="paper-title">{header}</div>
        <Divider />
        <Select
          value={selectedScope}
          onChange={event => handleChangeScope(event)}
          input={<Input id="select-multiple" />}
          MenuProps={selectorProps}
        >
          {scope.map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <div className="paper-content-inner" style={{ paddingTop: "5px" }}>
          <Bar
            data={data}
            width={5}
            height={5}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </Paper>
    );
  }
}

export default DoughnutCard;
