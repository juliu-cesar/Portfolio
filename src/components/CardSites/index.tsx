import { StyledCardSites } from "./components/StyledCardSites";
import { Github, ExternalLink } from "lucide-react";

type TWeb = {
  width: number;
  src: string;
  alt: string;
  title: string;
  text: string;
  linkGitHub: string;
  linkSite: string;
};
const webSites = [
  {
    width: 60,
    colorPrincipal: true,
    src: "img/sites/gpu-store.png",
    alt: "Pagina inicial site Gpu Store",
    title: "Gpu Store",
    text: "E-commerce de placas de vídeo com carrinho de compras.",
    linkGitHub: "https://github.com/juliu-cesar/GPU-Store",
    linkSite: "https://gpu-store.vercel.app",
  },
  {
    width: 40,
    src: "img/sites/vscode-landing.png",
    alt: "Pagina inicial site VS Code landing Page",
    title: "Vs Code Landing Page",
    text: "Pagina de apresentação para a IDE Visual Studio Code.",
    linkGitHub: "https://github.com/juliu-cesar/VSCode-Landing-page",
    linkSite: "https://vs-code-landing-page.vercel.app",
  },
];

export default function CardSites() {
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
