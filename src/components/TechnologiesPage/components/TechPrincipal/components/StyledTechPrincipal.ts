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
    backdrop-filter: blur(20px);
    transition: color 0.2s;
  }
  .card:first-child {
    background-color: ${({ theme }) => theme.color1};
  }
  .card:nth-child(2){
    background: linear-gradient(55deg, ${({ theme }) => theme.gradient_5} 0%, ${({ theme }) => theme.gradient_4} 100%);
  }
  .card:nth-child(3){
    background-color: ${({ theme }) => theme.bg_card_2};
  }
  .card:nth-child(4){
    background: linear-gradient(55deg, ${({ theme }) => theme.bg_card_3} 0%, ${({ theme }) => theme.gradient_5} 100%);
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
