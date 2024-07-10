import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";

export default function HorizontalScroller({ children }) {
  const wrapperRef = useRef<HTMLDivElement | null>();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current.querySelector(
        ".scroller-section",
      ) as HTMLElement;
      const container = wrapperRef.current.querySelector(
        ".scroller-section-container",
      ) as HTMLElement;
      const scroller = wrapperRef.current.querySelector(
        ".scroller",
      ) as HTMLElement;

      // scroller.style.gridAutoColumns = container?.offsetWidth / 3 + 'px';
      gsap.to(scroller, {
        x: () =>
          wrapper?.offsetWidth -
          scroller?.offsetWidth -
          container.offsetLeft - (window.innerWidth < 1200 ? 100 : 200),
        scrollTrigger: {
          trigger: container,
          pin: true,
          invalidateOnRefresh: true,

          start: "-50 top",
          end: "bottom top",
          markers: true,
          scrub: true,
          preventOverlaps: true
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="px-5 w-full" ref={wrapperRef}>
      {children}
    </div>
  );
}
