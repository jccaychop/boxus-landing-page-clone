import React from "react";
import { useNavbarStyles } from "../hooks";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "../components/section";
import {
  aboutImg01,
  aboutImg02,
  aboutImg03,
  aboutImg04,
  aboutImg05,
  aboutImg06,
} from "../assets/images";

import { Carousel, CarouselCard, CarouselItem } from "../components/carousel";

type Position = "left" | "right";

interface Props {
  id: string | undefined;
  position?: Position;
}

export const AboutPageSection = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { id, position = "left" } = props;
    const { myRef } = useNavbarStyles();

    return (
      <Section id={id} ref={ref} className="bg-space-cadet lg:pb-0">
        <SectionWrapper position={position}>
          <SectionTitle
            id={id}
            ref={myRef}
            number="03"
            title="crafters"
            bgClass="bg-dark-pink"
            numberColorClass="text-dark-pink-2"
          />

          <SectionContent position={position}>
            <div className="w-full p-0">
              <div className="p-0 px-[5%] lg:px-[3.75rem] xl:h-[370px] pt-8 pb-20 lg:pb-8 border-[red]">
                <div className="relative lg:-top-[5.375rem] xl:-top-[6.7rem]">
                  <h2 className="text-[19vw] lg:text-[8.75rem] xl:text-[11.25rem] leading-none uppercase text-center font-bold">
                    About
                  </h2>
                </div>
                <div className="relative xl:-top-14 font-Roboto lg:flex gap-12 xl:gap-24">
                  <p className="flex-1 leading-[1.625rem] m-0 mb-9">
                    Polor sit amet consectetur adipisicing elit sed eiusmod
                    tempor incididunt ut dolore magna labore eiusmod. Lorem
                    ipsum <strong>dolor sit amet</strong> consectetur est
                    adipisicing elit, sed do eiusmod tempor
                  </p>
                  <ul className="flex-1 lg:leading-[1.625rem]">
                    <li className="m-0 p-0">
                      <strong className="text-dark-pink">2001-2003 · </strong>
                      <em className="">Art Studio Lorem Donec</em>
                    </li>
                    <li className="m-0 p-0">
                      <strong className="text-dark-pink">2003-2006 · </strong>
                      <em className="">Per Set Web Site</em>
                    </li>
                    <li className="m-0 p-0">
                      <strong className="text-dark-pink">2006-2010 · </strong>
                      <em className="">Setera Donec EstNunc</em>
                    </li>
                    <li className="m-0 p-0">
                      <strong className="text-dark-pink">2010-2013 · </strong>
                      <em className="">Studio Labore Tempor</em>
                    </li>
                    <li className="m-0 p-0">
                      <strong className="text-dark-pink">2013-2016 · </strong>
                      <em className="">Magna Ipsum Amet</em>
                    </li>
                  </ul>
                </div>
              </div>

              {/* gallery 1 */}
              <Carousel>
                {dataCarousel1.map((item, index) => (
                  <CarouselItem
                    key={index}
                    dataItem={item}
                    sliderNumber={index}
                  />
                ))}
              </Carousel>

              {/* gallery 2 */}
              <Carousel className="sm:left-auto sm:right-[38%]">
                {dataCarousel2.map((item, index) => (
                  <CarouselItem
                    key={index}
                    dataItem={item}
                    sliderNumber={index}
                    classNameCard="sm:flex"
                    classNameImg="sm:flex-1 sm:min-w-[50%] xl:min-w-[370px]"
                  >
                    <CarouselCard {...item.cardContent} />
                  </CarouselItem>
                ))}
              </Carousel>
            </div>
          </SectionContent>

          {/* div 3 */}
          <div></div>
        </SectionWrapper>
      </Section>
    );
  }
);

const dataCarousel1 = [
  {
    srcImage: aboutImg04,
  },
  {
    srcImage: aboutImg05,
  },
  {
    srcImage: aboutImg06,
  },
];

const dataCarousel2 = [
  {
    srcImage: aboutImg01,
    cardContent: {
      name: "María Chu",
      position: "lead designer",
      content:
        "Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.",
    },
  },
  {
    srcImage: aboutImg02,
    cardContent: {
      name: "Robert Williams",
      position: "seo master",
      content:
        "Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.",
    },
  },
  {
    srcImage: aboutImg03,
    cardContent: {
      name: "Rebeca Smith",
      position: "psd guru",
      content:
        "Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.",
    },
  },
];
