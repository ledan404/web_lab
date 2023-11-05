import { PesPatron } from '../assets/images'
const Hero = () => {
  return (
    <section 
      id="hero"
      className="flex justify-around gap-16 m-auto items-center w-full">
      <img className=""
        width={433}
        height={286}
        src={PesPatron} 
      alt="Patron de perros"
      />
      <div className="w-320">
        <h1 className="font-bold"> Dogs </h1>
        <p className="max-w-2xl"> Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor. </p>
      </div>
    </section>
  );
  
};

export default Hero;
