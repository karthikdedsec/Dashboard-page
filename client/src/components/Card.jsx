import media from "../Assets/media.png";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import twitter from "../Assets/twitter.png";
function Card() {
  return (
    <div className="flex flex-col w-[210px] min-h-[280px] bg-white rounded-lg">
      <div className="flex flex-col items-center">
        <img className="w-[240px] object-contain" src={media} alt="" />
        <p className="font-semibold">john Doe</p>
      </div>
      {/* social icons */}
      <div className="flex flex-col items-center mt-3 gap-3 shadow-lg">
        <p className="text-xs">CEO</p>
        <div className="flex gap-4 p-2">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
export default Card;
