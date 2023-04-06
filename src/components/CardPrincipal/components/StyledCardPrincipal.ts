import styled from "styled-components";

export const StyledCardPrincipal = styled.div`
  width: 100%;
  .container_cardPrincipal {
    width: 60%;
    min-height: 650px;
    padding: 50px;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    border-radius: 20px;
    background: linear-gradient(
      150deg,
      ${({ theme }) => theme.gradient_1} 0%,
      ${({ theme }) => theme.gradient_2} 65%,
      ${({ theme }) => theme.gradient_3} 100%
    );
    backdrop-filter: blur(30px);
  }
  .Title_principal {
    h1 {
      font-size: 55px;
      font-weight: 500;
    }
    h3 {
      font-size: 35px;
      font-weight: 300;
    }
  }
  .Name_principal {
    h3 {
      font-size: 30px;
      font-weight: 500;
      line-height: 26px;
    }
    p {
      font-size: 20px;
      font-weight: 300;
    }
  }
  .Links_principal {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    a {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.text_color};
      img {
        width: 65%;
      }
      :hover {
        outline: 2px solid ${({ theme }) => theme.color1};
      }
    }
  }

  @media (max-width: 1300px) {
    .Title_principal {
      h1 {
        font-size: 50px;
      }
      h3 {
        font-size: 30px;
        font-weight: 300;
      }
    }
    .Name_principal {
      h3 {
        font-size: 25px;
        line-height: 24px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 1000px) {
    .Title_principal {
      h1 {
        font-size: 45px;
      }
      h3 {
        font-size: 25px;
      }
    }
    .Name_principal {
      h3 {
        font-size: 25px;
      }
      p {
        font-size: 18px;
        font-weight: 200;
      }
    }
  }
  @media (max-width: 800px) {
    .container_cardPrincipal{
      min-height: 600px;
      padding: 30px;
    }
    .Title_principal {
      h1 {
        font-size: 40px;
        font-weight: 500;
        line-height: 50px;
      }
      h3 {
        font-size: 22px;
        font-weight: 300;
      }
    }
    .Name_principal {
      h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
      }
      p {
        font-size: 17px;
        font-weight: 200;
      }
    }
  }
`;
