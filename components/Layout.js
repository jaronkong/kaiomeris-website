import Header from "./Header";
import NavBar from "./nav/NavBar";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>

    <style jsx global>{`
      body {
        margin: 0px;
        background-color: #161616;
      }
    `}</style>
  </div>
);

export default Layout;