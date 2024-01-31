const { google } = require("googleapis");
require("dotenv").config();

const cal = google.calendar({
  version: "v3",
  auth: process.env.API_KEY,
});

// add a publicly shared calendar or change the calendar settings of your calendar to public and test
const calendar = "luchithapasqual@gmail.com";

const tomorrow3pm = "2024-02-01T07:30:00.000Z";

const tomorrow4pm = "2024-02-01T10:30:00.000Z";

const checkFreeOrBusy = (time1, time2, calendarId) => {
  cal.freebusy
    .query({
      resource: {
        timeMin: time1,
        timeMax: time2,
        timeZone: "Asia/Colombo",
        items: [{ id: calendarId }],
      },
    })
    .then((result) => {
      console.log(result?.data?.calendars);
    })
    .catch((e) => {
      console.error(e);
    });
};

checkFreeOrBusy(tomorrow3pm, tomorrow4pm, calendar);
