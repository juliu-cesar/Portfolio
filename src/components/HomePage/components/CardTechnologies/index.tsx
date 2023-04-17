import HTMLReactParser from "html-react-parser";
import { StyledCardTechnologies } from "./components/StyledCardTechnologies";
import { Expand } from "lucide-react";
import TechnologiesList from "../../../../json/TechnologiesList.json";
import Link from "next/link";

export default function CardTechnologies() {
  const allTech = ["React", "TypeScript", "HTML5", "CSS3", "NextJS", "Node"];

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
