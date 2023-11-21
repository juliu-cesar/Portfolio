import styled from "styled-components";

export const StyledHomePage = styled.main`
  width: 100%;
  .Home {
    position: relative;
    z-index: 10;
  }
  .frame_principalAndTech {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: calc(67% - 15px) calc(33% - 15px);
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
    top: 50%;
    right: 0;
    transform: rotate(180deg) translate(-60%, 40%);
  }
  #shape_3 {
    width: 60%;
    bottom: 0;
    left: 0;
    transform: rotate(-10deg) translate(-15%, 20%);
  }

  @media (max-width: 1000px) {
    .frame_principalAndTech {
      grid-template-columns: calc(65% - 15px) calc(35% - 15px);
    }
    #shape_2 {
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
    #shape_2 {
      width: 80%;
    }
  }
  @media (max-width: 700px) {
    .frame_principalAndTech {
      grid-template-columns: 100%;
      grid-template-rows: auto 400px;
    }
    #shape_1 {
      width: 70%;
    }
    #shape_2 {
      width: 100%;
    }
    #shape_3 {
      width: 70%;
    }
  }
  @media (max-width: 500px) {
    .frame_principalAndTech {
      grid-template-columns: 100%;
      grid-template-rows: auto 380px;
      gap: 25px;
    }
    #shape_1 {
      width: 80%;
    }
    #shape_2 {
      width: 110%;
    }
    #shape_3 {
      width: 80%;
    }
  }
  @media (max-width: 400px) {
    .frame_principalAndTech {
      gap: 15px;
    }
    .frame_principalAndTech {
      grid-template-columns: 100%;
      grid-template-rows: auto 430px;
    }
    #shape_1 {
      width: 90%;
    }
    #shape_2 {
      width: 120%;
    }
  }
`;
