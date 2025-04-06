import Image from "next/image";
import Logo from "../assets/logosaas.png";
import MenuIcon from "../assets/menu.svg";
export const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 backdrop-blur-sm z-20">
        <div className="p-5 ">
          <div className=" ">
            <div className="flex justify-between items-center">
              <Image
                src={Logo}
                alt="Logo"
                width={40}
                height={40}
                className=""
              />
              <MenuIcon className="h-8 w-8 md:hidden" />

              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <a href="#about">About</a>
                <a href="#customers">Customers</a>
                <a href="#features">Features</a>
                <a href="#gallery">Gallery</a>
                <a href="#pricing">Pricing</a>
                <a href="#testimonials">Testimonials</a>
              
                <a href="#cta"> <button className="bg-black text-white py-2 rounded-full px-4  font-medium inline-flex items-center justify-center tracking-tight">
                  Get for free
                </button></a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
