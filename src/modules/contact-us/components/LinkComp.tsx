import React from "react";

interface LinkComp {
  icon_src: string;
  method_name: string;
  method_link: string;
}

export default function LinkComp({
  icon_src,
  method_name,
  method_link,
}: LinkComp) {
  return (
    <div className="bg-white p-5 flex gap-4 items-center rounded-3xl">
      <div className="bg-primary rounded-3xl w-[88px] h-[88px] flex justify-center items-center">
        <img src={icon_src} className="h-11 object-contain" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="title-bold">{method_name}</p>
        <p className="body-md">{method_link}</p>
      </div>
    </div>
  );
}
