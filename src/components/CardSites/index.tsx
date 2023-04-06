import { StyledCardSites } from "./components/StyledCardSites";
import { Github, ExternalLink } from "lucide-react";
import WebSites from "../../json/WebSites.json"

type TWeb = {
  src: string;
  alt: string;
  title: string;
  text: string;
  linkGitHub: string;
  linkSite: string;
};

export default function CardSites() {
  const webSites: TWeb[] = WebSites.webSites
  
  return (
    <StyledCardSites>
      <div className="container_cardSite">
        {webSites.map((site, index) => {
          return (
            <div className="card_site flex_col" key={index}>
              <div className="frame_img align_center">
                <img
                  src={site.src}
                  alt={site.alt}
                  style={{ maxWidth: "1000px" }}
                />
              </div>
              <div className="frame_text">
                <h4>{site.title}</h4>
                <p>{site.text}</p>
              </div>
              <div className="frame_links">
                <a href={site.linkGitHub} target="_blank" className="flex_row">
                  <Github color="white" width={20} /> Repositório
                </a>
                <a href={site.linkSite} target="_blank" className="flex_row">
                  Ir para o site <ExternalLink color="black" width={20} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </StyledCardSites>
  );
}
