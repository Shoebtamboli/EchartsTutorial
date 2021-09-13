import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Paper, Divider, Select, Input, MenuItem } from "@material-ui/core";

class LineCard extends Component {
  static propTypes = {
    scope: PropTypes.array.isRequired,
    selectedScope: PropTypes.string.isRequired,
    handleChangeScope: PropTypes.func.isRequired,
    selectorProps: PropTypes.object.isRequired,
    messageCodes: PropTypes.array.isRequired,
    selectedMessageCode: PropTypes.string.isRequired,
    handleChangeMessageCode: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired,
    paperStyle: PropTypes.string.isRequired
  };
  render() {
    console.log(this.props.selectedScope);
    const {
      scope,
      selectedScope,
      handleChangeScope,
      selectorProps,
      messageCodes,
      selectedMessageCode,
      handleChangeMessageCode,
      data,
      header,
      paperStyle
    } = this.props;
    return (
      <Paper elevation={1} className={paperStyle}>
        <div className="paper-title">{header}</div>
        <Divider />
        <div className="page-count-sum">
          {data.datasets.map(function(item, index) {
            return (
              <div className="page-count" key={index}>
                {item.label}: {item.sum}
              </div>
            );
          })}
        </div>
        {selectedScope}
        <Select
          value={selectedScope}
          onChange={event => handleChangeScope(event)}
          input={<Input id="select-multiple" />}
          MenuProps={selectorProps}
        >
          {messageCodes.map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={selectedMessageCode}
          onChange={event => handleChangeMessageCode(event)}
          input={<Input id="select-multiple" />}
          MenuProps={selectorProps}
        >
          {scope.map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <div className="paper-content-inner">
          <Line data={data} />
        </div>
      </Paper>
    );
  }
}

export default LineCard;
