import { StyledTech_3 } from "./components/StyledTech_3";
import TechPage from "../../../../json/TechPage.json";
import IconAndText from "../TPIconAndText";
import Text from "../TPText";
import HTMLReactParser from "html-react-parser";
import CardTP from "../TPCard";

type techInfo = {
  name: string;
  text: string;
  svg: string;
};
export default function Tech_3() {
  const techList = ["Node", "Git", "MongoDB", "Firebase"];

  function getTech(name: string): techInfo {
    return TechPage[name as keyof typeof TechPage];
  }
  return (
    <StyledTech_3>
      <CardTP>
        <IconAndText>
          <div className="align_center">
            {HTMLReactParser(getTech(techList[0]).svg)}
          </div>
          <h3>{getTech(techList[0]).name}</h3>
        </IconAndText>
        <Text>{getTech(techList[0]).text}</Text>
      </CardTP>

      <CardTP>
        <div className="mongo flex_col">
          <IconAndText>
            <div className="align_center">
              {HTMLReactParser(getTech(techList[2]).svg)}
            </div>
            <h3>{getTech(techList[2]).name}</h3>
          </IconAndText>
          <Text>{getTech(techList[2]).text}</Text>
        </div>
        <div className="firebase flex_col">
          <IconAndText>
            <div className="align_center">
              {HTMLReactParser(getTech(techList[3]).svg)}
            </div>
            <h3>{getTech(techList[3]).name}</h3>
          </IconAndText>
          <Text>{getTech(techList[3]).text}</Text>
        </div>
      </CardTP>

      <CardTP>
        <IconAndText>
          <div className="align_center">
            {HTMLReactParser(getTech(techList[1]).svg)}
          </div>
          <h3>{getTech(techList[1]).name}</h3>
        </IconAndText>
        <Text>{getTech(techList[1]).text}</Text>
      </CardTP>
    </StyledTech_3>
  );
}
