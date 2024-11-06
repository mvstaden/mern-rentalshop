import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="px-5">
      <div className="flex justify-between items-center min-h-16 w-full">
        <a href="#" className="hidden md:flex">
          Rental Shop
        </a>
        <div className="hidden md:flex">
          <ul className="flex">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>

        <div className="flex gap-3">
          <FaUser />
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
