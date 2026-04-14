import Timer from "./Timer";

export default function CountDown({
  setStarted,
}: {
  setStarted: (s: boolean) => void;
}) {
  return (
    <div className="mx-auto mt-30 text-center">
      <p>starting in:</p>
      <Timer duration={3000} setEnded={setStarted} setStarted={setStarted} />
    </div>
  );
}
