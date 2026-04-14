import Link from "next/link";

export default function EndMain({
  score,
  setEnded,
  setScore,
}: {
  score: number;
  setEnded: (e: boolean) => void;
  setScore: (s: number) => void;
}) {
  return (
    <div className="m-auto mt-20">
      <h1 className="text-3xl font-semibold">your final score was: {score}</h1>
      <h2 className="text-2xl">we hope you enjoyed playing!</h2>
      <button
        className="bg-orange-400 h-fit m-2 mt-4 px-2 py-1 border-1 border-black rounded-md cursor-pointer"
        onClick={() => {
          setEnded(false);
          setScore(0);
        }}
      >
        play again
      </button>
      <Link href="/gamemodes">
        <button className="bg-orange-400 h-fit m-2 mt-4 px-2 py-1 border-1 border-black rounded-md cursor-pointer">
          all gamemodes
        </button>
      </Link>
    </div>
  );
}
