import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDate } from "../reducers/todoReducer";
import { BsPersonCircle } from "react-icons/bs";
import CTemplate from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/minicalendar.css";
import { Text, Icon } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Calendar = (props) => {
  const { selectRange } = props;
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    dispatch(updateDate(value + ""));
  }, [value, dispatch]);

  return (
    <div className={`calendar`}>
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
