import React from "react";
import { useNavbarStyles } from "../hooks";
import {
  Section,
  SectionContent,
  SectionDescription,
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
  backgroundImg03,
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
      <Section
        id={id}
        ref={ref}
        style={{ backgroundImage: `url(${backgroundImg03})` }}
        className="bg-space-cadet lg:pb-0 bg-no-repeat bg-center-top bg-cover"
      >
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
            <div className="p-0 w-full">
              <SectionDescription
                {...dataSection}
                classColorText="text-dark-pink"
              />

              {/* gallery 1 */}
              <Carousel totalItems={3}>
                {dataCarousel1.map((item, index) => (
                  <CarouselItem
                    key={index}
                    dataItem={item}
                    sliderNumber={index}
                  />
                ))}
              </Carousel>

              {/* gallery 2 */}
              <Carousel totalItems={3} className="sm:left-auto sm:right-[38%]">
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
        </SectionWrapper>
      </Section>
    );
  }
);

const dataSection = {
  title: "about",
  description:
    "Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum <strong>dolor sit amet</strong> consectetur est adipisicing elit, sed do eiusmod tempor",
  list: [
    { years: "2001-2003 · ", desc: "Art Studio Lorem Donec" },
    { years: "2003-2006 · ", desc: "Per Set Web Site" },
    { years: "2006-2010 · ", desc: "Setera Donec EstNunc" },
    { years: "2010-2013 · ", desc: "Studio Labore Tempor" },
    { years: "2013-2016 · ", desc: "Magna Ipsum Amet" },
  ],
};

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
