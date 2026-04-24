export default function Rank({ player, rank }: { player: any; rank: number }) {
  let color: string = "px-2";
  if (rank === 1) {
    color = "bg-amber-400 border-1 border-black rounded-full px-2";
  } else if (rank === 2) {
    color = "bg-slate-300 border-1 border-black rounded-full px-2";
  } else if (rank === 3) {
    color = "bg-yellow-700 border-1 border-black rounded-full px-2";
  }
  return (
    <div className="w-8/10 hover:bg-lime-300 m-auto py-px border-b-2 border-black transition-all duration-200 text-left">
      <div className="flex justify-between px-3 text-2xl mt-5 mb-2">
        <h2>
          <span className={color}>{rank}</span> {player.username}
        </h2>
        <h2>{player.compHs}</h2>
      </div>
    </div>
  );
}
