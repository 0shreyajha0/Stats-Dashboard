import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateComparisonSelector = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleDateRangeChange = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate || new Date(),
    endDate: endDate || new Date(),
    key: "selection",
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleDateRangeChange}
        />
      </div>
      <div className="flex mb-2">
        <div className="mr-4">
          <label className="mr-2">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            className="p-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="mr-2">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="yyyy-MM-dd"
            className="p-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DateComparisonSelector;
