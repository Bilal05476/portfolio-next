import Link from "next/link";
// import Shantell_Sans from "next/font";

const Header = () => {
  return (
    <div className="p-5 lg:px-36 px-6 flex flex-col md:flex-row justify-between items-center">
      <h4 className="font-bold uppercase text-lg text-gray-600">Bilal Ahmed</h4>
      <div className="mt-4 md:mt-0">
        {["About", "Project", "Blog", "Hire me"].map((item) => (
          <Link
            className="text-sm text-gray-600 hover:text-base hover:text-gray-900 subpixel-antialiased font-semibold mr-4 capitalize"
            key={item}
            href="#"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
