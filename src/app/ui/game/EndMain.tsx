import Link from "next/link";

export default function EndMain({
  score,
  gameMode,
  setEnded,
  setScore,
  user,
}: {
  gameMode: string;
  score: number;
  setEnded: (e: boolean) => void;
  setScore: (s: number) => void;
  user: any;
}) {
  //check if new score > high score
  let text: string = "";
  if (user) {
    let oldHs;
    if (gameMode == "ogHs" || gameMode == "hardHs") {
      oldHs = user[gameMode];
      if (score > oldHs) {
        text = "congrats, you beat your old high score!!";
        async function updateScore() {
          const response = await fetch("/api/users/updatescore", {
            method: "POST",
            body: JSON.stringify({ score, gameMode, userId: user.id }),
          });
          const data = await response.json();
          console.log(data); // REMOVE
        }
        updateScore();
      } else {
        text = "sadly, you could not beat your old high score :(";
      }
    }
  } else {
    text = `your final score was: ${score}`;
  }

  return (
    <div className="m-auto mt-20">
      <h1 className="text-3xl font-semibold">{text}</h1>
      {user && <h2 className="text-3xl">your final score was: {score}</h2>}
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
