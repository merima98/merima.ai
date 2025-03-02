import NextImage from "next/image";

import weAreDevelopers from "../../public/weAreDevelopers.jpg";
const Conference = () => {
  return (
    <div className="relative w-full h-80">
      <NextImage
        src={weAreDevelopers}
        alt="Conference image"
        className="rounded-lg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex  rounded-lg">
        <p className="text-white text-3xl font-bold p-4">
          Me at We are Developers 2024 Berlin
        </p>
      </div>
    </div>
  );
};

export default Conference;
