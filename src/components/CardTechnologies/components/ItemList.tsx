export default function ItemList({ src, text }: { src: string; text: string }) {
  return (
    <div className="w-[200px] flex flex-row gap-5 items-center">
      <img src={src} className="w-14"/> <p className="text-2xl font-normal">{text}</p>
    </div>
  );
}
