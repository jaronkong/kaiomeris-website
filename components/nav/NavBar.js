import NavButton from "./NavButton";

const navBarStyle = {
  backgroundColor: "red",
  color: "white",
  width: "100%",
  height: "60px"
};

const NavBar = props => (
  <div className="NavBar" style={navBarStyle}>
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);

export default NavBar;