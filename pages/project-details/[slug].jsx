import React, { useRef, useState } from "react";
import { Navigation, Pagination, EffectCreative, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import Button from "../../components/Button";
import { client, urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";

const ProjectDetails = ({ product }) => {
  const title = product.title;
  const skills = product.Skills;
  const desc = product.body;
  const images = product.images.map((image) => urlFor(image));
  const link = product.demoLink;
  const gitRepo = product.gitLink;

  return (
    <div className="max-w-[1400px] mt-10 gap-2 md:gap-6 w-screen md:min-h-[500px] md:mt-[20vh] overflow-y-scroll m-auto justify-center flex flex-col md:flex-row ">
      <div className="h-fit rounded-xl md:w-1/2 flex flex-col">
        <div className="md:w-full w-screen">
          <Swiper
            modules={[Navigation, Pagination, EffectCreative, Autoplay]}
            slidesPerView={1}
            navigation
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
            {images?.map((image, id) => (
              <SwiperSlide key={id} className="p-10 select-none">
                <img
                  className="w-full p-2 bg-[#2e2e2e] m-auto border-2 border-gray-700 rounded-lg"
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-around w-1/2 gap-4 m-auto">
            <Button
              link={link}
              text="Live Demo"
              className="w-fit rounded-xl px-4 py-2 my-3 bg-gray-400"
            />
            <Button
              link={gitRepo}
              text="Git Repo"
              className="w-fit rounded-xl px-4 py-2 my-3 bg-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="h-auto w-[1px] border-2 border-gray-500" />
      <div className="md:w-1/2 px-6 z-10 flex flex-col bg-[#222] text-left">
        <h1 className="my-4 text-2xl text-center">{title}</h1>
        <div className="flex flex-wrap gap-4 mx-auto my-4">
          {skills.map((skill, id) => (
            <p
              key={id}
              style={{
                borderImage:
                  "linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%",
              }}
              className="text-xs border-2">
              {skill}
            </p>
          ))}
        </div>
        <PortableText
          className=" font-light text-left"
          value={desc}
          components={{
            block: ({ children }) => <p className="my-2">{children}</p>,

            list: {
              number: ({ children }) => (
                <ol className="list-decimal">{children}</ol>
              ),
            },
            listItem: ({ children }) => <li className="my-2">{children}</li>,
          }}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);
  console.log(product);
  return {
    props: { product },
  };
};
