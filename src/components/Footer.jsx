import { Logo, facebook, googlep, twitter, linkedin } from "../images";

function Footer() {
  return (
    <footer className="border-t-10 border-gray-300">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <div className="flex items-center w-2/5">
          <div className="w-2/3">
            <h1 className="m-0 text-gray-700 text-lg">Branding stuff</h1>
            <h2 className="m-0 text-gray-500 text-sm font-semibold">Lorem bla bla bla bal asdasdsad adsasdsa asdsad</h2>
          </div>
        </div>
        <div className="w-1/5 flex items-center justify-center">
          <img src={Logo} width={80} height={80} />
        </div>
        <div className="w-2/5 flex items-center justify-end space-x-4">
          <img src={facebook} />
          <img src={googlep} />
          <img src={linkedin} />
          <img src={twitter} />
        </div>
      </div>
      <div className="h-2 bg-gray-700 w-95 mx-auto"></div>
      <div className="text-center py-8 text-gray-500 font-light">
        <h2 className="text-sm font-semibold">2020 IoT © Copyright all rights reserved, bla bla</h2>
      </div>
    </footer>
  );
}

export default Footer;
