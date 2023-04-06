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
  { text: "Bootstrap", src: "img/svg/techs/bootstrap.svg" },
  { text: "Jquery", src: "img/svg/techs/jquery.svg" },
  { text: "Redux", src: "img/svg/techs/redux.svg" },
];

export default function CardTechnologies() {
  const [showAll, setShowAll] = useState<string>("30%");

  function show() {
    const card = document.querySelector(".card_technologies") as HTMLElement
    
    setShowAll("70%");    
    window.addEventListener("click", (e)=>{
      if(card.contains(e.target as Node | null))return
      setShowAll("30%")
    })
  }
  return (
    <div>
      <h2 className="">Tecnologias</h2>
      <div className="">
        <div className="">
          <div className="">
            {allTech.map((tech, index) => {
              if(index>5)return
              return <ItemList src={tech.src} text={tech.text} key={index}/>;
            })}
          </div>
          <span className=""></span>
          <div className="Right">
            {allTech.map((tech, index) => {
              if(index<=5)return
              return <ItemList src={tech.src} text={tech.text} key={index} reverse={true}/>;
            })}
          </div>
        </div>
      </div>      
      <button onClick={show} className="">
        <img src="img/svg/dots.svg" className="" />
      </button>
    </div>
  );
}
