import { useState } from "react";

import { HeaderRoot } from "../../styles/Header/Header.style"
import { DropDownMenu, Menu, DropDown } from "../../styles/Header/Dropdown/DropdownMenu.style"
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <HeaderRoot>
      <DropDown className={isMenuOpen ? 'active' : ''}>

        <Menu onClick={toggleMenu} className="menu">
          <Link><img className="logo" src="./home-imgs/menu-icon@3x.png" alt="" /></Link>
        </Menu>

        <DropDownMenu $isOpen={isMenuOpen} >
          <li><Link><img className="logo-mini" src="./home-imgs/mini-home-icon@3x.png" alt="" /></Link></li>
          <li><Link><img className="logo-mini" src="./home-imgs/throphy-icon@3x.png" alt="" /></Link></li>
          <li><Link><img className="logo-mini" src="./home-imgs/user-icon@3x.png" alt="" /></Link></li>
        </DropDownMenu>

      </DropDown>
    </HeaderRoot>
  )
}