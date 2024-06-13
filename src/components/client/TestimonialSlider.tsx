import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "../../assets/avatar.png";
import "swiper/css";
import { useState } from "react";
import type { Swiper as TypeSwiper } from "swiper/types";

export default () => {
  const [swiper, setSwiper] = useState<TypeSwiper>();

  return (
    <Swiper
      className="relative mt-10"
      height={300}
      spaceBetween={15}
      slidesPerView={1}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide>
        <div className="grid gap-10 rounded-3xl bg-[#FDB813] p-10 lg:grid-cols-[300px_1fr]">
          <img
            className="hidden h-[300px] w-full rounded-full object-cover lg:block"
            alt=""
            src={Avatar.src}
          />
          <div className="flex flex-col">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8071 15.22C25.6107 15.22 27.5 17.2055 27.5 20.1473C27.5 22.7945 25.3286 25 22.3875 25C19.1661 25 16.7857 22.3527 16.7857 18.3091C16.7857 9.11818 23.3679 5.44182 27.5 5V9.04364C24.6982 9.55818 21.5482 12.4255 21.4071 15.5891C21.5482 15.5164 22.1071 15.22 22.8071 15.22ZM8.52321 15.22C11.3232 15.22 13.2143 17.2055 13.2143 20.1473C13.2143 22.7945 11.0429 25 8.10179 25C4.88036 25 2.5 22.3527 2.5 18.3091C2.5 9.11818 9.08214 5.44182 13.2143 5V9.04364C10.4125 9.55818 7.2625 12.4255 7.12143 15.5891C7.2625 15.5164 7.82143 15.22 8.52321 15.22Z"
                fill="black"
              />
            </svg>
            <p className="mt-5 font-display text-xl font-medium italic">
              We support Mama Cash because we know Mama Cash is strategic, has
              deep knowledge, and has networks to reach groups that otherwise
              have a hard time accessing funding. But beyond being a funder,
              Mama Cash embraces a role in influencing the philanthropic sector
              to increase its funding for women’s rights. We think that’s a
              powerful combination!
            </p>
            <div className="mt-10 flex items-center gap-4 lg:mt-auto">
              <img
                className="h-[75px] w-[75px] rounded-full object-cover lg:hidden"
                alt=""
                src={Avatar.src}
              />
              <div className="flex flex-col">
                <span className="font-display font-medium uppercase">
                  Rini Banerjee
                </span>
                <small className="uppercase">
                  Director, Foundation for A Just Society
                </small>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid gap-10 rounded-3xl bg-[#FDB813] p-10 lg:grid-cols-[300px_1fr]">
          <img
            className="hidden h-[300px] w-full rounded-full object-cover lg:block"
            alt=""
            src={Avatar.src}
          />
          <div className="flex flex-col">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8071 15.22C25.6107 15.22 27.5 17.2055 27.5 20.1473C27.5 22.7945 25.3286 25 22.3875 25C19.1661 25 16.7857 22.3527 16.7857 18.3091C16.7857 9.11818 23.3679 5.44182 27.5 5V9.04364C24.6982 9.55818 21.5482 12.4255 21.4071 15.5891C21.5482 15.5164 22.1071 15.22 22.8071 15.22ZM8.52321 15.22C11.3232 15.22 13.2143 17.2055 13.2143 20.1473C13.2143 22.7945 11.0429 25 8.10179 25C4.88036 25 2.5 22.3527 2.5 18.3091C2.5 9.11818 9.08214 5.44182 13.2143 5V9.04364C10.4125 9.55818 7.2625 12.4255 7.12143 15.5891C7.2625 15.5164 7.82143 15.22 8.52321 15.22Z"
                fill="black"
              />
            </svg>
            <p className="mt-5 font-display text-xl font-medium italic">
              We support Mama Cash because we know Mama Cash is strategic, has
              deep knowledge, and has networks to reach groups that otherwise
              have a hard time accessing funding. But beyond being a funder,
              Mama Cash embraces a role in influencing the philanthropic sector
              to increase its funding for women’s rights. We think that’s a
              powerful combination!
            </p>
            <div className="mt-10 flex items-center gap-4 lg:mt-auto">
              <img
                className="h-[75px] w-[75px] rounded-full object-cover lg:hidden"
                alt=""
                src={Avatar.src}
              />
              <div className="flex flex-col">
                <span className="font-display font-medium uppercase">
                  Rini Banerjee
                </span>
                <small className="uppercase">
                  Director, Foundation for A Just Society
                </small>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => swiper.slidePrev()}
          className="rounded-full border-2 border-[#141392] p-2"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34 18.5542L2.50099 18.5542M2.50099 18.5542L20.3655 36.0001M2.50099 18.5542L20.3655 1.1084"
              stroke="#141392"
              strokeWidth="3"
              strokeMiterlimit="100"
            />
          </svg>
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="rounded-full border-2 border-[#141392] bg-[#141392] p-2"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 19.4458H31.499M31.499 19.4458L13.6345 1.99993M31.499 19.4458L13.6345 36.8916"
              stroke="#FDB813"
              strokeWidth="3"
              strokeMiterlimit="100"
            />
          </svg>
        </button>
      </div>
    </Swiper>
  );
};
