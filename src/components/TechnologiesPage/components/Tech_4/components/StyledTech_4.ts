import styled from "styled-components";

export const StyledTech_4 = styled.div`
  width: 100%;
  margin: 30px 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 30px;
  .card:first-child {
    background: linear-gradient(
      35deg,
      ${({ theme }) => theme.gradient_6} 0%,
      ${({ theme }) => theme.gradient_5} 100%
    );
  }
  .card:nth-child(2) {
    background-color: ${({ theme }) => theme.gradient_2};
  }
  .card:nth-child(3) {
    background: linear-gradient(
      140deg,
      ${({ theme }) => theme.gradient_5} 0%,
      ${({ theme }) => theme.gradient_6} 100%
    );
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  @media (max-width: 800px) {
    margin: 25px 0;
    gap: 25px;
  }
  @media (max-width: 700px) {
    margin: 20px 0;
    gap: 20px;
  }
  @media (max-width: 500px) {
    margin: 15px 0;
    gap: 15px;
  }
`;
