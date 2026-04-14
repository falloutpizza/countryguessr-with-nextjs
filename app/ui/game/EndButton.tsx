import fetchRandomCountry from "@/app/utils/fetchRandomCountry";

export default function EndButton({
  setEnded,
  countries,
  setCountry,
}: {
  setEnded: (e: boolean) => void;
  countries: any;
  setCountry: (c: object) => void;
}) {
  return (
    <button
      onClick={() => {
        setEnded(true);
        setCountry(fetchRandomCountry(countries));
      }}
      className="bg-orange-400 h-fit m-2 mt-4 px-2 py-1 border-1 border-black rounded-md cursor-pointer"
    >
      end game
    </button>
  );
}
