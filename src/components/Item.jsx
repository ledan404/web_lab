import { PesPatron } from "../assets/images";
let title = "PesPatron";
const Item = () => {
  return (
    <div className="w-96">
      <img
      src={PesPatron}
      width={325}
      height={215}
      alt="PesPatron"
        />
      <h2 className="font-bold">{title}</h2>
      <p> Lorem ipsum dolor sit amet, qui minim labore 
      adipisicing minim sint cillum sint consectetur cupidatat.</p>
  </div>
  )
};
export default Item;
