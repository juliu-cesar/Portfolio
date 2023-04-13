import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeaderTechPage = styled.header`
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
  gap: 30px;
  transition: color 0.2s;
  a {
    height: 80px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.bg_card_1};
    color: ${({ theme }) => theme.text_color};
    backdrop-filter: blur(10px);
    svg {
      height: 50px;
      width: 45px;
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
    border-radius: 20px;
    background: linear-gradient(
      65deg,
      ${({ theme }) => theme.gradient_6} 0%,
      ${({ theme }) => theme.gradient_7} 65%,
      ${({ theme }) => theme.gradient_8} 100%
    );
    backdrop-filter: blur(15px);
    h2 {
      margin-left: 40px;
      margin-right: 5px;
      font-size: 40px;
      font-weight: 500;
      line-height: 35px;
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 4fr;
    a {
      p {
        font-size: 25px;
      }
    }
    div {
      h2 {
        font-size: 35px;
        font-weight: 400;
      }
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 3fr;
    gap: 25px;
    a {
      height: 75px;
      svg {
        height: 40px;
        width: 40px;
      }
    }
    div {
      height: 75px;
      h2 {
        margin-left: 40px;
        font-size: 30px;
        line-height: 30px;
      }
    }
  }
  @media (max-width: 700px) {
    gap: 20px;
    a {
      height: 70px;
      p {
        font-size: 22px;
      }
    }
    div {
      height: 70px;
      h2 {
        margin-left: 30px;
        font-size: 28px;
        line-height: 28px;
      }
    }
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    a {
      height: 60px;
      width: 100%;
      svg {
        height: 35px;
      }
      p {
        font-size: 20px;
      }
    }
    div {
      height: 75px;
      width: 100%;
      h2 {
        margin-left: 20px;
        font-size: 26px;
        line-height: 26px;
      }
    }
  }
`;

export default function HeaderTechPage() {
  return (
    <StyledHeaderTechPage>
      <Link href={"/"} className="align_center">
        {" "}
        <ChevronLeft width={48} /> <p>Voltar</p>
      </Link>
      <div>
        <h2>Principais tecnologias</h2>
      </div>
    </StyledHeaderTechPage>
  );
}
