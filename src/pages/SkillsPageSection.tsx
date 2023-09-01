import React from "react";
import { useNavbarStyles } from "../hooks";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
} from "../components/section";
import { backgroundImg05 } from "../assets/images";

type Position = "left" | "right";

interface Props {
  id: string | undefined;
  position?: Position;
}

export const SkillsPageSection = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { id, position = "left" } = props;
    const { myRef } = useNavbarStyles();

    return (
      <Section
        id={id}
        ref={ref}
        style={{
          backgroundImage: `url(${backgroundImg05})`,
        }}
        className="bg-space-cadet bg-no-repeat bg-left-top bg-[size:100%] pb-60 lg:pb-0"
      >
        <SectionWrapper position={position}>
          <SectionTitle
            id={id}
            ref={myRef}
            number="06"
            title="expertise"
            bgClass="bg-ufo-green"
            numberColorClass="text-ufo-green-2"
          />

          <SectionContent position={position}>
            <div className="p-0 w-full">
              <SectionDescription {...dataSection} />
            </div>
          </SectionContent>
        </SectionWrapper>
      </Section>
    );
  }
);

const dataSection = {
  title: "skills",
  description:
    "Fusce suscipit, orci eget lobortis sodales, velit nunc tristique metus, in tristique odio ante id sem. Etiam in quam et sapien bibendum mollis. Morbi eget velit eros, quis imperdiet arcusere perdan. Nunc lorem justo, pellentesque ac egestas quis.",
  bars: [
    {
      name: "html",
      value: 81,
      bgColor: "bg-ufo-green",
      color: "text-ufo-green-2",
    },
    {
      name: "css",
      value: 93,
      bgColor: "bg-pastel-orange",
      color: "text-pastel-orange-2",
    },
    {
      name: "psd",
      value: 72,
      bgColor: "bg-dark-pink",
      color: "text-dark-pink-2",
    },
    {
      name: "design",
      value: 99,
      bgColor: "bg-united-nations-blue",
      color: "text-united-nations-blue-2",
    },
  ],
};
