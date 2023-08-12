import { Image } from "antd";
import GreenAvatarBg from "../../../../public/svg/green-avatar-bg.svg";
import { ReactSVG } from "react-svg";
interface MaskAvatarProps {
  image_src: string;
  id: number;
  mask_svg: string;
}

export default function MaskAvatar({
  image_src,
  mask_svg,
  id,
}: MaskAvatarProps) {
  return (
    <div className="relative w-[200px] h-[163px]">
      <ReactSVG
        beforeInjection={(svg) => {
          let clipPath = svg.querySelector("clipPath");
          clipPath?.setAttribute("id", `curved-shape-${id}`);
        }}
        src={mask_svg}
        className="absolute"
      />
      {/* <MaskShape id={id} path={path} /> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200"
        height="164"
        viewBox="0 0 200 164"
        fill="none"
        className="absolute"
      >
        <defs>
          <clipPath id="shape">
            <path d={path} />
          </clipPath>
        </defs>
      </svg> */}
      <div className="absolute inset-0">
        <Image
          src={GreenAvatarBg}
          className="w-full h-full object-contain scale-110"
          width="100%"
          height="100%"
          preview={false}
        />
      </div>
      <Image
        className={`avatar_img-${id}`}
        src={image_src}
        preview={false}
        width="100%"
        height="100%"
      />
    </div>
  );
}
