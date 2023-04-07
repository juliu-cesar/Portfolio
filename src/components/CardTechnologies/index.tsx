import HTMLReactParser from "html-react-parser";
import { StyledCardTechnologies } from "./components/StyledCardTechnologies";
import { Expand } from "lucide-react";
import TechnologiesList from "../../json/TechnologiesList.json"

export default function CardTechnologies() {
  const allTech = TechnologiesList.allTech;

  return (
    <StyledCardTechnologies>
      <div className="container_cardTechnologies">
      <span className="expand_icon align_center"><Expand color="white"></Expand></span>
        <h2>Tecnologias</h2>
        <div className="frame_tech flex_col">
          {allTech.map((tech, index) => {
            if (index > 5) return;
            return (
              <div className="item_tech flex_row" key={index}>
                {HTMLReactParser(tech.svg)}
                <p className="">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </StyledCardTechnologies>
  );
}
