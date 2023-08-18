import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
// import { Navbar } from "../components/navbar/Navbar";
import { Navbar2 } from "../components/navbar/Navbar2";
import { ScrollToHashElement } from "../components/scroll/ScrollToHashElement";
import { useEffect, useState } from 'react';

const Root = () => {
  // console.log(window.addEventListener('scroll', (event)=>{console.log({event})}));

  return (
    <>
      <ScrollToHashElement/>
      <Navbar2 />

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
        element: (
        <>
            <section id="home" className="mySection h-[1200px] bg-pastel-orange text-white">Section Home</section>
            <section id="services" className="mySection h-[1200px] bg-space-cadet text-white">Section Services</section>
            <section id="portfolio" className="mySection h-[1200px] bg-pastel-orange text-white">Section Portfolio</section>
            <section id="about" className="mySection h-[1200px] bg-space-cadet text-white">Section About</section>
            <section id="news" className="mySection h-[1200px] bg-pastel-orange text-white">Section News</section>
            <section id="video" className="mySection h-[1200px] bg-space-cadet text-white">Section Video</section>
            <section id="skills" className="mySection h-[1200px] bg-pastel-orange text-white">Section Skills</section>
            <section id="contact" className="mySection h-[1200px] bg-space-cadet text-white">Section Contact</section>
        </>
        ),
      //   Component: () => (<>
      //     <div id="home" className="h-[500px] bg-pastel-orange text-white">Section Home</div>
      //     <div id="services" className="h-[500px] bg-space-cadet text-white">Section Services</div>
      //     <div id="portfolio" className="h-[500px] bg-pastel-orange text-white">Section Portfolio</div>
      //     <div id="about" className="h-[500px] bg-space-cadet text-white">Section About</div>
      //     <div id="news" className="h-[500px] bg-pastel-orange text-white">Section News</div>
      //     <div id="video" className="h-[500px] bg-space-cadet text-white">Section Video</div>
      //     <div id="skills" className="h-[500px] bg-pastel-orange text-white">Section Skills</div>
      //     <div id="contact" className="h-[500px] bg-space-cadet text-white">Section Contact</div>
      // </>)
      },

    ],
  },
]);

export const Navigation = () => {
  return <RouterProvider router={router} />;
};
