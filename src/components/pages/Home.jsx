import { HeroBank, PesPatron, backgroundFull } from "../../images";
import { useState } from "react";
import { HomeTiles } from "./home-components/HomeTiles";

function HomePage() {
  const [elementsOnScreen, setElementsOnScreen] = useState(3);

  const viewMore = () => {
    setElementsOnScreen(elementsOnScreen + 3);
  };

  return (
    <div
      className="bg-cover bg-repeat"
    >
      <div className="flex justify-around max-w-screen-xl mx-auto py-20">
        <div className="w-96 p-8 border-10 border-dadada rounded-2xl bg-white">
          <h1 className="text-gray-700 text-3xl font-bold mb-4">
            PesPatron Buy nedorogo
          </h1>
          <p className="text-gray-600">
            Pes patrhon - krutiy pes, kupy pzh pleese
          </p>

        </div>
        <img src={PesPatron} width={500} alt="" />
      </div>
      <div className="flex justify-center items-center py-20">
        <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto">
          {HomeTiles(elementsOnScreen)}
        </div>
      </div>
      {elementsOnScreen < 6 && (
        <div className="flex justify-center items-center pb-20">
          <button
            onClick={viewMore}
            className="text-white bg-gray-700 py-4 px-8 rounded-full font-semibold"
          >
            View more
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
