import ToggleTheme from "@/hooks/ToggleTheme";
import ContainerPrincipal from "../ContainerPrincipal";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import TechPrincipal from "./components/TechPrincipal";
import { StyledTechnologiesPage } from "./components/StyledTechnologiesPage";
import TechTrio from "./components/TechTrio";

export default function TechnologiesPage() {
  return (
    <StyledTechnologiesPage>
      <ToggleTheme />
      <ContainerPrincipal>
        <div className="frame_principal">
          <header>
            <Link href={"/"} className="align_center">
              {" "}
              <ChevronLeft width={48} /> <p>Voltar</p>
            </Link>
            <div>
              <h2>Principais tecnologias</h2>
            </div>
          </header>
          <TechPrincipal />
          <TechTrio />
          <div className="frame_grid2"></div>
          <div className="frame_grid3"></div>
        </div>

      <span id="tech_shape_1" className="Shape">
        <img src="img/svg/tech_Shape1.svg" />
      </span>
      <span id="tech_shape_2" className="Shape">
        <img src="img/svg/tech_Shape2.svg" />
      </span>
      <span id="tech_shape_3" className="Shape">
        <img src="img/svg/tech_Shape3.svg" />
      </span>
      </ContainerPrincipal>
    </StyledTechnologiesPage>
  );
}
