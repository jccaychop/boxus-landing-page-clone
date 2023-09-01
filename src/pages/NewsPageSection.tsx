import React from "react";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "../components/section";
import { useNavbarStyles, useSlider } from "../hooks";
import { backgroundImg04 } from "../assets/images";
import { ArrowButton, Article, Testimonial } from "../components/ui";

type Position = "left" | "right";

interface Props {
  id: string | undefined;
  position?: Position;
}

export const NewsPageSection = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { slider, nextSlider } = useSlider(3);
    const { id, position } = props;
    const { myRef } = useNavbarStyles();

    return (
      <Section
        id={id}
        ref={ref}
        style={{ backgroundImage: `url(${backgroundImg04})` }}
        className="bg-space-cadet bg-no-repeat bg-center-center bg-cover pb-64 lg:pb-24"
      >
        <SectionWrapper position={position}>
          <SectionTitle
            id={id}
            ref={myRef}
            number="04"
            title="stories"
            bgClass="bg-ufo-green"
            numberColorClass="text-ufo-green-2"
          />

          <SectionContent
            position={position}
            className="font-Roboto p-0 py-[1.875rem]"
          >
            <div className="p-0 px-[5%] lg:px-[3.75rem] lg:py-4 w-full">
              <div className="w-full">
                {dataBLog.map((props) => (
                  <Article key={props.num} {...props} />
                ))}

                <div className="text-center m-0 mt-6">
                  <a
                    href=""
                    className="pb-[5px] pl-[5px] font-Montserrat text-base text-ufo-green font-bold tracking-[0.31rem] uppercase border-b-2 border-ufo-green"
                  >
                    go to blog
                  </a>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionWrapper>

        <SectionWrapper position="right" className="bg-transparent font-Roboto">
          {/* second section */}
          <SectionContent
            position="right"
            style={{ backgroundColor: "transparent" }}
            className="text-white"
          >
            <div className="p-0 py-[6.25rem]">
              <div className="pl-[5%] max-w-[33.75rem]">
                <div>
                  <div>
                    <ul className="relative min-w-full flex flex-col">
                      {dataTestimonial.map(({ info }, index) => (
                        <Testimonial
                          key={index}
                          idSlider={index}
                          slider={slider}
                          info={info}
                        />
                      ))}
                    </ul>
                  </div>
                </div>

                <ArrowButton className="mt-[3.125rem]" onClick={nextSlider} />
              </div>
            </div>
          </SectionContent>
        </SectionWrapper>
      </Section>
    );
  }
);

const dataBLog = [
  {
    num: "01",
    info: {
      autor: "Robert Williams",
      category: "branding",
      link: "",
      title:
        "Eiusmod tempor incididunt ut dolore magna labore eiusmod ipsum dolor",
    },
  },
  {
    num: "02",
    info: {
      autor: "Jim Davis",
      category: "tech",
      link: "",
      title: "Incididunt ut dolore magna labore eiusmod lorem ipsum dolor sit",
    },
  },
  {
    num: "03",
    info: {
      autor: "Ann Peterson",
      category: "crafting",
      link: "",
      title:
        "Labore eiusmod lorem ipsum dolor sit amet nunc labore incididunt ut dolore",
    },
  },
  {
    num: "04",
    info: {
      autor: "Robert Williams",
      category: "crafting",
      link: "",
      title:
        "Dolor sit amet nunc labore incididunt ut dolore magna labore eiusmod",
    },
  },
];

const dataTestimonial = [
  {
    info: {
      num: "01",
      autor: "scott hanselman",
      text: "The difference between a Designer and Developer, when it comes to design skills, is the difference between shooting a bullet and throwing it.",
    },
  },
  {
    info: {
      num: "02",
      autor: "tom bissel",
      text: "To create anything–whether a short story or a magazine profile or a film or a sitcom–is to believe, if only momentarily, you are capable of magic.",
    },
  },
  {
    info: {
      num: "03",
      autor: "steven heller",
      text: "As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft for social or political betterment.",
    },
  },
];
