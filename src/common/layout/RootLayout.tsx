import { Layout } from "antd";
import HeaderComp from "./Header";

const { Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Layout>
        <HeaderComp />
        <Content>{children}</Content>
      </Layout>
    </>
  );
}
