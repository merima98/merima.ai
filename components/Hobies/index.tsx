import NextImage from "next/image";

import runningImage from "../../public/running.jpg";
const Hobies = () => {
  return (
    <div className="relative w-full h-80">
      <NextImage
        src={runningImage}
        alt="Running image"
        className="rounded-lg bg-green"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-red bg-opacity-50 flex  rounded-lg">
        <p className="text-white text-3xl font-bold p-4">My hobby is running</p>
      </div>
    </div>
  );
};

export default Hobies;
