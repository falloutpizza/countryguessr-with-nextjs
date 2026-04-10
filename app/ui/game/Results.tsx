export default function Results({ guess }: { guess: string }) {
  let message;
  if (guess === "correct") {
    message = "congrats, you guessed correctly!!";
  } else {
    message = `unfortunately, you did not guess correctly :( the correct answer was: ${guess}`;
  }
  return <h3>{message}</h3>;
}
