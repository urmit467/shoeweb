import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import List from "./List";
import Shoe1 from "./Shoe1";
import Cursorfollow from "./Cursorfollow";
import Listop from "./Listop";
import NikeFooter from "./NikeFooter";

const Page = () => {
  const [show, setShow] = useState(false);
  const first = useRef(2);
  const [index, setIndex] = useState(0);

  // Ref to the header so we can measure its height (for offset)
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Measure header height and update on resize
  useEffect(() => {
    const updateHeaderHeight = () => {
      const h = headerRef.current ? headerRef.current.offsetHeight : 0;
      setHeaderHeight(h);
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  // Generalized scroll function (accepts 'top' or element id)
  const scrollToId = (id) => {
    if (!id || id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const elementY = el.getBoundingClientRect().top + window.pageYOffset;
    // subtract header height + small padding so element isn't hidden under header
    const offset = Math.max(0, elementY - headerHeight - 12);
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <div className="h-screen max-w-full bg-green-900">
      {/* Header / Nav - attach ref so we can measure its height */}
      <section
        ref={headerRef}
        className="p-4 bg-transparent flex gap-4 text-slate-300 justify-center fixed w-full z-50"
      >
        <button onClick={() => scrollToId("top")} className="cursor-pointer">
          Home
        </button>
        <button
          onClick={() => scrollToId("product")}
          className="cursor-pointer"
        >
          Products
        </button>
        <button
          onClick={() => scrollToId("contact")}
          className="cursor-pointer"
        >
          Contact Us
        </button>
      </section>

      {/* spacer to account for fixed header */}
      <div style={{ height: headerHeight }} />

      <div className="relative bg-gradient-to-b from-green-900 via-[#8BE627] to-green-900 w-full h-180 top-10 overflow-hidden">
        {/* Shoe image */}
        <img
          className={`absolute left-130 bottom-55 rotate-330 w-120 h-144 z-0 transform transition-all duration-1000 ease-out
          ${show ? "translate-y-0 opacity-100" : "translate-y-200 opacity-0"}`}
          src="src/components/images/opeingshoe.png"
          alt="loading..."
        />

        {/* Text */}
        <p
          className={`relative z-10 text-black w-150 left-27 text-8xl hover:bg-gradient-to-b hover:from-black via-black hover:to-white hover:bg-clip-text hover:text-transparent transition duration-500 font-bold text-center pt-40 bottom-25 transition-all duration-1000 ease-out
        ${show ? "translate-x-0 opacity-100" : "translate-x-200 opacity-0"}`}
        >
          <i> Where Performance</i>
        </p>

        <p
          className={`relative z-10 text-[#1E0C36] w-150 left-220 text-8xl hover:text-[#00023B] font-bold text-center pt-40 bottom-58 transition-all duration-1000 ease-out
        ${show ? "translate-x-0 opacity-100" : "-translate-x-200 opacity-0"}`}
        >
          <i>Meets Style</i>
        </p>

        <img
          className={`absolute h-20 w-40 right-2 bottom-180 transform transition-all duration-1000 ease-out
        ${show ? "translate-x-0 opacity-100" : "-translate-x-200 opacity-0"}`}
          src="src/components/images/Logo_NIKE.svg.png"
          alt=""
        />
      </div>

      {/* shoe display */}
      <div className="relative h-185 w-full bg-white z-0">
        <div className="relative z-10">
          <Shoe1 />
        </div>
      </div>

      {/* Products block - add scrollMarginTop so normal anchor jumps respect header */}
      <div
        id="product"
        className="relative h-600 w-full bg-white"
        style={{ scrollMarginTop: `${headerHeight + 12}px` }}
      >
        <Listop scrollTarget="contact" />
        <section
          id="contact"
          style={{ scrollMarginTop: `${headerHeight + 12}px` }}
        >
          <div className="relative top-10">
            <List />
          </div>
        </section>
      </div>

      <div>
        <NikeFooter />
      </div>
    </div>
  );
};

export default Page;
