import { Instagram, Linkedin } from "react-feather";

import SocialNetworks from "@/components/SocialNetworks";
import WhoIAm from "@/components/WhoIAm";
import GetInTouch from "@/components/GetInTouch";
import Experience from "@/components/Experience";
import WhereDoILive from "@/components/WhereDoILive";
import Conference from "@/components/Conference";
import Hobies from "@/components/Hobies";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-5 md:grid md:grid-rows-3 h-full">
      <div className="flex gap-4 flex-col md:flex-row">
        <WhoIAm />
        <SocialNetworks link="https://www.instagram.com/merii__lu/">
          <Instagram size={150} color="#ff1f56" />
        </SocialNetworks>
        <SocialNetworks link="https://www.linkedin.com/in/merima-ceranic/">
          <Linkedin size={150} color="#1549e6" />
        </SocialNetworks>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <Experience />
        <GetInTouch />
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <WhereDoILive />
        <Conference />
        <Hobies />
      </div>
    </div>
  );
}
