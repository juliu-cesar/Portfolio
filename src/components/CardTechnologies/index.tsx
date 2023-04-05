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
  { text: "Tailwind", src: "img/svg/techs/tailwindcss.svg" },
  { text: "Bootstrap", src: "img/svg/techs/bootstrap.svg" },
  { text: "Jquery", src: "img/svg/techs/jquery.svg" },
  { text: "Redux", src: "img/svg/techs/redux.svg" },
];

export default function CardTechnologies() {
  const [showAll, setShowAll] = useState<string>("30%");

  function show() {
    const card = document.querySelector(".card_technologies") as HTMLElement
    
    setShowAll(showAll == "30%" ? "70%" : "30%");
    
    window.addEventListener("click", (e)=>{
      if(card.contains(e.target as Node | null))return
      setShowAll("30%")
    })
  }
  return (
    <div className={`card_technologies transitionAll static md:absolute w-[${showAll}] max-[768px]:w-3/4 max-[640px]:w-full min-w-[300px] h-[600px] md:h-[650px] right-2 p-8 max-[500px]:p-4 py-8 m-auto overflow-hidden bg-gradient-to-bl from-[#a9a9a9d5] to-[#737373bf] backdrop-blur-sm rounded-xl`}>
      <h2 className="text-4xl mb-4">Tecnologias</h2>
      <div className="List w-full h-[500px] overflow-x-auto min-[500px]:overflow-x-hidden">
        <div className="md:min-w-[480px] max-[500px]:min-w-[450px] h-full flex flex-row justify-around items-center gap-2">
          <div className="Left ml-2">
            {allTech.map((tech, index) => {
              if(index>5)return
              return <ItemList src={tech.src} text={tech.text} key={index}/>;
            })}
          </div>
          <span className="w-[4px] h-[450px] bg-white rounded-sm"></span>
          <div className="Right">
            {allTech.map((tech, index) => {
              if(index<=5)return
              return <ItemList src={tech.src} text={tech.text} key={index} reverse={true}/>;
            })}
          </div>
        </div>
      </div>      
      <button onClick={show} className="hidden md:block">
        <img src="img/svg/dots.svg" className="w-12 mt-2 ml-16" />
      </button>
    </div>
  );
}
