import CardPrincipal from "../CardPrincipal"
import CardTechnologies from "../CardTechnologies";

export default function HomePage() {
  return (
    <main className="text-white">
      <span className="absolute top-[-1px] left-[-1px] z-[-1]">
        <img src="img/svg/forma2.svg" className="2xl:w-[700px] w-[500px]" />
      </span>
      <div className="relative lg:w-[1024px] w-full flex flex-row gap-6 m-auto py-7 z-10">
        <CardPrincipal />
        <CardTechnologies />
      </div>
    </main>
  );
}
