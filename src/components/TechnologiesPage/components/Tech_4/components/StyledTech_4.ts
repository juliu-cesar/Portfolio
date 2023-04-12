import styled from "styled-components";

export const StyledTech_4 = styled.div`
  width: 100%;
  margin: 30px 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 30px;


  .card:first-child {
    background: linear-gradient(35deg, ${({ theme }) => theme.gradient_6} 0%, ${({ theme }) => theme.gradient_5} 100%);
  }
  .card:nth-child(3){
    background: linear-gradient(140deg, ${({ theme }) => theme.gradient_5} 0%, ${({ theme }) => theme.gradient_6} 100%);
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
    .card{
      padding: 15px;
    }
  }
  @media (max-width: 900px) {
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  }
  @media (max-width: 800px) {
    margin: 20px 0;
    gap: 20px;
  }
`;
