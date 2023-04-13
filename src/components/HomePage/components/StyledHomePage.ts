import styled from "styled-components";

export const StyledHomePage = styled.main`
  width: 100%;
  .Home{
    position: relative;
    z-index: 10;
  }
  .frame_principalAndTech {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: calc(70% - 15px) calc(30% - 15px);
    grid-template-rows: 650px;
    align-items: center;
    gap: 30px;
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
    .frame_principalAndTech {
      grid-template-columns: calc(65% - 15px) calc(35% - 15px);
    }
    #shape_2 {
      width: 80%;
      top: 450px;
      right: calc(0px - 45%);
    }
  }
  @media (max-width: 800px) {
    .frame_principalAndTech {
      grid-template-columns: calc(60% - 15px) calc(40% - 15px);
      grid-template-rows: 600px;
    }
    #shape_1 {
      width: 60%;
    }
  }
  @media (max-width: 500px) {
    .frame_principalAndTech{
      gap: 25px;
    }
  }
  @media (max-width: 700px) {
    .frame_principalAndTech{
      grid-template-columns: 100%;
      grid-template-rows: auto 320px;
    }
  }
  @media (max-width: 400px) {
    .frame_principalAndTech{
      gap: 15px;
    }
    .frame_principalAndTech{
      grid-template-columns: 100%;
      grid-template-rows: auto 390px;
    }
  }
`;
