import styled from "styled-components";

export const StyledHomePage = styled.main`
  width: 100%;
  .frame_home {
    z-index: 10;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .Shape {
    position: absolute;
    img {
      width: 100%;
    }
  }
  #shape_1 {
    width: 50%;
    top: 0;
    left: 0;
  }
  #shape_2 {
    width: 70%;
    top: 500px;
    right: calc(0px - 40%);
    transform: rotate(180deg);
  }
  #shape_3 {
    width: 60%;
    bottom: calc(0px - 10%);
    left: calc(0px - 15%);
    transform: rotate(-10deg);
  }

  @media (max-width: 1000px) {
    #shape_2 {
      width: 80%;
      top: 450px;
      right: calc(0px - 45%);
    }
  }
  @media (max-width: 800px) {
    #shape_1 {
      width: 60%;
    }
  }
`;
