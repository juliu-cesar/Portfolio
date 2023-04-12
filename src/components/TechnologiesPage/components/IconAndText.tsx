import styled from "styled-components";

const StyledIconAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  div {
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    padding: 7px;
    border-radius: 10px;
    background-color: white;
    svg {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
  h3 {
    font-size: 35px;
    font-weight: 500;
    line-height: 30px;
  }
  @media (max-width: 1000px) {
    gap: 20px;
    div {
      width: 55px;
      min-width: 55px;
      height: 55px;
      min-height: 55px;
      padding: 6px;
    }
    h3 {
      font-size: 32px;
    }
  }
  @media (max-width: 800px) {
    gap: 20px;
    div {
      width: 50px;
      min-width: 50px;
      height: 50px;
      min-height: 50px;
    }
    h3 {
      font-size: 27px;
    }
  }
`;

export default function IconAndText({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledIconAndText>{children}</StyledIconAndText>;
}
