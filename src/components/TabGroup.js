import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
`;
const types = ["Yearly", "Monthly"];
function TabGroup() {
  const { mode } = useSelector((state) => state.style);

  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup className={`button-group ${mode}`}>
        {types.map((type) => (
          <Tab
            key={type}
            $active={active === type ? 1 : 0}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
    </>
  );
}

export default TabGroup;
