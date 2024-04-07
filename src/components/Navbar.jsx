import { Link } from "react-router-dom";
import logoNavbar from "../../images/logo-doncreati.png";
import magnifyingGlassIcon from "../../images/magnifying-glass.png";
import notificationsIcon from "../../images/notifications.png";
import userIcon from "../../images/user.png";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between px-2 py-2">
      <Link to={"/"}>
        <img className="w-52" src={logoNavbar} alt="Main Logo" />
      </Link>

      <ul className="flex items-center">
        <li className="me-3">
          <img
            className="w-7 pe-2 border-r border-gray-300"
            src={magnifyingGlassIcon}
            alt="Magnifying Glass Icon"
          />
        </li>

        <li className="me-3">
          <img
            className="w-7 pe-2 border-r border-gray-300"
            src={notificationsIcon}
            alt="Notifications Icon"
          />
        </li>

        <li className="me-3">
          <img className="w-4" src={userIcon} alt="User Icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
