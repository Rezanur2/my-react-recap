import { FaRegBookmark } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">Browse</a>
              </li>
              <li>
                <a href="#">Companies</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Post a Job</a>
              </li>
            </ul>
          </div>
          <p className="font-bold text-2xl">
            Dev<span className="text-orange-500">Jobs</span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#">Browse</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Post a Job</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-neutral">
            <FaRegBookmark />
            Dev Jobs • 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
