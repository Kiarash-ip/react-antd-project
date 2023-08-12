import { Col, Row } from "antd";
import { developers_information } from "../mock/mock";
import InfoCard from "./InfoCard";
import "../styles/index.less";

export default function Developers() {
  return (
    <section className="custom-container py-20">
      <h2 className="h2 font-bold text-center mb-4">
        <mark className="bg-primary text-white px-2">Idealink’s</mark> React
        Native experts
      </h2>
      <p className="body-xl text-center mx-auto max-w-[1080px] mb-10">
        Hire the high-end specialists you need. Get CVs in no time, and our
        dedicated team will start working on your project with full
        responsibility so that you can receive an outstanding software solution.
      </p>
      <Row gutter={[20, 20]}>
        {developers_information.map((item) => {
          return (
            <Col xl={8} md={12} span={24} key={item.id}>
              <InfoCard
                avatar_src={item.avatar_src}
                fullName={item.fullName}
                position={item.position}
                biography={item.biography}
                techs={item.techs}
              />
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
