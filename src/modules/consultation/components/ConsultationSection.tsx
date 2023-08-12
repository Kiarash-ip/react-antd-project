import { Button, theme } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import consultationBg from "../../../../public/svg/consultation-bg.svg";
import WhiteTriangle from "../../../../public/svg/white-triangle.svg";
import RedTriangle from "../../../../public/svg/red-triangle.svg";
import RedPlus from "../../../../public/svg/red-plus.svg";
import OrangeHalfCircle from "../../../../public/svg/orange-halfcircle.svg";

export default function ConsultationSection() {
  const { token } = theme.useToken();

  return (
    <section className="custom-container py-20">
      <div
        className="relative bg-primary rounded-3xl py-10 px-11 flex flex-col items-center gap-10"
        style={{
          background: `${token.colorPrimary} url(${consultationBg}) center/120% no-repeat`,
        }}
      >
        <p className="h2 font-bold text-white text-center">
          Whatever your software challenge is, our Solution Architecture experts
          are ready to help you with complex processes. Schedule a free
          consultation.
        </p>
        <Button
          type="primary"
          className="bg-white text-primary uppercase button-xl h-auto pr-1 pl-6 flex items-center mb-8 hover:!bg-danger"
        >
          Request consultation
          <ArrowRightOutlined
            className="p-3 rounded-lg bg- text-white"
            style={{ backgroundColor: token.colorError }}
          />
        </Button>
        <div className="absolute top-[29px] right-[46px]">
          <img src={WhiteTriangle} />
        </div>
        <div className="absolute top-[115px] left-[51px]">
          <img src={RedTriangle} />
        </div>
        <div className="absolute top-[20px] left-[31px]">
          <img src={OrangeHalfCircle} />
        </div>
        <div className="absolute top-[125px] right-[52px]">
          <img src={RedPlus} />
        </div>
      </div>
    </section>
  );
}
