import { HeaderRoot } from "../../styles/Header/Header.style"
import { DropDownMenu, Menu, DropDown } from "../../styles/Header/Dropdown/DropdownMenu.style"
import { Link } from 'react-router-dom'
import { useNavContext } from "../../context/navigation";

export default function Header() {

  const { isMenuOpen, toggleMenu, isMenuDisabled } = useNavContext();


  return (
    <HeaderRoot>
      <DropDown className={isMenuDisabled ? 'disable' : isMenuOpen ? 'active' : ''} >

        <Menu onClick={toggleMenu} className="menu">
          <Link><img className="logo" src="./home-imgs/menu-icon@3x.png" alt="" /></Link>
        </Menu>

        <DropDownMenu $isOpen={isMenuOpen} >
          <li><Link to={'/'}><img className="logo-mini" src="./home-imgs/mini-home-icon@3x.png" alt="" /></Link></li>
          <li><Link to={'/leaderboard'}><img className="logo-mini" src="./home-imgs/throphy-icon@3x.png" alt="" /></Link></li>
          <li><Link><img className="logo-mini" src="./home-imgs/user-icon@3x.png" alt="" /></Link></li>
        </DropDownMenu>

      </DropDown>
    </HeaderRoot>
  )
}