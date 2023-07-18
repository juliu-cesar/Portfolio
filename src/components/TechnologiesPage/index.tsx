import { StyledTechnologiesPage } from "./components/StyledTechnologiesPage";
import ToggleTheme from "@/hooks/ToggleTheme";
import ContainerPrincipal from "../ContainerPrincipal";
import HeaderTechPage from "./components/HeaderTechPage";
import TechPrincipal from "./components/TechPrincipal";
import TechTrio from "./components/TechTrio";
import Tech_3 from "./components/Tech_3";
import Tech_4 from "./components/Tech_4";
import PageTransition from "@/layout/PageTransition";
import TechBack from "./components/TechBack";

export default function TechnologiesPage() {
  return (
    <PageTransition initial={+100}>
      <StyledTechnologiesPage>
        <ToggleTheme />
        <ContainerPrincipal>
          <div className="frame_principal">
            <HeaderTechPage />
            <TechPrincipal />
            <TechBack />
            <TechTrio />
            <Tech_3 />
            <Tech_4 />
          </div>
          <span id="tech_shape_1" className="tech_shape">
            <img src="img/svg/tech_shape1.svg" />
          </span>
          <span id="tech_shape_2" className="tech_shape">
            <img src="img/svg/tech_shape2.svg" />
          </span>
          <span id="tech_shape_3" className="tech_shape">
            <img src="img/svg/tech_shape3.svg" />
          </span>
        </ContainerPrincipal>
      </StyledTechnologiesPage>
    </PageTransition>
  );
}
