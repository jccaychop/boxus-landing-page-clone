import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="bg-space-cadet fixed w-full z-20 md:h-16">
      <div className="">
        <nav className="relative bg-transparent md:h-full m-0 mx-auto flex flex-col max-w-[73.125rem] text-white uppercase font-Roboto">
          <div
            className="bg-space-cadet md:hidden font-bold text-3xl cursor-pointer z-30"
            onClick={handleClick}
          >
            <p className="text-center leading-[1.625rem] py-4 px-0">menu</p>
          </div>

          <div
            className={`absolute top-14 w-full bg-space-cadet ease-in-out duration-700 ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >

            <ul className="bg-transparent md:h-full max-w-xs md:max-w-none w-full m-0 mx-auto text-center">
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <a href="/#home" className="block md:p-3 md:mx-1">
                  home
                </a>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <a href="/#services" className="block md:p-3 md:mx-1">
                  services
                </a>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <a href="/#portfolio" className="block md:p-3 md:mx-1">
                  portfolio
                </a>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <a href="/#about" className="block md:p-3 md:mx-1">
                  about
                </a>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <a href="/#news" className="block md:p-3 md:mx-1">
                  news
                </a>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <a href="/#video" className="block md:p-3 md:mx-1">
                  video
                </a>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <a href="/#skills" className="block md:p-3 md:mx-1">
                  skills
                </a>
              </li>
              <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
                <a href="/#contact" className="block md:p-3 md:mx-1">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
