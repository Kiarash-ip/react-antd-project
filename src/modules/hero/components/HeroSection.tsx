import { Breadcrumb, Row, Col, Button, Typography, Space } from "antd";
import CustomHeroShapes from "../../../common/components/CustomHeroShapes";
import "../styles/index.less";
import { ArrowRightOutlined } from "@ant-design/icons";
import { statistic_data } from "../mock/mock";
import StatisticsComp from "./StatisticsComp";
import GroupShape from "../../../../public/svg/Group 35473.svg";

export default function HeroSection() {
  return (
    <section className="pb-28">
      <div className="custom-container">
        <Breadcrumb style={{ margin: "16px 0" }} className="text-typo">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Technologies</Breadcrumb.Item>
          <Breadcrumb.Item className="text-primary">
            React Native
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row align={"middle"}>
          <Col span={11}>
            <Typography.Title className="h1 hero_title mb-6">
              <mark className="text-white">React</mark> Native Development
              Company
            </Typography.Title>
            <h6 className="h6 mb-[38px]">
              Are you looking for a way to ensure your business presence on the
              leading mobile platforms without breaking the bank?
            </h6>
            <Button
              type="primary"
              className="bg-primary uppercase button-xl h-auto pr-1 pl-6 flex items-center mb-8"
            >
              WE ARE HERE TO HELP
              <ArrowRightOutlined className="p-3 rounded-lg bg-white text-primary" />
            </Button>
            <Space size={"large"}>
              {statistic_data.map((item) => (
                <StatisticsComp numeral={item.numeral} desc={item.desc} />
              ))}
            </Space>
          </Col>
          <Col span={12}>
            <CustomHeroShapes />
          </Col>
        </Row>
        <div className="rounded-3xl bg-white shadow-[0px_16px_32px_-8px_#18231d1c] px-[18px] py-8 flex items-center gap-5">
          <div className="w-[85px] h-[76px]">
            <img src={GroupShape} className="w-full h-full object-cover" />
          </div>
          <p className="body-lg font-bold">
            Take advantage of our expertise in React Native development and get
            the desired opportunity to hit both iOS and Android markets with
            cost-effective native mobile apps.
          </p>
        </div>
      </div>
    </section>
  );
}
