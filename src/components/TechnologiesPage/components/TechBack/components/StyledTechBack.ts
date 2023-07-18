import styled from "styled-components";

export const StyledTechBack = styled.div`
   width: 100%;
  margin: 30px 0;

  display: grid;
  grid-template-areas:
    "java java"
    "mysql springboot";
  align-items: center;
  gap: 30px;
  .card:first-child {
    grid-area: java;
    background-color: ${({ theme }) => theme.color1};
  }
  .card:nth-child(2) {
    grid-area: mysql;
    background-color: ${({ theme }) => theme.bg_card_4};
  }
  .card:nth-child(3) {
    grid-area: springboot;
    background-color: ${({ theme }) => theme.bg_card_5};
  }

  @media (max-width: 800px) {
    margin: 25px 0;
    gap: 25px;
  }
  @media (max-width: 700px) {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;    
  }
  @media (max-width: 500px) {
    margin: 15px 0;
    gap: 15px;    
  }
`;
