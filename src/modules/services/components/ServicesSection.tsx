import "../styles/index.less";
import { services_data } from "../mock/mock";
import { Col, Row } from "antd";
import ServiecCart from "./ServiecCart";

export default function ServicesSection() {
  return (
    <section className="custom-container py-20">
      <h2 className="h2 font-bold text-center mb-4">
        <mark className="bg-primary text-white px-2">React Native</mark> App
        Development Services on Offer
      </h2>
      <p className="body-xl text-center mx-auto max-w-[1080px] mb-12">
        Developed and supported by the giant company Facebook, React Native
        gains momentum in terms of native app development with cross-platform
        compatibility. This technology perfectly suits rapid development needs,
        allowing the creation of lightweight mobile applications with native
        functionality. Hire React Native developers at Idealink and enjoy time
        and money savings in the delivery of perfectly crafted native apps that
        work great on both iOS and Android. From React Native consulting to
        maintenance, support, and code audit — Idealink has got you covered!
      </p>
      <Row gutter={[16, 80]}>
        {services_data.map((service, index) => {
          return (
            <Col span={8} key={service.title}>
              <ServiecCart
                image_src={service.image_src}
                title={service.title}
                desc={service.desc}
                mask_svg={service.mask_svg}
                id={index}
              />
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
