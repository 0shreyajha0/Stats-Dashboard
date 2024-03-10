import React, { useState } from "react";
import DateComparisonSelector from "./DateComparisonSelector";

const DateAndTimePicker = () => {

  return (
    <div className="flex justify-end mr-4">
      <DateComparisonSelector />
    </div>
  );
};

export default DateAndTimePicker;
