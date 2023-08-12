import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../styles/index.less";
import LocationWhite from "../../../../public/svg/location-white.svg";
import PhoneWhite from "../../../../public/svg/phone-white.svg";
import MessageWhite from "../../../../public/svg/message-white.svg";
import LinkComp from "./LinkComp";

const links_data = [
  {
    id: 0,
    method_name: "Location",
    method_link: "Silhet, Bangeladesh",
    icon_src: LocationWhite,
  },
  {
    id: 1,
    method_name: "Phone",
    method_link: "+1 123 458 1512",
    icon_src: PhoneWhite,
  },
  {
    id: 2,
    method_name: "Email",
    method_link: "Silhet, Bangeladesh",
    icon_src: MessageWhite,
  },
];

const { TextArea } = Input;

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  email?: string;
  remember?: string;
};

export default function ContactUs() {
  return (
    <section className="custom-container py-20">
      <Row gutter={[20, 20]}>
        <Col lg={12} span={24}>
          <h3 className="h2 text-left mb-4">Contact us</h3>
          <p className="body-xl text-left max-w-[640px] mb-12">
            If you are looking for a technology partner for your business, fill
            out the form above and we will contact you shortly.
          </p>
          <Form
            className="contact-us__form"
            name="basic"
            labelCol={{ span: 16 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                size="large"
                placeholder="Name"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                size="large"
                placeholder="Email"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <TextArea
                placeholder="Your Request"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="bg-primary text-2xl font-semibold text-white py-4 h-auto w-full"
                type="primary"
                htmlType="submit"
              >
                Send Request
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col lg={12} span={24}>
          <Space className="w-full" direction="vertical" size={"middle"}>
            {links_data.map((link) => {
              return (
                <LinkComp
                  key={link.id}
                  method_name={link.method_name}
                  method_link={link.method_link}
                  icon_src={link.icon_src}
                />
              );
            })}
          </Space>
        </Col>
      </Row>
    </section>
  );
}
