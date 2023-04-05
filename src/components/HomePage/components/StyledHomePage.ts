import styled from "styled-components";

export const StyledHomePage = styled.main`
  width: 100%;
  .container_home{
    width: 100%;
    max-width: 1350px;
    padding: 40px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 30px;
    overflow: hidden;
  }

  .Shape1{
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    img{
      width: 700px;
    }
  }
  .Shape2{
    z-index: -1;
    position: absolute;
    top: 1200px;
    right: -200px;
    img{
      width: 400px;
    }
  }
`