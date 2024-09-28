import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function Navber() {
  const [theme, setTheme] = useState(true);
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

      <div>
        <ul className="flex items-center gap-5 cursor-pointer text-gray-600 text-lg">
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

      <div>
        <ul className="flex items-center gap-2 text-3xl">
          <li>
            <IoIosNotificationsOutline />
          </li>
          <li className="text-gray-500">
            <FaUserCircle />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navber;
