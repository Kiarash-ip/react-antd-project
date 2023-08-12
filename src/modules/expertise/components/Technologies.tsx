import { useState } from "react";
import { expertise_fields } from "../mock/mock";
import { Button, Image } from "antd";
import clsx from "clsx";

export default function Technologies() {
  const [activeField, setActiveField] = useState<number>(0);
  return (
    <div className="">
      <div className="flex justify-center items-center gap-4 mb-16">
        {expertise_fields.map((field, index) => {
          return (
            <Button
              onClick={() => setActiveField(index)}
              type="primary"
              className={clsx(
                "button-md px-4 py-6 bg-[#E4EDE8] text-typo rounded-3xl flex items-center h-auto",
                activeField === index ? "active-btn" : ""
              )}
            >
              {field.title}
            </Button>
          );
        })}
      </div>
      <div className="container mx-auto flex items-center justify-between">
        {expertise_fields[activeField].technologies.map((tech) => {
          return <Image src={tech.img_src} height={50} preview={false} />;
        })}
      </div>
    </div>
  );
}
