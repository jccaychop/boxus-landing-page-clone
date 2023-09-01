import React from "react";
import Carousel from "react-multi-carousel";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from "../components/section";
import { useNavbarStyles } from "../hooks";
import {
  backgroundImg06,
  iconClear,
  iconDisplay,
  iconEditing,
  iconIdeas,
  iconSolution,
  iconSound,
  iconTime,
  iconVideo,
  videoImg,
} from "../assets/images";
import { ArrowButton } from "../components/ui";

type Position = "left" | "right";

interface Props {
  id: string | undefined;
  position?: Position;
}

export const VideoPageSection = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { id, position = "left" } = props;
    const { myRef } = useNavbarStyles();

    return (
      <Section
        id={id}
        ref={ref}
        style={{
          backgroundImage: `url(${backgroundImg06})`,
        }}
        className="bg-space-cadet bg-repeat-x bg-center-center bg-auto pb-60 lg:pb-32"
      >
        <SectionWrapper position={position}>
          <SectionTitle
            id={id}
            ref={myRef}
            number="05"
            title="offer"
            bgClass="bg-pastel-orange"
            numberColorClass="text-pastel-orange-2"
          />
          <SectionContent position={position}>
            <div className="p-0 w-full">
              <SectionDescription
                {...dataSection}
                classColorText="text-pastel-orange"
              />

              <div className="relative">
                <a href="">
                  <img src={videoImg} alt="video" className="w-full" />
                  <img
                    src={iconVideo}
                    alt="icon"
                    className="absolute top-[calc(50%-60px)] left-[calc(50%-60px)] opacity-70"
                  />
                </a>
              </div>
            </div>
          </SectionContent>
        </SectionWrapper>

        <div className="relative text-white py-[100px] w-full">
          <Carousel
            className=""
            responsive={responsive}
            transitionDuration={980}
            infinite={true}
            showDots
            renderDotsOutside
            dotListClass=""
            customLeftArrow={<ArrowButton className="hidden" />}
            customRightArrow={
              <ArrowButton className="right-[calc(50%-24px)] bottom-0 md:hidden" />
            }
          >
            {dataCarousel.map((data, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center justify-center"
              >
                <img
                  src={data.imageSrc}
                  alt="icon"
                  className="max-w-[11.25rem]"
                />
                <p className="font-Roboto text-lg">{data.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Section>
    );
  }
);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 6000, min: 1600 },
    items: 5,
    slidesToSlide: 4,
  },
  largeDesktop: {
    breakpoint: { max: 1600, min: 1200 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 400 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const dataSection = {
  title: "video",
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

const dataCarousel = [
  {
    title: "Video Editing",
    imageSrc: iconEditing,
  },
  {
    title: "Premium Cleer",
    imageSrc: iconClear,
  },
  {
    title: "For All Displays",
    imageSrc: iconDisplay,
  },
  {
    title: "Right On Time",
    imageSrc: iconTime,
  },
  {
    title: "Innovative Ideas",
    imageSrc: iconIdeas,
  },
  {
    title: "Perfect Sound",
    imageSrc: iconSound,
  },
  {
    title: "3D Solution",
    imageSrc: iconSolution,
  },
];
