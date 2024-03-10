import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateComparisonSelector = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [dateString, setDateString] = useState<string>("");

  const handleDateRangeChange = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

    const startMonth = ranges.selection.startDate.getUTCMonth() + 1;
    const startYear = ranges.selection.startDate.getUTCFullYear();

    const formattedStartDate = `${startMonth}/${startYear}`;

    const endMonth = ranges.selection.endDate.getUTCMonth() + 1;
    const endYear = ranges.selection.endDate.getUTCFullYear();

    const formattedEndDate = `${endMonth}/${endYear}`;

    setDateString(`${formattedStartDate} - ${formattedEndDate}`);
  };

  const selectionRange = {
    startDate: startDate || new Date(),
    endDate: endDate || new Date(),
    key: "selection",
  };

  return (
    <div>
      <input
        type="text"
        value={dateString}
        placeholder="Select date range here"
        className="input input-bordered w-full max-w-xs mb-2"
        onClick={() =>
          (
            document.getElementById("my_modal_2") as HTMLDialogElement
          )?.showModal()
        }
      />
      <dialog id="my_modal_2" className="modal">
        <div
          className="modal-box"
          style={{ width: "620px", maxWidth: "unset" }}
        >
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleDateRangeChange}
          />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Save</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default DateComparisonSelector;
