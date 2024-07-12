import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Counter({ children, trigger }) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  // const [count, setCount] = useState(start);

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const elem = wrapper.current;
    if (elem) {
      const elems = elem.querySelectorAll("div");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          markers: false
        }
      });

      tl.fromTo(
        elems,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: "power4.out",
        },
      );

      const numbersElem = elem.querySelector("#numbers");
      const limit = +numbersElem.textContent;

      tl.fromTo(
        numbersElem,
        {
          textContent: 0,
        },
        {
          textContent: limit,
          duration: 7,
          ease: "expo.out",
          onUpdate: function () {
            this.targets()[0].innerHTML = numberWithCommas(
              Math.ceil(this.targets()[0].textContent),
            );
          },
        },
        "<",
      );
    }
  }, []);

  return (
    <div
      ref={wrapper}
      className="flex items-center font-display font-extrabold text-white"
    >
      <div id="numbers">{children}</div>
    </div>
  );
}
