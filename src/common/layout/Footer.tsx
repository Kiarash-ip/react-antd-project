import { Image, Layout, theme, Button, Space, Divider } from "antd";
import Logo from "/public/images/Logo.png";
import FooterBg from "/public/svg/footer-bg.svg";
import Be from "/public/svg/be.svg";
import Telegram from "/public/svg/telegram.svg";
import Facebook from "/public/svg/facebook.svg";
import Instagram from "/public/svg/instagram.svg";
import Youtube from "/public/svg/youtube.svg";

const social_links = [
  {
    id: 0,
    icon_src: Be,
    href: "#",
  },
  {
    id: 1,
    icon_src: Telegram,
    href: "#",
  },
  {
    id: 2,
    icon_src: Facebook,
    href: "#",
  },
  {
    id: 3,
    icon_src: Instagram,
    href: "#",
  },
  {
    id: 4,
    icon_src: Youtube,
    href: "#",
  },
];

const footer_links = [
  {
    id: 0,
    title: "Web Design",
    href: "#",
  },
  {
    id: 1,
    title: "WebServer Development",
    href: "#",
  },
  {
    id: 2,
    title: "Mobile Apps",
    href: "#",
  },
  {
    id: 3,
    title: "Consulting",
    href: "#",
  },
  {
    id: 4,
    title: "E-Commerce",
    href: "#",
  },
  {
    id: 5,
    title: "Seed Investment",
    href: "#",
  },
];

const { Footer } = Layout;

export default function FooterComp() {
  return (
    <Footer
      style={{
        background: `#212035 url(${FooterBg}) center/100% no-repeat`,
      }}
    >
      <div className="custom-container  flex flex-col items-center">
        <Image
          src={Logo}
          width={40}
          preview={false}
          className="mb-9"
          alt="logo"
        />
        <Space size={"large"} className="w-full justify-between flex-wrap">
          {footer_links.map((link) => (
            <Button
              key={link.id}
              type="link"
              className="body-lg text-white hover:!text-primary"
            >
              {link.title}
            </Button>
          ))}
        </Space>
        <Divider orientation="center" style={{ borderColor: "#fff" }} />
        <div className="flex items-center justify-between w-full">
          <Space size={24}>
            <Button
              type="link"
              className="body-lg text-white hover:!text-primary"
            >
              FAQ
            </Button>
            <Button
              type="link"
              className="body-lg text-white hover:!text-primary"
            >
              Licenses
            </Button>
          </Space>
          <Space className="flex-wrap" size={40}>
            {social_links.map((social) => {
              return (
                <Image key={social.id} src={social.icon_src} height={32} />
              );
            })}
          </Space>
        </div>
      </div>
    </Footer>
  );
}
