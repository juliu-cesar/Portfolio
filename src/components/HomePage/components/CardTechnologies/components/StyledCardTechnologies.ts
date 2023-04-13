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
    height: 100%;
    padding: 50px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bg_card_1};
    backdrop-filter: blur(15px);
    :hover .expand_icon svg {
      stroke: ${({ theme }) => theme.inverted_color};
    }
  }
  .expand_icon {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    background-color: #30303030;
    svg {
      stroke: ${({ theme }) => theme.text_color};
      transition: stroke 0.2s;
    }
  }
  .titleTechnologies {
    font-size: 40px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .frame_technologies {
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
  .dots {
    width: 60px;
    height: 30px;
    margin-left: 25px;
    display: block;
    svg {
      width: 100%;
      height: 100%;
      fill: ${({ theme }) => theme.text_color};
      transition: fill 0.2s;
    }
  }

  @media (max-width: 1300px) {
    .container_cardTechnologies {
      padding: 35px;
    }
    .titleTechnologies {
      font-size: 30px;
      font-weight: 500;
      margin-top: 15px;
      margin-bottom: 20px;
    }
    .frame_technologies {
      height: 500px;
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
    .dots {
      width: 55px;
      height: 30px;
    }
  }
  @media (max-width: 1000px) {
    .container_cardTechnologies {
      padding: 25px;
    }
    .expand_icon {
      width: 35px;
      height: 35px;
      svg {
        width: 20px;
      }
    }
    .titleTechnologies {
      font-size: 27px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .frame_technologies {
      height: 520px;
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
    .dots {
      width: 50px;
      height: 25px;
    }
  }
  @media (max-width: 800px) {
    .titleTechnologies {
      font-size: 27px;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .frame_technologies {
      height: 470px;
    }
    .dots {
      width: 45px;
      height: 20px;
    }
  }
  @media (max-width: 700px) {
    max-width: 500px;
    margin: auto;
    .container_cardTechnologies {
      padding: 20px;
    }
    .titleTechnologies {
      font-size: 32px;
      margin-top: 0;
    }
    .frame_technologies {
      height: 80%;
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
    .dots {
      display: none;
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
    .techItem:nth-child(even){
      flex-direction: row-reverse;
    }
  }
`;
