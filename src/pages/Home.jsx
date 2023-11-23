import Hero from "../components/Hero";
import Item from "../components/Item";
import MoreButtom from "../components/MoreButton";
const Home = () => {
  return (
    <>
    <section className="pt-40">
        <Hero />
    </section>
    <section className="flex justify-center gap-16 pt-40">
        <Item />
        <Item />
        <Item />
    </section>
    <section className="justify-center py-10 flex">
      < MoreButtom />
    </section>
    </>
);
};
export default Home;
