import { Instagram, Linkedin } from "react-feather";

import SocialNetworks from "@/components/SocialNetworks";
import WhoIAm from "@/components/WhoIAm";
import GetInTouch from "@/components/GetInTouch";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex gap-4 ">
        <WhoIAm />
        <SocialNetworks link="https://www.instagram.com/merii__lu/">
          <Instagram size={150} color="#ff1f56" />
        </SocialNetworks>
        <SocialNetworks link="https://www.linkedin.com/in/merima-ceranic/">
          <Linkedin size={150} color="#1549e6" />
        </SocialNetworks>
      </div>
      <div className="flex gap-4">
        <Experience />
        <GetInTouch />
      </div>
      <div className="flex">
        <div className="text-white">Where do I live</div>
        <div className="text-white">We are developers</div>
        <div className="text-white">Running</div>
      </div>
    </div>
  );
}
