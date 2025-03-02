import NextImage from "next/image";

import sarajevo from "../../public/sarajevo.jpeg";

const WhereDoILive = () => {
  return (
    <div className="relative w-full h-80">
      <NextImage
        src={sarajevo}
        alt="Where do I live image"
        className="rounded-lg w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex  rounded-lg">
        <p className="text-white text-3xl font-bold p-4">Located in Sarajevo</p>
      </div>
    </div>
  );
};

export default WhereDoILive;
