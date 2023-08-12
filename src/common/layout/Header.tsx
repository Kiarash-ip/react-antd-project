import { useState } from "react";
import { Button, Layout, Menu, theme, Image } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PhoneCalling from "/public/svg/call-calling.svg";
import { ReactSVG } from "react-svg";
import Logo from "/public/images/Logo.png";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "Home",
  },
  {
    label: "Services",
    key: "Services",
    icon: <DownOutlined />,
    children: [
      {
        label: "option 1",
        key: "option-1",
      },
      {
        label: "option 2",
        key: "option-2",
      },
      {
        label: "option 3",
        key: "option-3",
      },
    ],
  },
  {
    label: "Our work",
    key: "Our-work",
  },
  {
    label: "Insights",
    key: "Insights",
  },
  {
    label: "Technologies",
    key: "Technologies",
  },
  {
    label: "Clients",
    key: "Clients",
  },
  {
    label: "Case studies",
    key: "Case-studies",
  },
  {
    label: "Contact us",
    key: "Contact-us",
  },
];

const { Header } = Layout;

export default function HeaderComp() {
  const [current, setCurrent] = useState("mail");
  const { token } = theme.useToken();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Header className="header">
      <div className="header__container w-full custom-container flex items-center  gap-6">
        <Image src={Logo} width={40} preview={false} alt="logo" />
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="navigation__menu link-lg text-[#333] grow"
          items={items}
        />
        <Button
          type="primary"
          style={{ backgroundColor: token.colorError }}
          className="flex items-center py-6 px-3 button-lg uppercase ml-auto"
          icon={<ReactSVG src={PhoneCalling} className="w-6 h-6" />}
        >
          Get in touch
        </Button>
      </div>
    </Header>
  );
}
