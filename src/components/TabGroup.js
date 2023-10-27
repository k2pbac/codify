import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { updatePeriod } from "../reducers/chartReducer";
const Tab = styled.button`
  font-size: 12px;
  padding: 10px 10px;
  cursor: pointer;
  opacity: 0.6;
  border: 0;
  outline: 0;
  ${({ $active }) =>
    $active &&
    `
  border-bottom: 2px solid black;
  opacity: 1;
`};
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-bottom: 20px;
`;
const types = ["Yearly", "Monthly"];
function TabGroup() {
  const dispatch = useDispatch();
  const { period } = useSelector((state) => state.chart);
  const [active, setActive] = useState(types[1]);

  const handleTabChange = (type) => {
    setActive(type);
    if (period === "monthly") dispatch(updatePeriod("yearly"));
    else dispatch(updatePeriod("monthly"));
  };
  return (
    <>
      <ButtonGroup className={`button-group`}>
        {types.map((type) => (
          <Tab
            key={type}
            $active={active === type ? 1 : 0}
            onClick={() => handleTabChange(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
    </>
  );
}

export default TabGroup;
