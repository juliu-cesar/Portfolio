import CardPrincipal from "../CardPrincipal"
import CardSites from "../CardSites";
import CardTechnologies from "../CardTechnologies";

export default function HomePage() {
  return (
    <main className="text-white">
      <span className="absolute top-[-1px] left-[-1px] z-[-1]">
        <img src="img/svg/forma2.svg" className="2xl:w-[700px] w-[500px]" />
      </span>
      <div className="z-10 relative w-full lg:w-[1024px] p-2 py-7 m-auto flex flex-col md:flex-row gap-6">
        <CardPrincipal />
        <CardTechnologies />        
      </div>
      <CardSites />
    </main>
  );
}
