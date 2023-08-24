import React, { useState } from "react";
import { useNavbarStyles } from "../hooks";
import { Section } from "../components/section/Section";
import { icon01, icon02, icon03, icon04 } from "../assets/images";
import { SVGNavigationArrowRight } from "../components/svg/SVGNavigationArrowRight";
import { SectionContent, SectionTitle } from "../components/section";

type Position = "left" | "right";

interface Props {
  id: string | undefined;
  position?: Position;
}

export const ServicesPageSection = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const [isActive, setIsActive] = useState(true);
    const { id, position } = props;
    const { myRef } = useNavbarStyles();

    return (
      <Section id={id} ref={ref} className="bg-space-cadet lg:pb-0">
        <div className="relative text-white m-0 mx-auto max-[1020px]:w-full max-[1270px]:w-[60rem] w-[73.125rem]">
          {/* titulo */}
          <SectionTitle
            id={id}
            ref={myRef}
            number="01"
            title="services"
            bgClass="bg-ufo-green"
            numberColorClass="text-ufo-green-2"
            position={position}
          />

          {/* contenido */}
          <SectionContent>
            <div className="p-0 px-[5%] lg:px-[3.75rem] w-full">
              <div className="w-full">
                <button
                  className="absolute top-0 xs:top-3.5 lg:top-[9.5rem] xl:top-[17rem] lg:left-[19rem] xl:left-[26rem] right-[5%] mt-0.5 w-12 bg-transparent border-none outline-none "
                  onClick={() => setIsActive(!isActive)}
                >
                  <SVGNavigationArrowRight className="w-12 h-12 fill-white hover:fill-platinum" />
                </button>
                <div className="relative w-full">
                  <ul className="overflow-hidden h-full flex flex-nowrap w-full">
                    <li
                      className={`inline-block min-w-fit lg:flex lg:flex-row lg:flex-wrap ${
                        !isActive ? "order-1 opacity-0" : ""
                      } transition-order-opacity duration-1200 ease-in-out`}
                    >
                      {data1.map(({ title, content, src }) => (
                        <div key={title} className="w-full lg:w-1/2">
                          <img
                            src={src}
                            alt="icon"
                            className="w-[3.125rem] h-auto inline-block lg:block xl:inline-block align-top"
                          />
                          <div className="inline-block lg:block xl:inline-block w-[calc(100%-70px)] mt-14 ml-1.5 mb-8">
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

                    <li
                      className={`inline-block min-w-fit lg:flex lg:flex-row lg:flex-wrap ${
                        isActive ? "order-1 opacity-0" : ""
                      } transition-order-opacity duration-1200 ease-in-out`}
                    >
                      {data2.map(({ title, content, src }) => (
                        <div key={title} className="w-full lg:w-1/2">
                          <img
                            src={src}
                            alt="icon"
                            className="w-[3.125rem] h-auto inline-block lg:block xl:inline-block align-top"
                          />
                          <div className="inline-block lg:block xl:inline-block w-[calc(100%-70px)] mt-14 ml-1.5 mb-8">
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
          </SectionContent>

          {/* <div className="bg-white w-full lg:w-[710px] xl:w-[800px] m-0 p-0 py-[1.875rem] lg:pt-[3.75rem] lg:ml-[250px] xl:ml-[370px] text-space-cadet">

          </div> */}

          {/* div 3 */}
          <div></div>
        </div>
      </Section>
    );
  }
);

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
