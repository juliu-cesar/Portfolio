import styled from "styled-components";

export const StyledCardPrincipal = styled.div`
  width: 100%;
  .container_cardPrincipal {
    width: 60%;
    height: 650px;
    padding: 30px;
    border-radius: 20px;
    background: rgb(240, 240, 240);
    background: linear-gradient(
      135deg,
      rgba(240, 240, 240, 0.75) 0%,
      rgba(209, 209, 209, 0.19548872180451127) 100%
    );
    justify-content: space-between;
    align-items: center;
  }
  .Title_principal {
    h1 {
      font-size: 40px;
      font-weight: 500;
    }
    h3 {
      font-size: 26px;
      font-weight: 400;
    }
  }
  .Name_principal {
    h3 {
      font-size: 26px;
      font-weight: 500;
    }
    p {
      font-size: 20px;
      font-weight: 300;
    }
  }
  .Links_principal {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    a {
      background-color: ${({ theme }) => theme.text_color};
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 65%;
      }
    }
  }
`;
