export default function HomePage(){

  return(
    <main className="text-white">
      <span className="absolute top-[-1px] left-[-1px] z-[-1]">
        <img src="img/svg/forma2.svg" className="2xl:w-[700px] w-[500px]" />
      </span>
      <div className="lg:w-[1024px] w-full flex flex-row gap-6 m-auto py-7 z-10">
        <div className="w-full p-12 bg-gradient-to-bl from-[#b1b1b1b6] to-[#51515171] backdrop-blur-lg rounded-lg">
          <h1 className="w-4/5 text-5xl font-medium leading-[70px]">Bem vindo ao meu Portfólio,</h1>
          <h4 className="text-3xl font-light leading-[50px]">você ira encontrar alguns dos projetos que executei, e as tecnologias que tenho conhecimento.</h4>
          <h3>Juliu Cesar Cardoso de Vargas</h3>
          <p>Desenvolvedor Frontend, focado nas principais ferramentas do mercado para tornar as ideias em realidade.</p>
          <div className="flex gap-4">
            <a href="https://github.com/juliu-cesar" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Ícone GitHub" className="w-7"/>
            </a>
            <a href="https://www.linkedin.com/in/juliu-cesar/" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="Ícone LinkedIn" className="w-7"/>
            </a>
          </div>
        </div>
        <div className="bg-blue-400 w-1/3">
          <h2>Tecnologias</h2>
          <div><img src="" alt="" /> <p>React</p></div>
          <div><img src="" alt="" /> <p>TypeScript</p></div>
          <div><img src="" alt="" /> <p>HTML5</p></div>
        </div>
      </div>
    </main>
  )
}