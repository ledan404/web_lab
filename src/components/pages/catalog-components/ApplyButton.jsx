import { getSortedWithFilter } from "../../api";
// Apply.js
export const Apply = ({ children, onClick }) => (
    <button
      className="border-2 border-solid border-black rounded-10 px-6 py-2 cursor-pointer transition duration-300 hover:bg-gray-300 active:bg-gray-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
  
  export const applyFilters = async (dogs, selectedFilters, catalogSearch) => {
    const filter = selectedFilters.find(filter => filter.value !== "");
    
    let sortedDogs = [...dogs];

    if (filter) {
        const data = await getSortedWithFilter(filter);
        sortedDogs = data;
    }

    if (catalogSearch) {
        sortedDogs = sortedDogs.filter(dog => 
            dog.name.toLowerCase().includes(catalogSearch.toLowerCase())
        );
    }

    return sortedDogs;
}

