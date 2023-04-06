import styled from "styled-components";

export const StyledCardSites = styled.div`
  width: 100%;
  .container_cardSite {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
  .card_site {
    padding: 25px;
    justify-content: space-around;
    border-radius: 10px;
    backdrop-filter: blur(10px);
  }
  .card_site:nth-child(1) {
    width: calc(58% - 16px);
    background-color: ${({ theme }) => theme.color1};
  }
  .card_site:nth-child(2) {
    width: calc(42% - 15px);
    background-color: ${({ theme }) => theme.bg_card_2};
  }
  .card_site:nth-child(3) {
    width: calc(50% - 15px);
    background: linear-gradient(90deg, ${({ theme }) => theme.bg_card_3} 0%, ${({ theme }) => theme.gradient_5} 100%);
  }
  .card_site:nth-child(4) {
    width: calc(50% - 15px);
    background: linear-gradient(225deg, ${({ theme }) => theme.gradient_4} 0%, ${({ theme }) => theme.gradient_5} 60%, ${({ theme }) => theme.gradient_5} 100%);
  }
  .frame_img {
    width: 100%;
    height: 330px;
    border-radius: 10px;
    overflow: hidden;
    img {
      height: 100%;
      border-radius: 10px;
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
    }
    a:nth-child(2) {
      background-color: ${({ theme }) => theme.text_color};
      color: ${({ theme }) => theme.inverted_color};
      :hover {
        outline-color: ${({ theme }) => theme.inverted_color};
      }
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
    .card_site{
      padding: 20px;
    }
    .frame_img {
      height: 200px;
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
`;
