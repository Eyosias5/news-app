var dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export const dateConvertor = (date) => {
  let format_date = dayjs(date).fromNow();
  return format_date;
};
