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
                <a href="#"> About</a>
                <a href="#"> Features</a>
                <a href="#"> Customers</a>
                <a href="#"> Updates</a>
                <a href="#"> Help</a>
                <button className="bg-black text-white py-2 rounded-full px-4  font-medium inline-flex items-center justify-center tracking-tight">Get for free</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
