import { labelsYear, labelsWeek, labelsMonth } from "./contants";
import moment from "moment";

export function GetScopeLabels(scope) {
  switch (scope) {
    case "Week":
      return labelsWeek;

    case "Month":
      return labelsMonth;

    case "Year":
      return labelsYear;

    default:
      return null;
  }
}

export function randomIntGenerator(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export function GetScopeData(scope) {
  var base = randomIntGenerator(50, 120);
  switch (scope) {
    case "Week":
      let numbersDay = new Array(7);
      for (let i = 0; i < numbersDay.length; i++) {
        numbersDay[i] = randomIntGenerator(base + 0, base + 20);
      }
      return numbersDay;

    case "Month":
      let weekNumber = moment(new Date()).isoWeek();
      let weeks = new Array(weekNumber);
      for (let i = 0; i < weeks.length; i++) {
        weeks[i] = randomIntGenerator(base + 0, base + 20);
      }
      return weeks;

    case "Year":
      let numbersMonth = new Array(12);
      for (let i = 0; i < numbersMonth.length; i++) {
        numbersMonth[i] = randomIntGenerator(base + 0, base + 20);
      }
      return numbersMonth;

    default:
      return null;
  }
}
