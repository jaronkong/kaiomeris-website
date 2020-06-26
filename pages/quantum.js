import Layout from "../components/Layout";

const bgStyle = {
  position: 'absolute',
  width: '100%',
  'z-index': '-1',
};
const charStyle = {
  display: 'block',
  width: '90%',
  'margin-top': '32px',
  'margin-left': 'auto',
  'margin-right': 'auto',
};
const logoStyle = {
  display: 'block',
  'width': '100%',
  padding: '0px, 100px',
  'maxWidth': '700px',
  'margin-top': '-150px',
  'margin-left': 'auto',
  'margin-right': 'auto',
};

// -------------------------------------
// Content grid
const contentRowStyle = {
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
  'justify-content': 'center',
};

const contentRowItemStyle = {
  'text-align': 'center',
  margin: '16px',
};
const gifStyle = {
  width: '512px',
  'box-shadow': '2px 4px 8px 1px rgba(0, 0, 0, 0.6)',
};

function QuantumPage() {
  return (
    <Layout>
      <div>
        <img src="/quantum/bg.png" style={bgStyle} />
        <img src="/quantum/character.png" style={charStyle} />
      </div>
      <img src="/quantum/titleWhite1.png" style={logoStyle} />

      <ul style={contentRowStyle}>
        <li style={contentRowItemStyle}>
          <img src="/quantum/quantumGif1.gif" style={gifStyle}/>
        </li>
        <li style={contentRowItemStyle}>
          <img src="/quantum/quantumGif1.gif" style={gifStyle}/>
        </li>
      </ul>
      <style jsx>{`
      body {
        background-color: #161616;
      }
      `}</style>
    </Layout>
  )
}

export default QuantumPage