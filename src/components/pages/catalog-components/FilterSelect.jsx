import styled from "styled-components";

const FilterOptions = [
  { id: 1, value: "Mina", text: "Number of Mins" },
  { id: 2, value: "paws", text: "Number of Paws" },
  { id: 3, value: "price", text: "Price" },
];

const filterChange = (event, setSelectedFilters) => {
  const selectedOption = event.target;
  const findedOptionByVal = FilterOptions.find(
    (opt) => opt.value == selectedOption.value,
  );
  const findedOptionById = FilterOptions.find(
    (opt) => opt.id == selectedOption.value,
  );
  if (findedOptionByVal) {
    setSelectedFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters[findedOptionByVal.id - 1] = { value: selectedOption.value };
      return newFilters;
    });
  } else if (findedOptionById) {
    setSelectedFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters[findedOptionById.id - 1] = { value: "" };
      return newFilters;
    });
  }
};

export const FiltersList = ({ setSelectedFilters }) => (
  <div className="flex h-11 border-4 border-black rounded-3xl">
    {FilterOptions.map((filterOption) => (
      <div className="flex ">
        <select
          className="flex "
          onChange={(event) => filterChange(event, setSelectedFilters)}
        >
          <option value={filterOption.id}>Filter by:</option>
          <option value={filterOption.value}>{filterOption.text}</option>
        </select>
      </div>
    ))}
  </div>
);
