import { Section } from "../components/section/Section";
import { backgroundImg01, logo } from "../assets/images";

export const HomeSection = () => {
  return (
    <Section
      id="home"
      className="pb-[10.625rem] bg-space-cadet bg-repeat bg-center-top bg-cover home-section"
      style={{ backgroundImage: `url(${backgroundImg01})` }}
    >
      <div className="text-white text-center m-0 mx-auto max-[1020px]:w-full max-[1270px]:w-[60rem] w-[73.125rem]">
        <img src={logo} alt="logo" className="w-40 pt-[9.375rem] m-0 mx-auto" />

        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-10 md:leading-[3.5rem] -tracking-[0.0625rem] p-0 pb-5 md:pt-[6.25rem] w-[95%] m-0 mx-auto">
          We Craft Awesome Web And{" "}
          <span className="inline md:block">Graphic Design Solutions</span>
        </h1>
        <p className="font-PTSerif text-[1.1875rem] md:text-[1.375rem] leading-[1.4375rem] md:leading-[1.625rem] max-w-[20.8125rem] m-0 mx-auto">
          Support bright students today for a better tomorrow
        </p>
      </div>
    </Section>
  );
};
