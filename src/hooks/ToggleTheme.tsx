import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ColorContext } from "./ColorProvider";

const StyledToggle = styled.button`
  z-index: 100;
  position: fixed;
  top: 30px;
  right: 0px;
  width: 45px;
  height: 40px;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
  background-color: ${({ theme }) => theme.text_color};
  span {
    position: absolute;
    top: calc(50% - 8.5px);
    left: 15px;
    width: 17px;
    height: 17px;
    display: block;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.inverted_color};
    .sunRays {
      z-index: 10;
      position: absolute;
      top: calc(50% - 16px);
      left: calc(50% - 16px);
      width: 32px;
      height: 32px;
      display: none;
      animation: sun 1.5s alternate infinite;
    }
    .stars {
      z-index: 10;
      position: absolute;
      top: -6px;
      right: -11px;
      width: 9px;
      height: 9px;
      animation: moon 5s alternate infinite;
    }
    .stars:nth-child(2) {
      top: -5px;
      right: -1px;
      width: 7px;
      height: 7px;
      animation: moon 2s alternate infinite 1s;
    }
    .stars:nth-child(3) {
      top: 5px;
      right: -8px;
      width: 8px;
      height: 8px;
      animation: moon 4s alternate infinite 3s;
    }
    ::after {
      content: "";
      position: absolute;
      top: calc(50% - 9px);
      right: -2px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.text_color};
      transition: all 0.2s;
    }
  }
  .light {
    .sunRays {
      display: block;
    }
    .stars {
      display: none;
    }
    ::after {
      right: -20px;
    }
  }

  @keyframes sun {
    0% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes moon {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function ToggleTheme() {
  const colorContext = useContext(ColorContext);

  useEffect(() => {
    if (colorContext.mode == "light") return;
    const icon = document.querySelector("#sun_moon") as HTMLElement;
    icon.classList.add("light");
  }, []);
  function toggle() {
    const icon = document.querySelector("#sun_moon") as HTMLElement;
    if (colorContext.mode != "light") {
      icon.classList.remove("light");
    } else {
      icon.classList.add("light");
    }
    colorContext.toggleMode();
  }
  return (
    <StyledToggle
      onClick={() => {
        toggle();
      }}
    >
      <span id="sun_moon" className="align_center">
        <img className="sunRays" src="img/svg/sunRays.svg" />
        <img className="stars" src="img/svg/star.svg" />
        <img className="stars" src="img/svg/star.svg" />
        <img className="stars" src="img/svg/star.svg" />
      </span>
    </StyledToggle>
  );
}
