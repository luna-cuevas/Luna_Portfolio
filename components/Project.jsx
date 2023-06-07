import Button from "../components/Button";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { Pagination, EffectCreative, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import { PortableText } from "@portabletext/react";

const Project = ({ project }) => {
  const title = project.title;
  const skills = project.Skills;
  const desc = project.body;
  const firstParagraph = desc != undefined ? [desc[0]] : [];
  const limitedText =
    firstParagraph[0]?.children[0]?.text?.slice(0, 180) + "...";

  return (
    <div className="lg:w-1/4 z-20 h-fit transition-all duration-200 hover:shadow-[0px_5px_10px_5px_#474646eb] pb-4 w-10/12 bg-[#1c1b1bee] sm:w-[45%] border-2 rounded-xl border-gray-700 mx-auto text-center">
      <Swiper
        modules={[Pagination, EffectCreative, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="mySwiper"
        style={{ color: "white !important" }}
        pagination={{ clickable: true }}>
        {project.images?.map((image, id) => (
          <SwiperSlide key={id} className="p-10">
            <img
              className="w-full m-auto rounded-lg select-none"
              src={urlFor(image)}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-5/6 m-auto">
        <h1 className="md:text-xl py-1 text-base border-b-2 border-gray-600">
          {title}
        </h1>
        <div className="flex flex-wrap justify-center gap-2 my-4">
          {skills?.map((skill, id) => (
            <p
              style={{
                "border-image":
                  "linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%",
              }}
              key={id}
              className="p-[2px] border-[1px] text-[10px] text-left">
              {skill}
            </p>
          ))}
        </div>
        <p className="pb-2 text-sm font-light text-left">{limitedText}</p>
      </div>
      <Link href={`/project-details/${project.slug.current}`}>
        <button id="bn30">Read More</button>
      </Link>
    </div>
  );
};

export default Project;
