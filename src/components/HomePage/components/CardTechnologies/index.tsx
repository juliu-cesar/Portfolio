import HTMLReactParser from "html-react-parser";
import { ArrowBigRight, ChevronRight, Expand } from "lucide-react";
import Link from "next/link";
import TechnologiesList from "../../../../json/TechnologiesList.json";
import { StyledCardTechnologies } from "./components/StyledCardTechnologies";

export default function CardTechnologies() {
  const allTech = ["React", "TypeScript", "NextJS", "Java", "MySql", "SpringBoot"];

  return (
    <StyledCardTechnologies>
      <Link href={"tecnologias"}>
        <div className="container_cardTechnologies">
          <h2 className="titleTechnologies">
            Tecnologias
            <ChevronRight width={48} />
            </h2>
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
          </div>
        </div>
      </Link>
    </StyledCardTechnologies>
  );
}
