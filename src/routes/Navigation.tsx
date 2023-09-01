import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ScrollToHashElement } from "../components/scroll";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import {
  AboutPageSection,
  HomePageSection,
  NewsPageSection,
  PortfolioPageSection,
  ServicesPageSection,
  VideoPageSection,
  SkillsPageSection,
  ContactPageSection,
} from "../pages";

const Root = () => {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <Outlet />
      <Footer />
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

            <ServicesPageSection id="services" position="left" />

            <PortfolioPageSection id="portfolio" position="right" />

            <AboutPageSection id="about" position="left" />

            <NewsPageSection id="news" position="right" />

            <VideoPageSection id="video" position="left" />

            <SkillsPageSection id="skills" position="right" />

            <ContactPageSection id="contact" position="left" />
          </>
        ),
      },
    ],
  },
]);

export const Navigation = () => {
  return <RouterProvider router={router} />;
};
