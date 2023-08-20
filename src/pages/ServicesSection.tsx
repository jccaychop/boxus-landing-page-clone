import { Section } from "../components/section/Section";
import { icon01, icon02, icon03, icon04 } from "../assets/images";
import { SVGNavigationArrowRight } from "../components/svg/SVGNavigationArrowRight";
import { useState } from "react";

export const ServicesSection = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Section id="services" className="bg-space-cadet border border-[red]">
      <div className="relative text-white m-0 mx-auto max-[1020px]:w-full max-[1270px]:w-[60rem] w-[73.125rem]">
        {/* titulo */}
        <div className="bg-ufo-green w-full text-[2.1875rem] font-bold uppercase">
          <div className="inline-block">
            <span className="text-ufo-green-2 m-0 -ml-2.5 tracking-[-5px]">
              01
            </span>
          </div>

          <h2 className="inline-block break-all p-0 pl-2 tracking-[-3px]">
            services
          </h2>
        </div>

        {/* contenido */}
        <div className="bg-white w-full m-0 p-0 py-8 text-space-cadet">
          <div className="p-0 px-[5%]">
            <div className="">
              <button
                className="absolute top-0 right-1 mt-0.5"
                onClick={() => setIsActive(!isActive)}
              >
                <SVGNavigationArrowRight className="w-12 h-12 fill-white hover:fill-platinum" />
              </button>
              <div className="">
                <ul className="overflow-hidden">
                  {/* primer li */}
                  <li className={`w-64 animate__animated ${isActive ? 'hidden':'animate__fadeIn block'}`}>
                    {/* primer div */}
                    {data1.map(({ title, content, src }) => (
                      <div key={title} className="animate__animated animate__fadeIn">
                        <img
                          src={src}
                          alt="icon"
                          className="w-[3.125rem] h-auto inline-block align-top"
                        />
                        <div className="inline-block w-[calc(100%-75px)] mt-14 ml-1.5 mb-8">
                          <div className="text-2xl pb-2.5 uppercase">
                            {title}
                          </div>
                          <div className="font-Roboto text-base text-left">
                            {content}
                            <br />
                          </div>
                        </div>
                      </div>
                    ))}
                  </li>

                  {/* segundo li */}
                  <li className={`w-64 animate__animated ${!isActive ? 'hidden':'animate__fadeIn block'}`}>
                    {/* primer div */}
                    {data2.map(({ title, content, src }) => (
                      <div key={title} className="animate__animated animate__fadeIn">
                        <img
                          src={src}
                          alt="icon"
                          className="w-[3.125rem] h-auto inline-block align-top"
                        />
                        <div className="inline-block w-[calc(100%-75px)] mt-14 ml-1.5 mb-8">
                          <div className="text-2xl pb-2.5 uppercase">
                            {title}
                          </div>
                          <div className="font-Roboto text-base text-left">
                            {content}
                            <br />
                          </div>
                        </div>
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* div 3 */}
        <div>afafafaf</div>
      </div>
    </Section>
  );
};

const data1 = [
  {
    title: "branding",
    src: icon01,
    content:
      "Donecos arem ipsum sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.",
  },
  {
    title: "mobile apps",
    src: icon02,
    content:
      "Disum lorem sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.",
  },
  {
    title: "web",
    src: icon03,
    content:
      "Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.",
  },
  {
    title: "graphic",
    src: icon04,
    content:
      "Cadipisicing elit sed eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.",
  },
];

const data2 = [
  {
    title: "services",
    src: icon03,
    content:
      "Donecos arem ipsum sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.",
  },
  {
    title: "psd",
    src: icon04,
    content:
      "Disum lorem sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut donecos dolore ipsum temporest.",
  },
  {
    title: "html",
    src: icon02,
    content:
      "Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod.",
  },
  {
    title: "php",
    src: icon01,
    content:
      "Cadipisicing elit sed eiusmod tempor incididunt ut labore lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet.",
  },
];
