import { StyledCardPrincipal } from "./components/StyledCardPrincipal";

export default function CardPrincipal() {
  return (
    <StyledCardPrincipal>
      <div className="container_cardPrincipal flex_col">
        <div className="Title_principal">
          <h1>
            Bem vindo ao meu Portfólio,
          </h1>
          <h3>
            você ira encontrar alguns dos projetos que executei, e as tecnologias
            que tenho conhecimento.
          </h3>
        </div>
        <div className="Name_principal">
          <h3>
            Juliu Cesar Cardoso de Vargas
          </h3>
          <p>
            Desenvolvedor Frontend, focado nas principais ferramentas do mercado
            para tornar as ideias em realidade.
          </p>
          <div className="Links_principal">
            <a
              href="https://github.com/juliu-cesar"
              target="_blank"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="Ícone GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/juliu-cesar/"
              target="_blank"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="Ícone LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </StyledCardPrincipal>
  );
}
