import { StyledTech_4 } from "./components/StyledTech_4";
import TechPage from "../../../../json/TechPage.json";
import HTMLReactParser from "html-react-parser";
import IconAndText from "../TPIconAndText";
import Text from "../TPText";
import CardTP from "../TPCard";

export default function Tech_4() {
  const techList = ["Bootstrap", "jQuery", "Redux"];

  return (
    <StyledTech_4>
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
    </StyledTech_4>
  );
}
