import styled from "styled-components";

export const StyledCardSites = styled.div`
  width: 100%;
  .container_cardSite {
    margin-top: 30px;
    display: grid;
    grid-template:
      "gpuStore gpuStore vsCode"
      "port form form"
      / calc(50% - 15px) calc(5% - 15px) calc(45% - 30px);
    gap: 30px;
  }
  .card_site {
    width: 100%;
    padding: 25px;
    justify-content: space-around;
    border-radius: 10px;
    backdrop-filter: blur(10px);
  }
  .card_site:nth-child(1) {
    grid-area: gpuStore;
    background-color: ${({ theme }) => theme.color1};
  }
  .card_site:nth-child(2) {
    grid-area: vsCode;
    background-color: ${({ theme }) => theme.bg_card_2};
  }
  .card_site:nth-child(3) {
    grid-area: port;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.bg_card_3} 0%,
      ${({ theme }) => theme.gradient_5} 100%
    );
  }
  .card_site:nth-child(4) {
    grid-area: form;
    background: linear-gradient(
      225deg,
      ${({ theme }) => theme.gradient_4} 0%,
      ${({ theme }) => theme.gradient_5} 60%,
      ${({ theme }) => theme.gradient_5} 100%
    );
  }
  .frame_img {
    position: relative;
    width: 100%;
    height: 330px;
    border-radius: 10px;
    overflow: hidden;
    img {
      height: 100%;

      border-radius: 10px;
    }
    :hover .cover_tech {
      top: 50%;
    }
  }
  .cover_tech {
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 88%;
    min-height: 150px;
    padding: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    background-color: #70707070;
    backdrop-filter: blur(9px);
    transition: all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.1);
    .item_tech {
      position: relative;
      svg {
        width: 50px;
        height: 50px;
        fill: white;
      }
      p {
        z-index: 100;
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        text-align: center;
        opacity: 0;
        font-size: 16px;
        display: none;
        box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        background-color: white;
        color: black;
        animation: fade 0.2s ease-in-out forwards;
        animation-delay: 150ms;
        :after {
          content: "";
          position: absolute;
          top: -4px;
          left: calc(50% - 4px);
          width: 8px;
          height: 8px;
          background-color: white;
          transform: rotate(45deg);
        }
      }
      :hover p {
        display: block;
      }
    }
  }
  .frame_text {
    min-height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4 {
      font-size: 26px;
      font-weight: 400;
      line-height: 30px;
    }
    p {
      font-size: 19px;
      font-weight: 300;
      line-height: 22px;
    }
  }
  .frame_links {
    display: flex;
    flex-direction: row;
    gap: 10px;
    a {
      width: 150px;
      min-width: 150px;
      height: 40px;
      font-size: 17px;
      font-weight: 500;
      justify-content: center;
      gap: 10px;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.inverted_color};
      color: ${({ theme }) => theme.text_color};
      :hover {
        outline: 2px solid;
        outline-color: ${({ theme }) => theme.text_color};
      }
      svg {
        stroke: ${({ theme }) => theme.text_color};
      }
    }
    a:nth-child(2) {
      background-color: ${({ theme }) => theme.text_color};
      color: ${({ theme }) => theme.inverted_color};
      :hover {
        outline-color: ${({ theme }) => theme.inverted_color};
      }
      svg {
        stroke: ${({ theme }) => theme.inverted_color};
      }
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1300px) {
    .frame_img {
      height: 300px;
    }
  }
  @media (max-width: 1000px) {
    .frame_img {
      height: 250px;
    }
    .cover_tech {
      padding: 25px;
      gap: 17px;
      .item_tech {
        position: relative;
        svg {
          width: 45px;
        }
      }
    }
    .frame_text {
      h4 {
        font-size: 22px;
        font-weight: 500;
        line-height: 28px;
      }
      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 20px;
      }
    }
    .frame_links {
      gap: 5px;
      a {
        min-width: 100px;
        height: 35px;
        font-size: 13px;
        font-weight: 400;
        gap: 5px;
        border-radius: 18px;
      }
      a:nth-child(2) {
        gap: 2px;
      }
    }
  }
  @media (max-width: 800px) {
    .card_site {
      padding: 20px;
    }
    .frame_img {
      height: 200px;
    }
    .cover_tech {
      padding: 20px;
      gap: 15px;
      .item_tech {
        position: relative;
        svg {
          width: 40px;
        }
        p {
          width: 90px;
          font-size: 14px;
        }
      }
    }
    .frame_text {
      h4 {
        font-size: 19px;
      }
      p {
        font-size: 14px;
        font-weight: 200;
      }
    }
  }
  @media (max-width: 700px) {
    .container_cardSite {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .card_site {
      max-width: 500px;
      padding: 25px;
    }
    .frame_img {
      height: 250px;
    }
  }
  @media (max-width: 500px) {
    .container_cardSite {
      gap: 25px;
      margin-top: 25px;
    }
    .card_site{
      padding: 15px;
    }
  }
  @media (max-width: 400px) {
    .container_cardSite {
      gap: 15px;
      margin-top: 15px;
    }
  }
`;
