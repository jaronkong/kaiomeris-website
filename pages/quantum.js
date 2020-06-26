import Layout from "../components/Layout";

const topImageStyle = {
  position: 'absolute',
};
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

const gifStyle = {
  width: '512px',
};

function QuantumPage() {
  return (
    <Layout>
      <div>
        <img src="/quantum/bg.png" style={bgStyle} />
        <img src="/quantum/character.png" style={charStyle} />
      </div>
      <img src="/quantum/titleWhite1.png" style={logoStyle} />

      <img src="/quantum/quantumGif1.gif" style={gifStyle}/>
      <style jsx>{`
      body {
        background-color: #161616;
      }
      `}</style>
    </Layout>
  )
}

export default QuantumPage