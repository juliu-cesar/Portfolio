import styled from "styled-components";

export const StyledTechTrio = styled.div`
  width: 100%;
  margin: 30px 0;

  display: grid;
  grid-template-areas: 
  "javascript javascript"
  "html css"
  ;
  align-items: center;
  gap: 30px;
  .card:first-child {
    grid-area: javascript;
  }
  .card:nth-child(2){
    grid-area: html;
  }
  .card:nth-child(3){
    grid-area: css;
  }

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
  @media (max-width: 1000px) {
    margin: 25px 0;
    gap: 25px;
  }
  @media (max-width: 800px) {
    margin: 20px 0;
    gap: 20px;
  }
`;
