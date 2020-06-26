import NavButton from './NavButton';

const navBarStyle = {
  color: 'white',
  width: '100%',
};

const navListStyle = {
  'list-style-type': 'none',
  margin: '0',
  paddingRight: '32px',
  overflow: 'hidden',
};

const navListItemStyle = {
  float: 'right',
  margin: '0px 16px',
};

const NavBar = props => (
  <div className='NavBar' style={navBarStyle}>
    <ul style={navListStyle}>
      {props.navButtons.map((button, i)=> (
        <li style={navListItemStyle} key={i}>
          <NavButton
            key={button.path}
            path={button.path}
            label={button.label}
            icon={button.icon}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;