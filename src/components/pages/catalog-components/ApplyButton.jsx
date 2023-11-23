// Apply.js
export const Apply = ({ children, onClick }) => (
    <button
      className="border-2 border-solid border-black rounded-10 px-6 py-2 cursor-pointer transition duration-300 hover:bg-gray-300 active:bg-gray-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
  
  export const applyFilters = (dogs, selectedFilters, catalogSearch) => {
    let sortedDogs = [...dogs];
  
    if (catalogSearch) {
      sortedDogs = sortedDogs.filter((dog) => {
        return dog.name.toLowerCase().includes(catalogSearch.toLowerCase());
      });
    }
  
    if (selectedFilters[0].value === "Mina") {
      sortedDogs.sort((dogL, dogR) => {
        return dogR.Mina - dogL.Mina;
      });
    }
  
    if (selectedFilters[1].value === "paws") {
      sortedDogs.sort((dogL, dogR) => {
        return dogR.paws - dogL.paws;
      });
    }
  
    if (selectedFilters[2].value === "price") {
      sortedDogs.sort((dogL, dogR) => {
        return dogR.price - dogL.price;
      });
    }
  
    return sortedDogs;
  };
  