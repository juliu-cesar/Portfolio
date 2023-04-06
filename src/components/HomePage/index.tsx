import CardPrincipal from "../CardPrincipal";
import CardSites from "../CardSites";
import CardTechnologies from "../CardTechnologies";
import { StyledHomePage } from "./components/StyledHomePage";

export default function HomePage() {
  return (
    <StyledHomePage>
      <div className="container_home">
          <div className="frame_home">
            <CardPrincipal />
            <CardTechnologies />
            {/* <CardSites /> */}
          </div>

        <span className="Shape1">
          <img src="img/svg/shape1.svg" />
        </span>
        <span className="Shape2">
          <img src="img/svg/shape2.svg" />
        </span>
      </div>
    </StyledHomePage>
  );
}
