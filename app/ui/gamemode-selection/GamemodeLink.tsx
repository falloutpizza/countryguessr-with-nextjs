import RightArrow from "../globals/icons/RightArrow";

export default function GamemodeLink({
  gamemode,
  desc,
}: {
  gamemode: string;
  desc: string;
}) {
  return (
    <div className="w-8/10 cursor-pointer hover:bg-lime-300 m-auto border-b-2 border-black transition-all duration-200 text-left">
      <div className="flex px-2 justify-between">
        <h2 className="text-xs sm:text-sm md:text-lg pt-5">
          <a href={`/${gamemode.replaceAll(" ", "-")}`}>{gamemode}</a>
        </h2>
        <RightArrow size="size-7 mt-5" />
      </div>
      <p className="text-[0.6rem] sm:text-xs md:text-sm ml-2 px-2 mb-2 bg-lime-300 inline">
        {desc}
      </p>
    </div>
  );
}
