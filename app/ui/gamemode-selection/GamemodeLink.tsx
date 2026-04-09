export default function GamemodeLink({ gamemode }: { gamemode: string }) {
  return (
    <div className="w-8/10 cursor-pointer hover:bg-lime-300 m-auto border-b-2 border-black transition-all duration-200">
      <h2 className="text-xs sm:text-sm md:text-lg py-5">
        <a href={`/${gamemode.replaceAll(" ", "-")}`}>{gamemode}</a>
      </h2>
    </div>
  );
}
