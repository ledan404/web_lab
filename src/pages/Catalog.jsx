import Filter from "../components/Filter";
import ItemCatalog, { ItemsArray } from "../components/ItemCatalog";

const Catalog = () => {
  return (
    <>
      <section className="pt-14">
      <Filter />
      </section>
      <section className="flex pt-10 pb-96 justify-center items-center gap-10 max-container">
        {ItemsArray.map ((Item)=>{
          return(ItemCatalog(Item.title, Item.cost))
        })}
      </section>
    </>
);
};
export default Catalog;
