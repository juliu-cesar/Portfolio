import styled from "styled-components";

export const StyledTechPrincipal = styled.div`
  width: 100%;
  margin: 30px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 30px;
  .card:first-child {
    background-color: ${({ theme }) => theme.color1};
  }
  .card:nth-child(2) {
    backdrop-filter: blur(15px);
    background-color: ${({ theme }) => theme.bg_card_1};    
  }
  .card:nth-child(3) {
    background-color: ${({ theme }) => theme.bg_card_4};
  }
  .card:nth-child(4) {
    background-color: ${({ theme }) => theme.bg_card_3};
  }

  @media (max-width: 800px) {
    margin: 25px 0;
    gap: 25px;
  }
  @media (max-width: 700px) {
    margin: 20px 0;
    gap: 20px;
    grid-template-columns: 1fr;
    .card:first-child {
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.18);
    }
  }
  @media (max-width: 500px) {
    margin: 15px 0;
    gap: 15px;
  }
`;
