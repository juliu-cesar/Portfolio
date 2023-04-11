import { StyledTechPrincipal } from "./components/StyledTechPrincipal";
import TechPage from "../../../../json/TechPage.json";
import HTMLReactParser from "html-react-parser";

export default function TechPrincipal() {
  const techList = ["React", "TypeScript", "NextJS", "StyledComponents"];

  return (
    <StyledTechPrincipal>
      {techList.map((name, index) => {
        let tech = TechPage[name as keyof typeof TechPage];
        return (
          <div className="card" key={index}>
            <div className="title flex_row">
              <div className="frame_img align_center">{HTMLReactParser(tech.svg)}</div>
              <h3>{tech.name}</h3>
            </div>
            <p className="text">{tech.text}</p>
          </div>
        );
      })}
    </StyledTechPrincipal>
  );
}
