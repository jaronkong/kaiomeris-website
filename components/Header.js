import Link from 'next/link'

import NavBar from './nav/NavBar'
import navButtons from '../config/navButtons'

const headerStyle = {
  color: "white",
  width: "100%",
};

const logoStyle = {
  margin: "4px",
  height: "50px",
};

const Header = () => (
  <div className="Header" style={headerStyle}>
    <Link href="/">
      <a><img src="/logoLight.png" alt="logo" style={logoStyle}/></a>
    </Link>
    <NavBar navButtons={navButtons} />
  </div>
);

export default Header;