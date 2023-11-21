import styled from "styled-components";

export const StyledCardTechnologies = styled.div`
  width: 100%;
  height: 100%;
  transition: width 0.2s ease-in-out;
  a {
    color: ${({ theme }) => theme.text_color};
  }
  .container_cardTechnologies {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 40px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bg_card_1};
    backdrop-filter: blur(15px);
    overflow-y: hidden;
  }
  .titleTechnologies {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    font-size: 40px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 20px;
    background-color: #30303020;
    border-radius: 16px;
    svg {
      height: 50px;
      width: 45px;
    }
  }
  .frame_technologies {
    height: 100%;
    justify-content: space-around;
    gap: 15px;
  }
  .techItem {
    gap: 10px;
    svg {
      width: 65px;
      min-width: 65px;
      fill: ${({ theme }) => theme.text_color};
      transition: fill 0.2s;
    }
    p {
      font-size: 24px;
      font-weight: 400;
    }
  }

  @media (max-width: 1300px) {
    .container_cardTechnologies {
      padding: 30px;
    }
    .titleTechnologies {
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 20px;
      svg {
        height: 45px;
        min-width: 40px;
        width: 40px;
      }
    }
    .techItem {
      svg {
        width: 55px;
        min-width: 55px;
      }
      p {
        font-size: 22px;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 1000px) {
    .container_cardTechnologies {
      padding: 25px;
    }
    .titleTechnologies {
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 20px;
      svg {
        height: 40px;
        min-width: 35px;
        width: 35px;
      }
    }
    .techItem {
      svg {
        width: 45px;
        min-width: 45px;
      }
      p {
        font-size: 22px;
        font-weight: 300;
      }
    }
  }
  @media (max-width: 900px) {
    .container_cardTechnologies {
      padding: 20px;
    }
    .titleTechnologies {
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 15px;
      svg {
        height: 40px;
        min-width: 35px;
        width: 35px;
      }
    }
  }
  @media (max-width: 800px) {
    .titleTechnologies {
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 15px;
    }
  }
  @media (max-width: 700px) {
    margin: auto;
    .container_cardTechnologies {
      padding: 20px;
    }
    .titleTechnologies {
      font-size: 32px;
    }
    .frame_technologies {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      align-items: center;
    }
    .techItem {
      svg {
        width: 50px;
        min-width: 50px;
      }
      p {
        font-size: 24px;
        font-weight: 300;
      }
    }
  }
  @media (max-width: 500px) {
    .titleTechnologies {
      font-size: 30px;
    }
    .techItem {
      svg {
        width: 40px;
        min-width: 40px;
      }
      p {
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 400px) {
    .container_cardTechnologies {
      padding: 15px;
    }
    .titleTechnologies {
      font-size: 28px;
    }
    .frame_technologies {
      align-items: center;
      gap: 12px;
      grid-template-columns: 1fr;
      align-items: center;
      justify-items: center;
    }
    .techItem {
      width: 70%;
      p {
        font-size: 24px;
        font-weight: 300;
      }
    }
    .techItem:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;
