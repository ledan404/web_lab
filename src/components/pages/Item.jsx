import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PesPatron } from "../../images";

function ItemPage({ dogs }) {
  const { id } = useParams();
  const itemId = id;
  const [dog, setDog] = useState();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const selectedDog = dogs.find((dogParam) => dogParam.id === itemId);
    setDog(selectedDog);
    setPrice(parseInt(selectedDog.price));
  }, [dogs, itemId]);



  if (dog) {
    return (
      <div className="bg-cover bg-repeat">
        <div className="flex justify-between max-w-screen-xl mx-auto py-20">
          <img  className="w-1/2 h-auto border-10 border-dadada rounded-2xl"  src={PesPatron}/>
          <div className="w-1/2 p-8 border-10 border-dadada rounded-2xl bg-white">
            <div className="flex">
            </div>
            <div className="ml-4 mt-4">
              
                <div>
                  <h1 className="text-black text-2xl font-semibold mb-4">{dog.name}</h1>
                  <p className="text-gray-500">{dog.description}</p>
                </div>
            </div>
        
          </div>
        </div>
        <div className="py-6">
          <div className="flex justify-between mx-auto max-w-screen-xl bg-white border-10 border-dadada rounded-2xl p-10">
            <p className="text-black text-2xl font-semibold mb-4">Price: ${dog.price}</p>
            <div className="flex items-center">
              <a href="/catalog" className="py-2 px-6 border-2 rounded-10 cursor-pointer focus:outline-none">
                Go back
              </a>
              <button className="py-2 px-6 ml-4 border-2 rounded-10 cursor-pointer focus:outline-none bg-black text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
