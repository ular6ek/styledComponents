import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ordersList } from "../../Pages/Orders/const";

export default function CustomDataPicker({ data, setData }) {
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const SearchByDate = (date) => {
    inSetDate(date);
    const results = data.filter((item) => {
      return item.date === moment(date).format("YYYY-MM-DD");
    });
    setData(results);
  };

  const SearchByDateRange = (startData, endData) => {
    const result = ordersList.filter((item) => {
      const itemDate = moment(item.date).from("YYYY-MM-DD");
      const start = moment(startData).from("YYYY-MM-DD");
      const end = moment(endData).from("YYYY-MM-DD");
      return itemDate >= start && itemDate <= end;
    });
    setData(result);
  };

  return (
    <div className="Data">
        <DatePicker className="res"
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          onChange={(dates) => {
            console.log(dates);
            const [start, end] = dates;
            setStartDate(start);  /* outline: none; */

            setEndDate(end);
            SearchByDate(start, end);
          }}
        />
    </div>
  );
}
