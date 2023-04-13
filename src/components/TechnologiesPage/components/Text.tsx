import styled from "styled-components";

const StyledText = styled.p`
  height: 100%;
  margin-left: 25px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 300;
  line-height: 20px;
  @media (max-width: 1000px) {
    margin-left: 20px;
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 800px) {
    margin-left: 15px;
    font-size: 14px;
    line-height: 18px;
  }
  @media (max-width: 700px) {
    margin-left: 10px;
    font-size: 14px;
    line-height: 18px;
  }
  @media (max-width: 500px) {
    margin-left: 5px;
    font-size: 13px;
    line-height: 16px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export default function Text({ children }: { children: React.ReactNode }) {
  return <StyledText>{children}</StyledText>;
}
