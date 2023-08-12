import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./common/styles/index.less";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#fff",
          colorError: "#F64949",
          fontFamily: "Poppins",
        },
        components: {
          Button: {
            colorPrimary: "#34ce72",
            colorPrimaryHover: "#0cce5a",
          },
          Layout: {
            colorBgHeader: "#FFFFFF",
            colorBgBody: "#F2F4F3",
          },
          Menu: {},
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
