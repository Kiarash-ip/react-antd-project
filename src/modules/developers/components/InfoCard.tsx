import { Card, Descriptions } from "antd";

const { Meta } = Card;

interface InfoCardProps {
  avatar_src: string;
  fullName: string;
  position: string;
  biography: string;
  techs: string;
}

export default function InfoCard({
  avatar_src,
  fullName,
  position,
  biography,
  techs,
}: InfoCardProps) {
  return (
    <Card
      bordered={false}
      className="info_card--container rounded-3xl"
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
      cover={
        <div>
          <img alt="example" className="mx-auto" src={avatar_src} />
        </div>
      }
    >
      <Meta title={fullName} description={position} />
      <p className="body-md leading-[30px] text-center mb-4">{biography}</p>
      <p className="body-md text-[15px] text-caption">{techs}</p>
    </Card>
  );
}
