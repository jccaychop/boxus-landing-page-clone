import { useEffect, useState } from "react";
import './styles.css'

export const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const [isDivExpanded, setIsDivExpanded] = useState(false);

  const toggleDiv = () => {
    const growDiv = document.getElementById('grow');
    const wrapper = document.querySelector('.measuringWrapper');

    if (growDiv && growDiv.clientHeight) {
      growDiv.style.height = '0';
      setIsDivExpanded(false);
    } else if(growDiv && wrapper){
      growDiv.style.height = `${wrapper.clientHeight}px`;
      setIsDivExpanded(true);
    }
  };

  // const handleClick = () => setIsOpen(!isOpen);
  const handleClick = () => toggleDiv();

  console.log({isDivExpanded});
  

  return (
    <div className="bg-space-cadet sticky top-0 w-full z-20 md:h-16 border border-[red]">
      <div className="h-full">
        <nav className="relative bg-transparent md:h-full m-0 mx-auto flex flex-col max-w-[73.125rem] text-white uppercase font-Roboto">
          <div
            className="bg-space-cadet md:hidden font-bold text-3xl cursor-pointer z-30"
            onClick={()=> handleClick()}
          >
            <p className="text-center leading-[1.625rem] py-4 px-0">menu</p>
          </div>

          {/* <div
            className={`absolute top-14 md:top-0 w-full bg-space-cadet delay-300 ${
              isOpen ? "h-auto" : "h-0 hidden"
            } md:block border border-white md:h-full`}
          > */}
          <div id="grow"
            className="absolute w-full top-14 bg-space-cadet md:block border border-white h-auto md:h-full"
          >
            <ul className="measuringWrapper bg-transparent md:h-full max-w-xs md:max-w-none w-full m-0 mx-auto text-center">
            {/* <ul className="bg-transparent max-w-xs md:max-w-none w-full m-0 mx-auto text-center"> */}
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
