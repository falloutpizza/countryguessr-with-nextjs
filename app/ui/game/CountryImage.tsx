import Image from "next/image";

export default function CountryImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      width={400}
      height={300}
      objectFit="contain"
      className=" m-auto mt-2"
      alt="country silhouette"
    />
  );
}
