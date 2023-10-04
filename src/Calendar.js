import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import CTemplate from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./minicalendar.css";
import { Text, Icon } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Calendar = (props) => {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());

  const date = new Date();
  const day = date.getDay();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const dateString = month + " " + day + ", " + year;

  return (
    <div className="calendar">
      <div className="name">
        <BsPersonCircle />
        <p>Kris Bachan</p>
        <span>UI Designer and Founder</span>
      </div>
      {/* <p>{dateString}</p> */}
      <CTemplate
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        view={"month"}
        tileContent={<Text color="brand.500"></Text>}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
    </div>
  );
};

export default Calendar;
