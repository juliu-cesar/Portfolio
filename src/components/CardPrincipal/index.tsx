export default function CardPrincipal() {
  return (
    <div className="md:w-[calc(100%-330px)] w-3/4 max-[640px]:w-full h-[600px] md:h-[650px] px-12 py-8 max-[500px]:px-8 max-[768px]:m-auto flex flex-col justify-between bg-gradient-to-bl from-[#b1b1b18b] to-[#51515171] backdrop-blur-xl rounded-xl">
      <div>
        <h1 className="w-4/5 text-5xl font-medium leading-[70px] max-[850px]:text-4xl">
          Bem vindo ao meu Portfólio,
        </h1>
        <h4 className="text-3xl font-light leading-[45px] max-[850px]:text-2xl">
          você ira encontrar alguns dos projetos que executei, e as tecnologias
          que tenho conhecimento.
        </h4>
      </div>
      <div>
        <h3 className="text-4xl font-light max-[850px]:text-3xl">
          Juliu Cesar Cardoso de Vargas
        </h3>
        <p className="mt-2 text-2xl font-extralight leading-6 max-[850px]:text-xl">
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
    </div>
  );
}
