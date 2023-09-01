import React from "react";
import {
  BiLogoBehance,
  BiLogoDribbble,
  BiLogoFacebook,
  BiLogoTwitter,
  BiRss,
} from "react-icons/bi";

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-space-cadet w-full pt-28 lg:pt-0 pb-28 font-Roboto text-base text-[#5b5881] leading-9">
      <div>
        <ul>
          <li className="text-center">
            © 2018 All rights reserved. | Boxus Template by{" "}
            <a href="https://colorlib.com/" target="_blank" className="hover:text-dark-pink transition-colors duration-300">
              Colorlib
            </a>
          </li>

          <li className="h-9 flex gap-4 items-center justify-center">
            {icons.map(({ name, Element }) => (
              <a key={name} href="" className="text-xl">
                <Element />
              </a>
            ))}
          </li>
        </ul>
      </div>
    </footer>
  );
};

const icons = [
  {
    name: "twitter",
    Element: BiLogoTwitter,
  },
  {
    name: "behance",
    Element: BiLogoBehance,
  },
  {
    name: "dribbble",
    Element: BiLogoDribbble,
  },
  {
    name: "facebook",
    Element: BiLogoFacebook,
  },
  {
    name: "rss",
    Element: BiRss,
  },
];
