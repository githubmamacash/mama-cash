import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function HorizontalScroller({ children }) {
  const wrapperRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current.querySelector(
        ".key-section",
      ) as HTMLElement;
      const container = wrapperRef.current.querySelector(
        ".key-section-container",
      ) as HTMLElement;
      const scroller = wrapperRef.current.querySelector(
        ".scroller",
      ) as HTMLElement;

      // scroller.style.gridAutoColumns = container?.offsetWidth / 3 + 'px';
      gsap.to(scroller, {
        x: () =>
          wrapper?.offsetWidth -
          scroller?.offsetWidth -
          container?.offsetLeft * 2 -
          32,
        scrollTrigger: {
          trigger: ".key-section-container",
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 0,
          start: "-50 top",
          end: "bottom top",
          // markers: true,
          scrub: true,
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="w-full px-5" ref={wrapperRef}>
      {children}
    </div>
  );
}
