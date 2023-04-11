import styled from "styled-components";

export const StyledTechPrincipal = styled.div`
  width: 100%;
  margin: 30px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 30px;

  .card {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bg_card_2};
    backdrop-filter: blur(20px);
    transition: color 0.2s;
  }
  .title {
    gap: 20px;
    .frame_img {
      width: 60px;
      min-width: 60px;
      height: 60px;
      min-height: 60px;
      padding: 7px;
      border-radius: 10px;
      background-color: white;
      svg {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }
    h3 {
      font-size: 35px;
      font-weight: 500;
      line-height: 30px;
    }
  }
  .text {
    height: 100%;
    margin-left: 25px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
  }
  .card:first-child {
    background-color: ${({ theme }) => theme.color1};
  }
  @media (max-width: 1000px) {
    margin: 25px 0;
    gap: 25px;
    .title {
      gap: 20px;
      .frame_img {
        width: 55px;
        min-width: 55px;
        height: 55px;
        min-height: 55px;
        padding: 6px;
      }
      h3 {
        font-size: 32px;
      }
    }
    .text {
      margin-left: 20px;
      font-size: 16px;
      line-height: 19px;
    }
  }
  @media (max-width: 800px) {
    margin: 20px 0;
    gap: 20px;
    .title {
      gap: 20px;
      .frame_img {
        width: 50px;
        min-width: 50px;
        height: 50px;
        min-height: 50px;
      }
      h3 {
        font-size: 27px;
      }
    }
    .text {
      margin-left: 15px;
      font-size: 15px;
      font-weight: 300;
      line-height: 18px;
    }
  }
`;
