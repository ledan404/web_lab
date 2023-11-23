import { PesPatron } from "../assets/images";
import MoreButtom from "./MoreButton";
function ItemCatalog (title, cost){
  return(
    <div className="flex">
    <div className="w-96 border-black border-4 rounded-3xl justify-center items-center flex flex-col py-4">
      <img
      src={PesPatron}
      width={325}
      height={215}
      alt="PesPatron"
      className="justify-center flex"
        />
      <h2 className="font-bold">{title}</h2>
      <p className="pl-7"> Lorem ipsum dolor sit amet, qui minim labore 
      adipisicing minim sint cillum sint consectetur cupidatat.</p>
      <p className="justify-center flex">Price {cost}$</p>
      <MoreButtom />
  </div>
    </div>
  )
}
export let ItemsArray = [
  {
    title: "PesPatron",cost: 600,
  },
  {
    title: "PesPatron",cost: 600,
  },{
    title: "PesPatron",cost: 600,
  },{
    title: "PesPatron",cost: 600,
  },
];
export default ItemCatalog;
