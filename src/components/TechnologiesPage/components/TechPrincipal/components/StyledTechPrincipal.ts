import styled from "styled-components";

export const StyledTechPrincipal = styled.div`
  width: 100%;
  margin: 30px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 30px;

  .card{
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bg_card_2};
    backdrop-filter: blur(20px);
  }
  .title{
    gap: 20px;
    .frame_img{
      width: 60px;
      height: 60px;
      padding: 7px;
      border-radius: 10px;
      background-color: white;
      svg{
        width: 100%;
      }
      img{
        width: 100%;
      }
    }
    h3{
      font-size: 35px;
      font-weight: 500;
      line-height: 30px;
    }
  }
  .text{
    height: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 200;
    line-height: 20px;

  }
`