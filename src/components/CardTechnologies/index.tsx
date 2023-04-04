import { useState } from "react";
import ItemList from "./components/ItemList";

const allTech = [
  { text: "React", src: "img/svg/techs/react.svg" },
  { text: "TypeScript", src: "img/svg/techs/TypeScript.svg" },
  { text: "HTML5", src: "img/svg/techs/html5.svg" },
  { text: "CSS3", src: "img/svg/techs/css3.svg" },
  { text: "NextJS", src: "img/svg/techs/nextjs.svg" },
  { text: "Node", src: "img/svg/techs/nodejs.svg" },
  { text: "Git", src: "img/svg/techs/git.svg" },
  { text: "TailwindCSS", src: "img/svg/techs/tailwindcss.svg" },
  { text: "Bootstrap", src: "img/svg/techs/bootstrap.svg" },
  { text: "Jquery", src: "img/svg/techs/jquery.svg" },
  { text: "Redux", src: "img/svg/techs/redux.svg" },
];

export default function CardTechnologies() {
  const [showAll, setShowAll] = useState<number>(30);

  function show() {
    const card = document.querySelector(".card_technologies") as HTMLElement
    
    card.style.width = showAll == 30 ? "70%" : "30%"
    setShowAll(showAll == 30 ? 70 : 30);
    
    window.addEventListener("click", (e)=>{
      if(card.contains(e.target as Node | null))return
      card.style.width = "30%"
      setShowAll(30)
    })
  }
  return (
    <div className={`card_technologies transitionAll absolute min-w-[300px] h-[650px] right-2 p-8 overflow-y-hidden bg-gradient-to-bl from-[#a9a9a9d5] to-[#737373bf] backdrop-blur-sm rounded-xl `}>
      <h2 className="text-4xl">Tecnologias</h2>
      <div className="List h-[500px] overflow-hidden mt-6 ml-4 flex flex-col flex-wrap items-center gap-7 ">
        {allTech.map((tech, index) => {
          return <ItemList src={tech.src} text={tech.text} key={index}/>;
        })}
      </div>
      <button onClick={show}>
        <img src="img/svg/dots.svg" className="w-12 mt-2 ml-16" />
      </button>
    </div>
  );
}
