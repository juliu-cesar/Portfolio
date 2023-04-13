import styled from "styled-components";

export const StyledCardPrincipal = styled.div`
  width: 100%;
  height: 100%;
  transition: width 0.2s ease-in-out;
  .container_cardPrincipal {
    height: 100%;
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
    transition: color 0.2s;
  }
  .Title_principal {
    h1 {
      max-width: 700px;
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
      svg {
        width: 65%;
        fill: ${({ theme }) => theme.inverted_color};
        display: block;
      }
      :hover {
        outline: 2px solid ${({ theme }) => theme.color1};
      }
    }
    a:nth-child(2) svg {
      width: 58%;
    }
  }

  @media (max-width: 1300px) {
    .Title_principal {
      h1 {
        font-size: 52px;
      }
      h3 {
        font-size: 32px;
        font-weight: 300;
      }
    }
    .Name_principal {
      h3 {
        font-size: 27px;
        line-height: 24px;
      }
      p {
        font-size: 19px;
      }
    }
  }
  @media (max-width: 1000px) {
    .container_cardPrincipal {
      padding: 40px;
    }
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
    .container_cardPrincipal {
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
  @media (max-width: 700px) {
    min-height: 450px;
  }
  @media (max-width: 500px) {
    .container_cardPrincipal {
      padding: 20px;
      gap: 20px;
    }
    .Title_principal {
      h1 {
        font-size: 35px;
        line-height: 45px;
      }
      h3 {
        font-size: 20px;
        line-height: 27px;
      }
    }
    .Name_principal {
      h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
      }
      p {
        font-size: 16px;
        font-weight: 200;
      }
    }
  }
  @media (max-width: 400px) {
    .container_cardPrincipal {
      padding: 15px;
    }
    .Title_principal {
      h1 {
        font-size: 30px;
        line-height: 40px;
      }
      h3 {
        font-size: 18px;
        line-height: 24px;
      }
    }
    .Name_principal {
      h3 {
        font-size: 22px;
        line-height: 25px;
      }
      p {
        font-size: 15px;
        font-weight: 200;
        line-height: 22px;
      }
    }
    .Links_principal {
      margin-top: 10px;
      a {
        width: 45px;
        height: 45px;
      }
    }
  }
`;
