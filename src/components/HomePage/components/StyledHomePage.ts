import styled from "styled-components";

export const StyledHomePage = styled.main`
  width: 100%;
  .container_home {
    position: relative;
    width: 95%;
    max-width: 1300px;
    padding: 50px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 40px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.bg_container};
  }
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

  .Shape1 {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 100%;
    }
  }
  .Shape2 {
    width: 70%;
    position: absolute;
    top: 500px;
    right: calc(0px - 40%);
    transform: rotate(180deg);
    img {
      width: 100%;
    }
  }
  .Shape3 {
    width: 60%;
    position: absolute;
    bottom: calc(0px - 10%);
    /* bottom: -70px; */
    left: calc(0px - 15%);
    transform: rotate(-10deg);
    img {
      width: 100%;
    }
  }

  @media (max-width: 1400px) {
    .container_home {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
  @media (max-width: 1000px) {
    .container_home {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .Shape2 {
      width: 80%;
      top: 450px;
      right: calc(0px - 45%);
    }
  }
  @media (max-width: 800px) {
    .container_home {
      padding: 30px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .Shape1 {
      width: 60%;
    }
  }
`;
