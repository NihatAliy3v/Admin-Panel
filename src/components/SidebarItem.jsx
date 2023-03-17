import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

export const SidebarItem = ({ itemName, subItem, itemPath }) => {
  const [opened, setOpened] = useState(false);

  return (
    <li className="nav-item">
      <Link className="nav-text" onClick={() => setOpened(!opened)}>
        {itemName}
        <BiChevronDown className="arrow-icon" />
      </Link>
      {opened && (
        <ul className="drop-list">
          <li className="drop-item">
            {subItem.map((subItem) => (
              <Link to={`/${subItem.itemPath}`} className="nav-link">
                {subItem.itemName}
              </Link>
            ))}
          </li>
        </ul>
      )}
    </li>
  );
};
