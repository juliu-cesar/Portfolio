import styled from "styled-components";

export const StyledTechnologiesPage = styled.div`
  width: 100%;
  header {
    display: grid;
    grid-template-columns: 1fr 6fr;
    align-items: center;
    gap: 30px;
    a {
      height: 80px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.bg_card_1};
      color: ${({ theme }) => theme.text_color};
      svg {
        /* width: 40px; */
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
      background-color: ${({ theme }) => theme.bg_card_1};
      h2 {
        margin-left: 40px;
        font-size: 35px;
        font-weight: 400;
        line-height: 35px;
      }
    }
  }
`;
