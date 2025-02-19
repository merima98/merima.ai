import { Mail, ArrowUpRight } from "react-feather";

const GetInTouch = () => {
  return (
    <div className="flex w-full p-5 border-2 border-gray-800 rounded-lg text-white flex-col gap-4">
      <div className="flex gap-2">
        <span className="text-xl font-semibold">Get in touch</span>
        <Mail />
      </div>
      <span className="mb-5">
        Feel free to contact me via email for any inquiries or collaboration
        opportunities.
      </span>
      <a
        className="flex w-fit bg-yellow-50 text-black p-2 rounded-sm font-semibold gap-2 justify-center align-center"
        href="mailto:merimaceranic98@gmail.com?subject=Hello"
      >
        <span>Contact Me</span>
        <ArrowUpRight />
      </a>
    </div>
  );
};

export default GetInTouch;
