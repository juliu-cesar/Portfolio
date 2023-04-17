<div align="center">

<img src="https://user-images.githubusercontent.com/121033909/232160198-e127d984-721f-4a0d-bac3-3863b81bc037.png" height="500"/>

</div>

## Design

<img src="https://user-images.githubusercontent.com/121033909/232162538-68ecdab5-6984-4973-99b5-ddab88d62bb5.png" height="150" align="right" />

Utilizei alguns sites de exemplo para criar um design onde cada card do site tivesse a aparência de um vidro fosco, e a imagem de fundo ficasse desfocada. Utilizei o Figma para fazer o layout base, e também as cores para o efeito de vidro, porem apenas durante a execução do projeto que pude fazer alguns ajustes que tornaram o resultado mais satisfatório.

## Tecnologias utilizadas

<ul list-style="none">

  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="17" /> React</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="17" /> TypeScript</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/218092081-8feb03b4-7444-4018-a550-e704a77bc53f.svg" height="17" /> Next</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/218092677-03759c36-3450-4cdb-be27-24e892913862.png" height="17"/> Styled Components</li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="17"/> Figma</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/232154892-371a4d9b-5dfe-4eee-a71c-323dec4fffe4.png" height="17"/> Framer motion</li>
  <li><img src="https://user-images.githubusercontent.com/121033909/232154904-8fc1bf29-f0ef-4a65-b7a6-42a1fb27f6d7.png" height="17"/> Lucide</li>

</ul>

Por padrão utilizo o **TypeScript** como linguagem principal. Apesar deste projeto não possuir uma complexidade de dados tão grande, e poucos deles trafegando entre arquivos, ainda assim muitos componentes foram construídos com informações vindo de objetos json, tornando o Typescript valido de ser utilizado. Com uma linguagem extremamente *tipada*, ele evita pequenos enganos com os campos de um objeto e impedi substituição de dados por um tipo diferente.

___

<img src="https://user-images.githubusercontent.com/121033909/232574244-ff907f65-87dd-435c-8366-8f7c54d34ffc.png" height="150" align="right" />

O **React** dispensa apresentações, uma das bibliotecas mais utilizadas para desenvolvimento web, sendo alguns dos principais motivos, o virtual DOM, que evita a renderização de toda a pagina a cada pequena atualização, a criação de toda a estrutura da pagina em componentes reutilizáveis e encapsulados, além da performance da aplicação. Poderia sitar também outra vantagem implícita, que é a disponibilidade de conteúdo e soluções para problemas devido a sua popularidade, e para quem esta começando(e até mesmo quem já é mais avançado) é um grande diferencial.

___

O **NextJS** é uma excelente ferramenta para auxiliar na construção de um site, tendo em vista que atualmente o próprio time do React recomenda a utilização de um framework junto de sua biblioteca. Algumas das soluções que o Next traz são, paginas renderizadas do lado do servidor (**SSR**), geração de paginas estáticas, facilidade de implementação de rotas, entre outras.

___

Pessoalmente um dos principais motivos para utilizar o **Styled Components** é, poder estilizar um elemento no escopo dele próprio, ou seja, o CSS criado sera implementado somente no elemento e em seus filhos. Isso evita alguns dos problemas clássicos de CSS, como colisão de estilos, conflito de classes e estilizações sendo aplicadas em outros elementos. Além desses motivos, temos alguns outros pontos fortes, como os componentes reutilizáveis, suporte a temas e a server-side rendering, o que é de se levar em conta em um projeto junto com NextJS.

___

O **Framer motion** é uma biblioteca que tem o intuito de facilitar a criação de elementos animados, e quem já tentou criar uma animação mais complexa utilizando *key frames* sabe como esse processo pode ser custoso. Neste projeto a sua utilização foi para criar uma animação de transição de pagina.

<div align="center">
<img src="https://user-images.githubusercontent.com/121033909/232593589-00e9304d-765b-41fa-a8cb-402b3ee56faa.gif" height="200"/>
</div>

___

O **Lucide** é uma biblioteca de código aberto que adiciona centenas de ícones que são facilmente implementados nos componentes React e já são no formato svg. Cada ícone é um elemento que pode ser importado dentro do arquivo e adicionado a tag `<Expand />`.

## Tema escuro

<div align="center">

<img src="https://user-images.githubusercontent.com/121033909/232614003-bc0c9bf4-9542-4831-acc1-6b22dc80563b.png" height="500"/>

</div>

## Mobile

<div align="center">

<img src="https://user-images.githubusercontent.com/121033909/232614018-9eb8ccea-a23b-4398-a020-b2caf3a302d9.png" height="500"/>

</div>

## Comandos utilizados para criar o projeto

Na documentação do Next na parte do TypeScript, podemos encontrar o comando para criar uma projeto com React, Next e TypeScript disponibilizado pela Vercel.

```bash
npx create-next-app@latest --ts
```

#### Comandos para inciar o projeto

```bash
npm run dev
```
