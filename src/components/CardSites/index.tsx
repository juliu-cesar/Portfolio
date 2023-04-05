import FrameWebSite from "./components/FrameWebSite";
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
    <div className="max-w-[1024px] p-2 m-auto flex flex-col md:flex-row justify-between gap-6">
      {webSites.map((site, index) => {
        return (
          <FrameWebSite
            width={site.width}
            colorPrincipal={site.colorPrincipal}
            src={site.src}
            alt={site.alt}
            title={site.title}
            text={site.text}
            linkGitHub={site.linkGitHub}
            linkSite={site.linkSite}
            key={index}
          />
        );
      })}
    </div>
  );
}
