import MaskAvatar from "./MaskAvatar";

interface ServiceCartProps {
  image_src: string;
  title: string;
  desc: string;
  mask_svg: string;
  id: number;
}

export default function ServiecCart({
  image_src,
  title,
  desc,
  id,
  mask_svg,
}: ServiceCartProps) {
  return (
    <div className="flex flex-col items-center">
      <MaskAvatar image_src={image_src} mask_svg={mask_svg} id={id} />
      <h4 className="text-button font-bold text-center mt-7 mb-4">{title}</h4>
      <p className="body-md text-center">{desc}</p>
    </div>
  );
}
