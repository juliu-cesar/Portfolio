interface Props {
  width: number;
  colorPrincipal?: boolean;
  src: string;
  alt: string;
  title: string;
  text: string;
  linkGitHub: string;
  linkSite: string;
}
export default function FrameWebSite({
  width,
  colorPrincipal = false,
  src,
  alt,
  title,
  text,
  linkGitHub,
  linkSite,
}: Props) {
  
  return (
    <div
      className={`w-[${width}%] p-5 flex flex-col justify-around gap-2 
      ${
        colorPrincipal
          ? "bg-[--color1]"
          :`bg-gradient-to-bl from-[#9595959f] to-[#51515171]`
          
      } rounded-xl backdrop-blur-xl`}
    >
      <div className="w-full h-[300px] imgFlex overflow-hidden rounded-lg">
        <img src={src} alt={alt} className="h-full rounded-lg" />
      </div>
      <div className="p-1">
        <h4 className="text-xl font-medium leading-[26px]">{title}</h4>
        <p className="text-base font-light">{text}</p>
      </div>
      <div className="Dflex flex-wrap gap-4">
        <a
          href={linkGitHub}
          target="_blank"
          className="w-[150px] h-10 p-2 Dflex gap-2 bg-black rounded-full hover_outline outline-white"
        >
          <img src="img/svg/github.svg" alt="ícone GitHub" className="w-7" />{" "}
          Repositório
        </a>
        <a
          href={linkSite}
          target="_blank"
          className="w-[150px] h-10 p-3 Dflex gap-2 bg-white text-black rounded-full hover_outline outline-black"
        >
          Ir para o site{" "}
          <img
            src="img/svg/link-out.svg"
            alt="ícone de link para ir para outro site."
            className="w-5"
          />
        </a>
      </div>
    </div>
  );
}
