import { Drawer, Menu, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";

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

interface HeaderMobileMenuProps {
  open: boolean;
  onClose(): void;
  onClick(e: any): MenuProps["onClick"];
  current: any;
}

export default function HeaderMobileMenu({
  open,
  onClose,
  onClick,
  current,
}: HeaderMobileMenuProps) {
  return (
    <Drawer placement={"right"} closable={false} onClose={onClose} open={open}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        className="navigation__menu 2xl:link-lg text-[#333] grow"
        items={items}
      />
    </Drawer>
  );
}
