import React from "react";
import { useNavbarStyles } from "../hooks";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionWrapper,
} from "../components/section";

import { Grid, GridItem } from "../components/grid";

import {
  backgroundImg02,
  portfolioItem01,
  portfolioItem02,
  portfolioItem05,
  portfolioItem08,
} from "../assets/images";
import { LoadMore } from "../components/ui";

type Position = "left" | "right";

interface Props {
  id: string | undefined;
  position?: Position;
}

export const PortfolioPageSection = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { id, position = "left" } = props;
    const { myRef } = useNavbarStyles();

    return (
      <Section
        id={id}
        ref={ref}
        style={{ backgroundImage: `url(${backgroundImg02})` }}
        className="bg-space-cadet lg:pb-0 bg-no-repeat bg-center-top bg-auto"
      >
        <SectionWrapper position={position}>
          <SectionTitle
            id={id}
            ref={myRef}
            number="02"
            title="portfolio"
            bgClass="bg-pastel-orange"
            numberColorClass="text-pastel-orange-2"
          />

          <SectionContent position={position} className="">
            <div className="p-0 w-full">
              <div className="w-full">
                <div className="relative w-full bg-space-cadet lg:flex lg:flex-col lg:items-end max-w-full">
                  <Grid className="grid-cols-2 grid-rows-4 gap-0">
                    <GridItem
                      className="col-span-2 row-span-1"
                      to=""
                      imgSrc={portfolioItem01}
                    />

                    <GridItem
                      className="col-span-1 row-span-1"
                      to=""
                      imgSrc={portfolioItem02}
                    />

                    <GridItem
                      className="col-span-1 row-span-1"
                      to=""
                      imgSrc={portfolioItem08}
                    />

                    <GridItem
                      className="col-span-2 row-span-2"
                      to=""
                      imgSrc={portfolioItem05}
                    />
                  </Grid>

                  <LoadMore />
                </div>
              </div>
            </div>
          </SectionContent>

          {/* div 3 */}
          <div></div>
        </SectionWrapper>
      </Section>
    );
  }
);
