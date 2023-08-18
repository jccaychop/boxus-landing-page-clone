import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ScrollToHashElement } from "../components/scroll/ScrollToHashElement";
import { Navbar } from "../components/navbar/Navbar";
import { HomeSection } from "../pages/HomeSection";

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
          <HomeSection/>

          <section id="services" className="scroll-mt-[3.75rem] md:scroll-mt-16 mySection h-[1200px] bg-space-cadet text-white">
            <div className="h-44 bg-united-nations-blue border border-[red]">Section Services</div>
          </section>

          <section id="portfolio" className="scroll-mt-[3.75rem] md:scroll-mt-16 mySection h-[1200px] bg-pastel-orange text-white">
            <div className="h-44 bg-united-nations-blue border border-[red]">Section Portfolio</div>
          </section>

          <section id="about" className="scroll-mt-[3.75rem] md:scroll-mt-16 mySection h-[1200px] bg-space-cadet text-white">
            <div className="h-44 bg-united-nations-blue border border-[red]">Section About</div>
          </section>

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
