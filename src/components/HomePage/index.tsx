import ToggleTheme from "@/hooks/ToggleTheme";
import { StyledHomePage } from "./components/StyledHomePage";
import ContainerPrincipal from "../ContainerPrincipal";
import CardPrincipal from "./components/CardPrincipal";
import CardTechnologies from "./components/CardTechnologies";
import CardSites from "./components/CardSites";

export default function HomePage() {
  return (
    <StyledHomePage> 
      <ToggleTheme />
      <ContainerPrincipal>
        <div className="frame_home">
          <CardPrincipal />
          <CardTechnologies />
          <CardSites />
        </div>

        <span className="Shape1">
          <img src="img/svg/shape1.svg" />
        </span>
        <span className="Shape2">
          <img src="img/svg/shape2.svg" />
        </span>
        <span className="Shape3">
          <img src="img/svg/shape3.svg" />
        </span>
      </ContainerPrincipal>
    </StyledHomePage>
  );
}
