import { Card, Button } from "antd";
import { projects_data } from "../mock/mock";
import { Swiper, SwiperSlide } from "swiper/react";
import LocIcon from "../../../../public/svg/location.svg";
import { ReactSVG } from "react-svg";
import "swiper/css";
import "../styles/index.less";

const { Meta } = Card;

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <h3 className="h2 font-bold text-center mb-4">Featured case studies</h3>
      <p className="body-xl mx-auto text-center max-w-[860px] mb-10">
        Take a look at some of our recently completed projects to get a clear
        picture of how we can meet your design needs.
      </p>
      <Swiper slidesPerView={"auto"} spaceBetween={20} className="w-full">
        {projects_data.map((project) => {
          return (
            <SwiperSlide style={{ width: "310px" }}>
              <Card
                bordered={false}
                className="project-card"
                bodyStyle={{
                  padding: "0 20px 20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                cover={
                  <div>
                    <img
                      alt="project image"
                      className="mx-auto"
                      src={project.image_src}
                    />
                  </div>
                }
              >
                <Meta
                  title={project.title}
                  description={`Country: ${project.country}`}
                />
                <p className="body-md text-center my-6">{project.desc}</p>
                <Button className="button-xl px-4 py-3 rounded-lg bg-primary text-white uppercase w-full h-auto">
                  view
                </Button>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
