import RightArrow from "../globals/icons/RightArrow";
import Link from "next/link";

export default function GamemodeLink({
  gamemode,
  desc,
}: {
  gamemode: string;
  desc: string;
}) {
  return (
    <Link href={`/gamemodes/${gamemode.replaceAll(" ", "-")}`}>
      <div className="w-8/10 cursor-pointer hover:bg-lime-300 m-auto py-px border-b-2 border-black transition-all duration-200 text-left">
        <div className="flex justify-between">
          <h2 className="text-xs sm:text-sm md:text-lg pt-5">{gamemode}</h2>
          <RightArrow size="size-7 mt-5" />
        </div>
        <p className="text-[0.6rem] sm:text-xs md:text-sm px-2 mb-2 bg-lime-300 inline">
          {desc}
        </p>
      </div>
    </Link>
  );
}
