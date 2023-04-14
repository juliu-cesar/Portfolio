import { StyledCardPrincipal } from "./components/StyledCardPrincipal";
import CardPrincipalHome from "../../../../json/CardPrincipalHome.json";
import HTMLReactParser from "html-react-parser";

export default function CardPrincipal() {
  return (
    <StyledCardPrincipal>
      <div className="container_cardPrincipal flex_col">
        <div className="Title_principal">
          <h1>{CardPrincipalHome.title}</h1>
          <h3>{CardPrincipalHome.subTitle}</h3>
        </div>
        <div className="Name_principal">
          <h3>{CardPrincipalHome.name}</h3>
          <p>{CardPrincipalHome.text}</p>
          <div className="Links_principal">
            <a href="https://github.com/juliu-cesar" target="_blank">
              {HTMLReactParser(CardPrincipalHome.gitHub)}
            </a>
            <a href="https://www.linkedin.com/in/juliu-cesar/" target="_blank">
              {HTMLReactParser(CardPrincipalHome.linkedin)}
            </a>
          </div>
        </div>
      </div>
    </StyledCardPrincipal>
  );
}
