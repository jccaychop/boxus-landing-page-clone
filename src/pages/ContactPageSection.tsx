import React from "react";
import { useNavbarStyles } from "../hooks";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "../components/section";
import { backgroundImg07 } from "../assets/images";

type Position = "left" | "right";

interface Props {
  id: string | undefined;
  position?: Position;
}

export const ContactPageSection = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { id, position = "left" } = props;
    const { myRef } = useNavbarStyles();

    return (
      <Section
        id={id}
        ref={ref}
        style={{
          backgroundImage: `url(${backgroundImg07})`,
        }}
        className="bg-space-cadet bg-no-repeat bg-center-top bg-auto pb-60 lg:pb-32"
      >
        <SectionWrapper position={position}>
          <SectionTitle
            id={id}
            ref={myRef}
            number="07"
            title="contact"
            bgClass="bg-dark-pink"
            numberColorClass="text-dark-pink-2"
          />

          <SectionContent position={position}>
            <div className="p-0 w-full font-Roboto">
              <div className="py-[10%] lg:pt-[4.5rem] lg:pb-11 xs:py-7 px-[5%] lg:px-[8%] lg:flex gap-11 xl:gap-[5.5rem]">
                <div className="flex-1">
                  <p className="mb-7">
                    Consectetur adipisicing elit sed eiusmod tempor incididunt
                    ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet
                    consectetur est adipisicing elit, sed do eiusmod tempor.
                  </p>

                  <p className="mb-7">
                    <strong>
                      <span className="text-dark-pink">
                        Incididunt ut dolore
                      </span>
                    </strong>{" "}
                    magna labore eiusmod. Dolor sit amet consectetur est
                    adipisicing elit, sed do eiusmod.
                  </p>
                </div>

                <div className="flex-1 py-3 lg:py-0 max-w-full w-[770px] mx-auto">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full border-b pb-1.5 mb-7 outline-none placeholder-space-cadet focus:placeholder-transparent"
                    placeholder="Name"
                  />

                  <input
                    type="email"
                    name=""
                    id=""
                    className="w-full border-b pb-1.5 mb-7 outline-none placeholder-space-cadet focus:placeholder-transparent"
                    placeholder="Email"
                  />

                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full border-b pb-1.5 mb-7 outline-none placeholder-space-cadet focus:placeholder-transparent"
                    placeholder="Subject"
                  />

                  <textarea
                    name=""
                    id=""
                    className="w-full h-8 border-b pb-1.5 mb-7 outline-none placeholder-space-cadet focus:placeholder-transparent focus:h-[150px] transition-[height] duration-700"
                    placeholder="Message"
                  ></textarea>

                  <input
                    type="submit"
                    className="w-full py-3 text-dark-pink border-2 border-dark-pink cursor-pointer hover:bg-dark-pink hover:text-white transition-colors duration-300"
                    value="SEND"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <iframe
                className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4274.290564544589!2d-75.2952832049782!3d40.753669641460846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1444506658649"
                width="600"
                height="450"
              ></iframe>
            </div>
          </SectionContent>
        </SectionWrapper>
      </Section>
    );
  }
);
