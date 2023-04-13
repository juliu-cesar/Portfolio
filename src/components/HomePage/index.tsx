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
        <div className="Home">
          <div className="frame_principalAndTech">
            <CardPrincipal />
            <CardTechnologies />
          </div>
          <CardSites />
        </div>

        <span id="shape_1" className="Shape">
          <img src="img/svg/shape1.svg" />
        </span>
        <span id="shape_2" className="Shape">
          <img src="img/svg/shape2.svg" />
        </span>
        <span id="shape_3" className="Shape">
          <img src="img/svg/shape3.svg" />
        </span>
      </ContainerPrincipal>
    </StyledHomePage>
  );
}
