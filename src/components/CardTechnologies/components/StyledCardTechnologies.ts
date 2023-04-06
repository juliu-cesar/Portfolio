import styled from "styled-components";

export const StyledCardTechnologies = styled.div`
  width: calc(30% - 15px);
  transition: width 0.2s ease-in-out;
  .container_cardTechnologies {
    cursor: pointer;
    min-height: 650px;
    padding: 50px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bg_card_1};
    backdrop-filter: blur(15px);
    :hover .expand_icon svg {
      stroke: ${({ theme }) => theme.color1};
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
      transition: stroke 0.2s;
    }
    :hover svg {
      stroke: ${({ theme }) => theme.color1};
    }
  }
  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .frame_tech {
    height: 480px;
    justify-content: space-around;
  }
  .item_tech {
    gap: 10px;
    img {
      width: 65px;
    }
    p {
      font-size: 24px;
      font-weight: 400;
    }
  }

  @media (max-width: 1300px) {
    .container_cardTechnologies {
      padding: 35px;
    }
    h2 {
      font-size: 30px;
      font-weight: 500;
      margin-top: 15px;
      margin-bottom: 20px;
    }
    .frame_tech {
      height: 500px;
    }
    .item_tech {
      img {
        width: 55px;
      }
      p {
        font-size: 22px;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 1000px) {
    width: calc(35% - 15px);
    .container_cardTechnologies {
      padding: 25px;
    }
    .expand_icon{
      width: 35px;
      height: 35px;
      svg{
        width: 20px;
      }
    }
    h2 {
      font-size: 27px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .frame_tech {
      height: 520px;
    }
    .item_tech {
      img {
        width: 45px;
      }
      p {
        font-size: 22px;
        font-weight: 300;
      }
    }
  }
  @media (max-width: 800px) {
    width: calc(38% - 15px);
    .container_cardTechnologies {
      min-height: 600px;
    }
    h2 {
      font-size: 27px;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .frame_tech {
      height: 470px;
    }
    .item_tech {
      img {
        width: 45px;
      }
      p {
        font-size: 22px;
        font-weight: 300;
      }
    }
  }
`;
