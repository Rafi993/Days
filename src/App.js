import React, { useState, useCallback } from "react";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";

import "./date.css";

const App = () => {
  const [date, setDate] = useState(new Date());
  const handleDate = useCallback(
    newDate => {
      setDate(newDate);
    },
    [setDate]
  );

  const todayWithoutTime = moment().startOf("day");
  const dateWithoutTime = moment(date).startOf("day");

  return (
    <div className="app">
      <h2>Time past since</h2>
      <div className="formgroup">
        <DateTimePicker
          onChange={handleDate}
          value={date}
          format="y-MM-dd h:mm:ss a"
          disableClock
        />
      </div>

      <h3>
        <span className="value">
          {todayWithoutTime.diff(dateWithoutTime, "years")}
        </span>
        Years
      </h3>

      <h3>
        <span className="value">
          {todayWithoutTime.diff(dateWithoutTime, "months")}
        </span>
        Months
      </h3>

      <h3>
        <span className="value">
          {todayWithoutTime.diff(dateWithoutTime, "weeks")}
        </span>
        Weeks
      </h3>

      <h3>
        <span className="value">
          {todayWithoutTime.diff(dateWithoutTime, "days")}
        </span>
        Days
      </h3>

      <h3>
        <span className="value">{moment().diff(moment(date), "hours")}</span>
        Hours
      </h3>

      <h3>
        <span className="value">{moment().diff(moment(date), "minutes")}</span>
        Minutes
      </h3>

      <h3>
        <span className="value">{moment().diff(moment(date), "seconds")}</span>
        Seconds
      </h3>
    </div>
  );
};

export default App;
