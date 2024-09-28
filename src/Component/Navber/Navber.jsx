import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navber() {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
  function handleMenu() {}
  function handleClick() {
    setTheme(!theme);
  }

  return (
    <div className="w-5/6 mx-auto p-4 flex items-center justify-between">
      {/* logo */}
      <div>
        <h1 className="text-3xl font-semibold">UniWise</h1>
      </div>

      {/* navigate link */}

      <div className="hidden lg:block">
        <ul className="flex flex-col lg:flex-row  items-center gap-5 cursor-pointer text-gray-600 text-lg">
          <li>Home</li>
          <li className="flex items-center gap-2">
            <span>
              <FiEdit />
            </span>
            Write a blog
          </li>
          <li onClick={handleClick}>{theme ? <MdDarkMode /> : <CiLight />}</li>
        </ul>
      </div>
      {/* profile */}

      <div className="hidden lg:block">
        <ul className="flex items-center gap-2 text-3xl text-gray-500">
          <li>
            <IoIosNotificationsOutline />
          </li>
          <li>
            <FaUserCircle />
          </li>
        </ul>
      </div>

      <div className=" block lg:hidden text-3xl text-gray-600">
        <CiMenuFries />
      </div>
    </div>
  );
}

export default Navber;
