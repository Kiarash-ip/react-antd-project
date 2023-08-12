import GreenBuble from "../../../public/svg/green-buble.svg";
import ProfileMask from "../../../public/svg/profile-mask.svg";
import CurvedCircle from "../../../public/svg/curved-circle.svg";
import GreenCircle from "../../../public/svg/green-circle.svg";
import RedCircle from "../../../public/svg/red-circle.svg";
import OrangeCircle from "../../../public/svg/orange-circle.svg";
import RedTriangle from "../../../public/svg/red-triangle.svg";
import GreenTriangle from "../../../public/svg/green-triangle.svg";
import RedHalfCircle from "../../../public/svg/red-halfcircle.svg";
import GreenHalfCircle from "../../../public/svg/green-halfcircle.svg";
import RedPlus from "../../../public/svg/red-plus.svg";
import GreenPlus from "../../../public/svg/green-plus.svg";

export default function CustomHeroShapes() {
  return (
    <div className="reltaive aspect-square hero_custom__shape--container">
      <div className="ladder__shape-bg"></div>
      <div className="shadow__circle-bg"></div>
      <div className="green__mask">
        <img src={GreenBuble} />
      </div>
      <div className="profile__mask">
        <img src={ProfileMask} />
      </div>
      <div className="curved__circle">
        <img src={CurvedCircle} />
      </div>
      <div className="green__circle">
        <img src={GreenCircle} />
      </div>
      <div className="orange__circle">
        <img src={OrangeCircle} />
      </div>
      <div className="red__circle">
        <img src={RedCircle} />
      </div>
      <div className="triangle-halfcircle">
        <img src={RedHalfCircle} className="halfcircle" />
        <img src={GreenTriangle} className="triangle" />
      </div>
      <div className="halfcircle-plus">
        <img src={GreenHalfCircle} className="halfcircle" />
        <img src={RedPlus} className="plus" />
      </div>
      <div className="triangle-plus">
        <img src={RedTriangle} className="triangle" />
        <img src={GreenPlus} className="plus" />
      </div>
    </div>
  );
}
