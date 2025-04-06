import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";


export const LogoTicker = () => {
  return (
    <>
      <div className="py-8 md:pt-24 bg-white">
        <div className="container    ">
          <div className="section-heading pt-6">
            <h2 className="section-title my-5">Customers </h2>
            <p className="section-desc my-6">
              Join 1,200+ Sri Lankan Homes & Businesses Powered by Gamlath Solar{" "}
            </p>
          </div>
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div className="flex gap-14 flex-none">
              <Image src={acmeLogo} alt="Acme" className="logo-ticker-image " />
              <Image
                src={quantumLogo}
                alt="Acme"
                className="logo-ticker-image "
              />
              <Image src={echoLogo} alt="Acme" className="logo-ticker-image " />
              <Image
                src={celestialLogo}
                alt="Acme"
                className="logo-ticker-image "
              />
              <Image
                src={pulseLogo}
                alt="Acme"
                className="logo-ticker-image "
              />
              <Image src={apexLogo} alt="Acme" className="logo-ticker-image " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
