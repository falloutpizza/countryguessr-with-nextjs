export default function Score({
  totalScore,
  curScore,
  guessed,
}: {
  totalScore: number;
  curScore: number;
  guessed: string;
}) {
  if (guessed !== "correct" && guessed !== "false") {
    curScore = 0;
  }
  return (
    <div className="text-left absolute text-sm -z-1">
      <h3 className="font-semibold">score: {totalScore}</h3>
      <p
        className={
          guessed === "false"
            ? "opacity-0 ml-13"
            : " ml-13 animate-fade-in opacity-0 mt-0"
        }
      >
        +{curScore}
      </p>
    </div>
  );
}
