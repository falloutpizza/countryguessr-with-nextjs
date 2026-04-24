export default function HighScore({
  gamemode,
  score,
  rank,
}: {
  gamemode: string;
  score: number;
  rank?: string;
}) {
  return (
    <div className="w-3/10 text-left border-l-2 border-black m-2 p-2 hover:bg-lime-300 transition-all duration-200">
      <h2 className="text-xl my-3">{gamemode}</h2>
      <h3>high score: {score}</h3>
      {rank && <h3>current rank: {rank}</h3>}
    </div>
  );
}
