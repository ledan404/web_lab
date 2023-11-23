import Select from '../components/Select';
import ApplyButton from './ApplyButton';

const CatalogFilters = () => {
    const typeOptions = [
        { value: "type", label: "Any type" },
        { value: "type", label: "Poroda" },
        { value: "type", label: "Napiv" },
  ];

    const brandOptions = [
        { value: "brand", label: "Patron" },
        { value: "brand", label: "Paton" },
        { value: "brand", label: "Pes" },
    ];

    const priceOptions = [
        { value: "price", label: "more then 2000$" },
        { value: "price", label: "up to 2000$" },
        { value: "price", label: "All" },
    ];

    
const typeSettings = {
    id: 'filters__by-type',
    label: 'Filter by type:',
    name: 'type',
    className: 'type',  // Corrected property name
}

const brandSettings = {
    id: 'filters__by-brand',
    label: 'Filter by brand:',
    name: 'brand',
    className: 'brand',  // Corrected property name
}

const priceSettings = {
    id: 'filters__by-price',
    label: 'Filter by price:',
    name: 'price',
    className: 'price',  // Corrected property name
}
    const selectArray = [
        { options: typeOptions, settings: typeSettings },
        { options: priceOptions, settings: priceSettings },
        { options: brandOptions, settings: brandSettings },
    ];



   return (
    <section className="filters flex justify-between">
      <div className="filters__all flex justify-between border-4 h-16 rounded-3xl border-black p-4 gap-16">
        {selectArray.map((select, index) => (
          <Select key={index} options={select.options} settings={select.settings} />
        ))}
      </div>
     <ApplyButton /> 
    </section>
  );
};

export default CatalogFilters;
