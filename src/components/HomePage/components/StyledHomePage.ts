import styled from "styled-components";

export const StyledHomePage = styled.main`
  width: 100%;
  .container_home{
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
  .frame_home{
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

  .Shape1{
    position: absolute;
    top: 0;
    left: 0;
    img{
      width: 50%;
    }
  }
  .Shape2{
    position: absolute;
    top: 1200px;
    right: -200px;
    img{
      width: 40%;
    }
  }

  @media (max-width: 1400px) {
    .container_home{
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
  @media (max-width: 1000px) {
    .container_home{
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 800px) {
    .container_home{
      padding: 30px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`