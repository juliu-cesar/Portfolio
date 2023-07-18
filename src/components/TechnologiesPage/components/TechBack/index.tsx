import HTMLReactParser from "html-react-parser";
import TechPage from "../../../../json/TechPage.json";
import CardTP from "../TPCard";
import IconAndText from "../TPIconAndText";
import Text from "../TPText";
import { StyledTechBack } from "./components/StyledTechBack";

export default function TechBack() {
  const techList = ["Java", "MySql", "SpringBoot"];

  return (
    <StyledTechBack>
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
    </StyledTechBack>
  );
}
