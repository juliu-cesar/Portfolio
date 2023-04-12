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
  .card:first-child {
    grid-area: node;
  }
  .card:nth-child(2){
    grid-area: mongoFire;
  }
  .card:nth-child(3){
    grid-area: git;
  }

  .card {
    width: 100%;
    /* height: 100%; */
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bg_card_2};
    backdrop-filter: blur(20px);
    transition: color 0.2s;
  }
  @media (max-width: 1300px) {
    grid-template-columns: 1.7fr 1fr;
    
  }
  @media (max-width: 1000px) {
    margin: 25px 0;
    grid-template-columns: 1.5fr 1fr;
    gap: 25px;
  }
  @media (max-width: 800px) {
    margin: 20px 0;
    gap: 20px;
  }
`