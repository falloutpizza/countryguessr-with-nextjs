import Image from "next/image";

export default function CountryImage({
  src,
  blur,
  guessed,
}: {
  src: string;
  blur?: number;
  guessed: string;
}) {
  let blurFilter: string;
  switch (blur) {
    case 100:
      blurFilter = "blur-md";
      break;
    case 80:
      blurFilter = "blur-sm";
      break;
    case 60:
      blurFilter = "blur-xs";
      break;
    default:
      if (blur) {
        blurFilter = "blur-md";
      } else {
        blurFilter = "";
      }
  }

  if (guessed !== "false") {
    blurFilter = "";
  }

  return (
    <Image
      src={src}
      width={400}
      height={300}
      objectFit="contain"
      className={`${blurFilter} m-auto mt-2 relative -z-1`}
      alt="country silhouette"
    />
  );
}
