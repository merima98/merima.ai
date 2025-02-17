import Link from "@/components/ui/Link";

const Header = () => {
  return (
    <div className="flex justify-between p-2 border-b-2 border-b-gray-800">
      <h1 className="font-semibold text-white">merima.ai</h1>
      <div>
        <Link>Contact Me</Link>
      </div>
    </div>
  );
};

export default Header;
