import { StyledTech_3 } from "./components/StyledTech_3";
import TechPage from "../../../../json/TechPage.json";
import IconAndText from "../IconAndText";
import Text from "../Text";
import HTMLReactParser from "html-react-parser";

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
      <div className={"card "}>
        <IconAndText>
          <div className="align_center">
            {HTMLReactParser(getTech(techList[0]).svg)}
          </div>
          <h3>{getTech(techList[0]).name}</h3>
        </IconAndText>
        <Text>{getTech(techList[0]).text}</Text>
      </div>

      <div className={"card colCard"}>
        <IconAndText>
          <div className="align_center">
            {HTMLReactParser(getTech(techList[2]).svg)}
          </div>
          <h3>{getTech(techList[2]).name}</h3>
        </IconAndText>
        <Text>{getTech(techList[2]).text}</Text>
        <IconAndText>
          <div className="align_center">
            {HTMLReactParser(getTech(techList[3]).svg)}
          </div>
          <h3>{getTech(techList[3]).name}</h3>
        </IconAndText>
        <Text>{getTech(techList[3]).text}</Text>
      </div>

      <div className={"card "}>
        <IconAndText>
          <div className="align_center">
            {HTMLReactParser(getTech(techList[1]).svg)}
          </div>
          <h3>{getTech(techList[1]).name}</h3>
        </IconAndText>
        <Text>{getTech(techList[1]).text}</Text>
      </div>
    </StyledTech_3>
  );
}
