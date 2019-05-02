const moment = require("moment");

exports.label = label => {
  let formattedLabel = label.toLowerCase();
  formattedLabel =
    formattedLabel[0].toUpperCase() + formattedLabel.substring(1);
  formattedLabel = formattedLabel.replace(/_/g, " ");
  formattedLabel = formattedLabel.replace(/;/g, ": ");
  formattedLabel = formattedLabel.replace(/\&/g, "and");
  return formattedLabel;
};

exports.genre = genre => {
  const s = genre.split(": ");
  if (s[1]) {
    return s[1][0].toUpperCase() + s[1].substring(1);
  } else {
    return genre[0].toUpperCase() + genre.substring(1);
  }
};

exports.day = date => {
  const m = moment(new Date(date));
  return m.format("YYYY-MM-DD");
};
