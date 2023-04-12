import styled from "styled-components";

export const StyledTechnologiesPage = styled.div`
  width: 100%;
  .frame_principal {
    position: relative;
    z-index: 10;
  }
  header {
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    gap: 30px;
    transition: color 0.2s;
    a {
      height: 80px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.bg_card_1};
      color: ${({ theme }) => theme.text_color};
      backdrop-filter: blur(10px);
      svg {
        height: 50px;
      }
      p {
        margin-right: 20px;
        font-size: 27px;
        font-weight: 400;
      }
    }
    div {
      height: 80px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      background: linear-gradient(
        65deg,
        ${({ theme }) => theme.gradient_6} 0%,
        ${({ theme }) => theme.gradient_7} 65%,
        ${({ theme }) => theme.gradient_8} 100%
      );
      backdrop-filter: blur(15px);
      h2 {
        margin-left: 40px;
        font-size: 35px;
        font-weight: 400;
        line-height: 35px;
      }
    }
  }

  .Shape {
    position: absolute;
    img {
      width: 100%;
    }
  }
  #tech_shape_1 {
    width: 60%;
    top: 0;
    right: 0;
    transform: translate(50%, -40%);
  }
  #tech_shape_2 {
    width: 70%;
    top: 50%;
    left: 0;
    transform: rotate(180deg) translate(50%, 40%);
  }
  #tech_shape_3 {
    width: 55%;
    bottom: 0;
    right: 0;
    transform: rotate(90deg) translate(30%, -25%);
  }

  @media (max-width: 1000px) {
    header {
      grid-template-columns: 1fr 4fr;
      gap: 25px;
      a {
        height: 75px;
        p {
          margin-right: 20px;
          font-size: 25px;
        }
      }
      div {
        height: 75px;
        h2 {
          margin-left: 40px;
          font-size: 32px;
          font-weight: 400;
        }
      }
    }
    #tech_shape_1 {
      width: 70%;
    }
    #tech_shape_2 {
      width: 70%;
    }
    #tech_shape_3 {
      width: 60%;
    }
  }
  @media (max-width: 800px) {
    header {
      gap: 20px;
      a {
        height: 70px;
        p {
          margin-right: 20px;
          font-size: 22px;
          font-weight: 400;
        }
      }
      div {
        height: 70px;
        h2 {
          margin-left: 40px;
          font-size: 30px;
        }
      }
    }
  }
`;
