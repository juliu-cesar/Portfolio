export default function CardPrincipal() {
  return (
    <div className="w-2/3 h-[650px] px-12 py-8 bg-gradient-to-bl from-[#b1b1b18b] to-[#51515171] backdrop-blur-xl rounded-xl">
      <h1 className="w-4/5 text-5xl font-medium leading-[70px]">
        Bem vindo ao meu Portfólio,
      </h1>
      <h4 className="text-3xl font-light leading-[45px]">
        você ira encontrar alguns dos projetos que executei, e as tecnologias
        que tenho conhecimento.
      </h4>
      <h3 className="mt-28 text-4xl font-light">
        Juliu Cesar Cardoso de Vargas
      </h3>
      <p className="mt-2 text-2xl font-extralight leading-6">
        Desenvolvedor Frontend, focado nas principais ferramentas do mercado
        para tornar as ideias em realidade.
      </p>
      <div className="mt-7 flex gap-4">
        <a
          href="https://github.com/juliu-cesar"
          target="_blank"
          className="bg-white p-2 rounded-full hover_outline"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Ícone GitHub"
            className="w-7"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/juliu-cesar/"
          target="_blank"
          className="bg-white p-2 rounded-full hover_outline"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="Ícone LinkedIn"
            className="w-7"
          />
        </a>
      </div>
    </div>
  );
}
