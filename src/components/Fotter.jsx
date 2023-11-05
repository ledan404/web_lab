import { facebook, instagram, linkedin, twitter } from "../assets/icons";
import { logo } from "../assets/images";

const Fotter = () => {
  return (
  <footer>
    <div className="flex justify-around">
        <div>
          <h3 className="font-bold text-xl">
          Pes Patron inc.
          </h3>
          <p className="max-w-xs">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
        </div>
        <img
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="items-center h-12"
        />
        <div className="flex items-center self-center">
        <img 
        src={facebook} />
        <img
        src={instagram} />
        <img
        src={linkedin} />
        <img
        src={twitter}
        className="h-50px"
          />
        </div>
    </div>
    <p className="flex justify-center">
      Pes Patron compirater and IOT lol kek cheburek
    </p>
  </footer>
)
}
export default Fotter;
