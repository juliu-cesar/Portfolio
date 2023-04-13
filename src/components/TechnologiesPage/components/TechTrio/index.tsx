import { StyledTechTrio } from "./components/StyledTechTrio";
import TechPage from "../../../../json/TechPage.json";
import HTMLReactParser from "html-react-parser";
import IconAndText from "../IconAndText";
import Text from "../Text";
import CardTP from "../CardTP";

export default function TechTrio() {
  const techList = ["JavaScript", "HTML5", "CSS3"];

  return (
    <StyledTechTrio>
      {techList.map((name, index) => {
        let tech = TechPage[name as keyof typeof TechPage];
        return (
          <CardTP key={index}>
            <IconAndText>
              <div className="align_center">{HTMLReactParser(tech.svg)}</div>
              <h3>{tech.name}</h3>
            </IconAndText>
            <Text>{tech.text}</Text>
          </CardTP>
        );
      })}
    </StyledTechTrio>
  );
}
