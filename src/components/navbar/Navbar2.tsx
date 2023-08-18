import { Link } from "react-router-dom";

export const Navbar2 = () => {
  return (
    <div className="sticky top-0 bg-space-cadet md:h-16">
      <nav className="md:h-full m-0 mx-auto flex flex-col max-w-[73.125rem] text-white uppercase font-Roboto border">
        <div className="md:hidden font-bold text-3xl cursor-pointer">
          <p className="text-center leading-[1.625rem] py-4 px-0">menu</p>
        </div>

        <ul className="md:h-full max-w-xs md:max-w-none w-full m-0 mx-auto text-center">
          <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
            <Link to="/#home" className="block md:p-3 md:mx-1">
              home
            </Link>
          </li>
          <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
            <Link to="/#services" className="block md:p-3 md:mx-1">
              services
            </Link>
          </li>
          <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
            <Link to="/#portfolio" className="block md:p-3 md:mx-1">
              portfolio
            </Link>
          </li>
          <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
            <Link to="/#about" className="block md:p-3 md:mx-1">
              about
            </Link>
          </li>
          <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
            <Link to="/#news" className="block md:p-3 md:mx-1">
              news
            </Link>
          </li>
          <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
            <Link to="/#video" className="block md:p-3 md:mx-1">
              video
            </Link>
          </li>
          <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
            <Link to="/#skills" className="block md:p-3 md:mx-1">
              skills
            </Link>
          </li>
          <li className="md:h-full md:inline-flex md:items-center text-[13px] leading-6 tracking-[0.07rem] py-3 px-0 border-b md:border-none last:border-none">
            <Link to="/#contact" className="block md:p-3 md:mx-1">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
