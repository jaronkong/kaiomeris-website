import Link from 'next/link'

import NavBar from './nav/NavBar'
import navButtons from '../config/navButtons'

const headerStyle = {
  position: 'absolute',
  color: "white",
  width: "100%",
  paddingTop: '16px',
  marginLeft: '16px',
  marginRight: '16px',
};

const headerFlexContainerStyle = {
  padding: '0',
  margin: '0',
  'list-style': 'none',
  '-ms-box-orient': 'horizontal',
  display: '-webkit-box',
  display: '-moz-box',
  display: '-ms-flexbox',
  display: '-moz-flex',
  display: '-webkit-flex',
  display: 'flex',

  '-webkit-flex-direction': 'row',
  'flex-direction': 'row',
  'justify-content': 'space-between',
};

const headerFlexContainerItemStyle = {
  'line-height': '50px',
  color: 'white',
  'font-weight': 'bold',
  'font-size': '2em',
  'text-align': 'center',
};

const logoStyle = {
  margin: "4px",
  height: "50px",
};

const Header = () => (
  <div className="Header" style={headerStyle}>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
    <ul style={headerFlexContainerStyle}>
      <li style={headerFlexContainerItemStyle}>
        <Link href="/">
          <a><img src="/logoLight.png" alt="logo" style={logoStyle}/></a>
        </Link>
      </li>
      <li style={headerFlexContainerItemStyle}>
        <NavBar navButtons={navButtons} />
      </li>
    </ul>
  </div>
);

export default Header;