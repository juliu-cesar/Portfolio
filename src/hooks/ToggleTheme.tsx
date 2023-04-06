import { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "./ColorProvider";

const StyledToggle = styled.button`
  z-index: 100;
  position: fixed;
  top: 30px;
  right: 0px;
  width: 50px;
  height: 40px;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
  background-color: ${({ theme }) => theme.text_color};
  span {
    position: absolute;
    top: calc(50% - 10px);
    left: 15px;
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.inverted_color};
  }
`;

export default function ToggleTheme() {
  const colorContext = useContext(ColorContext);
  function toggle(){
    colorContext.toggleMode()
  }
  return (
    <StyledToggle onClick={()=>{toggle()}}>
      <span></span>
    </StyledToggle>
  );
}
