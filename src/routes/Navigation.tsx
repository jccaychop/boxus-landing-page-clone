import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ScrollToHashElement } from "../components/scroll/ScrollToHashElement";
import { Navbar } from "../components/navbar";
import { AboutPageSection, HomePageSection, PortfolioPageSection, ServicesPageSection } from "../pages";

const Root = () => {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        Component: () => (
        <>
          <HomePageSection id="home" />

          <ServicesPageSection id="services" position="left"/>

          <PortfolioPageSection id="portfolio" position="right"/>

          <AboutPageSection id="about" position="left"/>

          <section id="news" className="scroll-mt-[3.75rem] md:scroll-mt-16 mySection h-[1200px] bg-pastel-orange text-white">
            <div className="h-44 bg-united-nations-blue border border-[red]">Section News</div>
          </section>

          <section id="video" className="scroll-mt-[3.75rem] md:scroll-mt-16 mySection h-[1200px] bg-space-cadet text-white">
            <div className="h-44 bg-united-nations-blue border border-[red]">Section Video</div>
          </section>

          <section id="skills" className="scroll-mt-[3.75rem] md:scroll-mt-16 mySection h-[1200px] bg-pastel-orange text-white">
            <div className="h-44 bg-united-nations-blue border border-[red]">Section Skills</div>
          </section>

          <section id="contact" className="scroll-mt-[3.75rem] md:scroll-mt-16 mySection h-[1200px] bg-space-cadet text-white">
            <div className="h-44 bg-united-nations-blue border border-[red]">Section Contact</div>
          </section>
        </>
        ),
      },
    ],
  },
]);

export const Navigation = () => {
  return <RouterProvider router={router} />;
};
