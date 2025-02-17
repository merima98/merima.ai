import WhoIAm from "@/components/WhoIAm";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex gap-4 ">
        <WhoIAm />
        <div className="text-white w-full">LinkedIn info</div>
        <div className="text-white w-full">Instagram info</div>
      </div>
      <div className="flex">
        <div className="text-white">Education</div>
        <div className="text-white">Get in touch with me</div>
      </div>
      <div className="flex">
        <div className="text-white">Where do I live</div>
        <div className="text-white">We are developers</div>
        <div className="text-white">Running</div>
      </div>
    </div>
  );
}
