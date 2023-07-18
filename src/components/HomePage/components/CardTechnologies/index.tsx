import HTMLReactParser from "html-react-parser";
import { Expand } from "lucide-react";
import Link from "next/link";
import TechnologiesList from "../../../../json/TechnologiesList.json";
import { StyledCardTechnologies } from "./components/StyledCardTechnologies";

export default function CardTechnologies() {
  const allTech = ["React", "TypeScript", "NextJS", "Java", "MySql", "SpringBoot"];

  return (
    <StyledCardTechnologies>
      <Link href={"tecnologias"}>
        <div className="container_cardTechnologies">
          <span className="expand_icon align_center">
            <Expand color="white"/>
          </span>
          <h2 className="titleTechnologies">Tecnologias</h2>
          <div className="frame_technologies flex_col">
            {allTech.map((name, index) => {
              let tech =
                TechnologiesList[name as keyof typeof TechnologiesList];
              return (
                <div className="techItem flex_row" key={index}>
                  {HTMLReactParser(tech.svg)}
                  <p className="">{tech.name}</p>
                </div>
              );
            })}
            <span className="dots">
              {HTMLReactParser(TechnologiesList.dots.svg)}
            </span>
          </div>
        </div>
      </Link>
    </StyledCardTechnologies>
  );
}
