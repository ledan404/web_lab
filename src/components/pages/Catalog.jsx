import { PesPatron } from "../../images";
import { Apply, applyFilters } from "./catalog-components/ApplyButton";
import { FiltersList } from "./catalog-components/FilterSelect";
import { useState } from "react";

function CatalogPage({ dogs, catalogSearch }) {
  const [sortedDogs, setSortedDogs] = useState([...dogs]);

  const [selectedFilters, setSelectedFilters] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
  ]);

  const handleApplyFilters = () => {
    const updateddogs = applyFilters(dogs, selectedFilters, catalogSearch);
    setSortedDogs(updateddogs);
  };

  return (
    <div>
      <header className="flex justify-around items-center py-5 border-b-10 border-gray-300">
        <FiltersList setSelectedFilters={setSelectedFilters} />
        <Apply onClick={handleApplyFilters}>Apply</Apply>
      </header>
      <div
        className="flex flex-wrap justify-center items-center"
        
      >
        {sortedDogs.map((dogs) => (
          <div
            key={dogs.id}
            className="border-2 border-gray-700 rounded-md m-4 shadow-md"
          >
            <div className="bg-dadada rounded-b-md pb-2">
              <h2 className="text-black font-semibold text-sm p-2">{`Dog ${dogs.id}`}</h2>
            </div>
            <div className="bg-white p-2">
              <div className="h-40 w-32 mx-auto">
                <img
                  src={PesPatron}
                  alt="Dog"
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <h1 className="text-center text-gray-700 text-lg p-2">
                {dogs.name}
              </h1>
              <h2 className="text-left text-gray-500 font-medium text-base pb-4">
                {dogs.description}
              </h2>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-gray-700 text-base">Has defused mins:</h1>
                  <h2 className="text-gray-500 text-base">{dogs.Mina}</h2>
                </div>
                <div>
                  <h1 className="text-gray-700 text-base">Paws:</h1>
                  <h2 className="text-gray-500 text-base">{dogs.paws}</h2>
                </div>
                <div>
                  <h1 className="text-gray-700 text-base">Price:</h1>
                  <h2 className="text-gray-500 text-base">{`$ ${dogs.price}`}</h2>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <a
                  href={`/dogs/${dogs.id}`}
                  className="text-white bg-gray-700 py-2 px-4 rounded-full text-base inline-block"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
