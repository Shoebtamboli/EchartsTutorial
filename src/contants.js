import moment from "moment";
export const range = ["Week", "Month", "Year"];
export const defaultRange = "Week";
export const defaultMessageCode = "All";

export const messageCodes = ["All", "M300", "M301", "M200", "M100"];

export const labelsWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export const labelsMonth = getLabelsMonth();

export const labelsYear = moment.months();

function getLabelsMonth() {
  let weekNumber = moment(new Date()).isoWeek();
  let labels = new Array(weekNumber);
  for (let i = 0; i < labels.length; i++) {
    labels[i] = "Week " + (i + 1);
  }
  return labels;
}
