import ToggleTheme from "@/hooks/ToggleTheme";
import ContainerPrincipal from "../ContainerPrincipal";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import TechPrincipal from "./components/TechPrincipal";
import { StyledTechnologiesPage } from "./components/StyledTechnologiesPage";

export default function TechnologiesPage() {
  return (
    <StyledTechnologiesPage>
      <ToggleTheme />
      <ContainerPrincipal>
        <header>
          <Link href={""} className="align_center">
            {" "}
            <ChevronLeft width={48} /> <p>Voltar</p>
          </Link>
          <div>
            <h2>Principais tecnologias</h2>
          </div>
        </header>
        <TechPrincipal />
        <div className="frame_dragDrop"></div>
        <div className="frame_grid2"></div>
        <div className="frame_grid3"></div>
      </ContainerPrincipal>

      <span className="Shape1">
        <img src="img/svg/tech_Shape1.svg" />
      </span>
      <span className="Shape2">
        <img src="img/svg/tech_Shape2.svg" />
      </span>
      <span className="Shape3">
        <img src="img/svg/tech_Shape3.svg" />
      </span>
    </StyledTechnologiesPage>
  );
}
