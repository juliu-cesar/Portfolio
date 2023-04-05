export default function ItemList({
  src,
  text,
  reverse = false,
}: {
  src: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <div className={`py-3 flex ${reverse? "flex-row-reverse": "flex-row"} gap-3 items-center`}>
      <img src={src} className="w-14 max-[850px]:w-12" />{" "}
      <p className="text-2xl font-normal max-[850px]:text-xl">{text}</p>
    </div>
  );
}
