import styled from "styled-components";

export const StyledTech_3 = styled.div`
  width: 100%;
  margin: 30px 0;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 
  "node mongoFire"
  "git mongoFire"
  ;
  align-items: center;
  gap: 30px;
  .mongo, .firebase{
    gap: 15px;
  }
  .card:first-child {
    grid-area: node;
    background: linear-gradient(35deg, ${({ theme }) => theme.gradient_6} 0%, ${({ theme }) => theme.gradient_5} 100%);
  }
  .card:nth-child(2){
    grid-area: mongoFire;
    background-color: ${({ theme }) => theme.bg_card_2};
  }
  .card:nth-child(3){
    grid-area: git;
    background-color: ${({ theme }) => theme.gradient_5};
  }

  @media (max-width: 1300px) {
    grid-template-columns: 1.7fr 1fr;    
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1.5fr 1fr;
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
    .card:nth-child(2){
      flex-direction: row;
    }
  }
  @media (max-width: 500px) {
    margin: 15px 0;
    gap: 15px;    
    .card:nth-child(2){
      flex-direction: column;
    }
  }
`