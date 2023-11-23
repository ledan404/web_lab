import { PesPatron } from "../../../images";
export const HomeTiles = (elementsOnScreen) => {
  const dogs = [
    {
      img: PesPatron,
      heading: "Pes Patron",
      subHeading:
        "Lolrem impusm bla bla bla lol kek cheburek. ",
    },
    {
      img: PesPatron,
      heading: "Pes Patron",
      subHeading:
        "Lolrem impusm bla bla bla lol kek cheburek. ",
    },{
      img: PesPatron,
      heading: "Pes Patron",
      subHeading:
        "Lolrem impusm bla bla bla lol kek cheburek. ",
    },{
      img: PesPatron,
      heading: "Pes Patron",
      subHeading:
        "Lolrem impusm bla bla bla lol kek cheburek. ",
    },{
      img: PesPatron,
      heading: "Pes Patron",
      subHeading:
        "Lolrem impusm bla bla bla lol kek cheburek. ",
    },{
      img: PesPatron,
      heading: "Pes Patron",
      subHeading:
        "Lolrem impusm bla bla bla lol kek cheburek. ",
    },
  ];

  return dogs.slice(0, elementsOnScreen).map((dog, index) => (
    <div
      key={index}
      className="w-96 p-20 border-10 border-solid border-dadada rounded-20 bg-white m-20"
    >
      <img
        src={dog.img}
        className="rounded-10 w-250px h-200px object-cover"
        alt={dog.heading}
      />
      <p className="m-0 text-center pt-10 pb-20 text-474747 font-bold text-18px">
        {dog.heading}
      </p>
      <p className="m-0 text-center text-929292 font-semibold text-14px">
        {dog.subHeading}
      </p>
    </div>
  ));
};