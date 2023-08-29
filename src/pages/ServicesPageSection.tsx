import React, { useState } from "react";
import { useNavbarStyles } from "../hooks";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "../components/section";

import { ArrowButton } from "../components/ui";
import { icon01, icon02, icon03, icon04 } from "../assets/images";

type Position = "left" | "right";

interface Props {
  id: string | undefined;
  position?: Position;
}

export const ServicesPageSection = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const [isActive, setIsActive] = useState(true);
    const { id, position = "left" } = props;
    const { myRef } = useNavbarStyles();

    return (
      <Section id={id} ref={ref} className="bg-space-cadet lg:pb-0">
        <SectionWrapper position={position}>
          <SectionTitle
            id={id}
            ref={myRef}
            number="01"
            title="services"
            bgClass="bg-ufo-green"
            numberColorClass="text-ufo-green-2"
          />

          <SectionContent
            position={position}
            className="py-[1.875rem] lg:pt-[3.75rem]"
          >
            <div className="p-0 px-[5%] lg:px-[3.75rem] w-full">
              <div className="w-full">
                <ArrowButton
                  className="top-0 xs:top-3.5 lg:top-[9.5rem] xl:top-[17rem] lg:left-[19rem] xl:left-[26rem] right-[5%] mt-0.5"
                  onClick={() => setIsActive(!isActive)}
                />

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
        </SectionWrapper>
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
