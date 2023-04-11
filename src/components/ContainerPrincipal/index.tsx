import styled from "styled-components";

const StyledContainerPrincipal = styled.div`
  position: relative;
  width: 95%;
  max-width: 1300px;
  padding: 50px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 40px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bg_container};
  @media (max-width: 1400px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (max-width: 1000px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 800px) {
    padding: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export default function ContainerPrincipal({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledContainerPrincipal>{children}</StyledContainerPrincipal>;
}
