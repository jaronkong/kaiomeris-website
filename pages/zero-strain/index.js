import Layout from "../../components/Layout";

import contentGrid from '../styles/contentGrid.module.scss'

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
  'maxWidth': '800px',
  'margin-top': '-150px',
  'margin-left': 'auto',
  'margin-right': 'auto',
};

// -------------------------------------
const bigHeaderStyle = {
  color: '#ebebeb',
  'font-size': '26pt',
  'font-family': 'Rajdhani, sans-serif',
  'text-align': 'center',
  margin: '0 32px',
};
const detailStyle = {
  color: '#5c5c5c',
  maxWidth: '800px',
  margin: '0 auto',
  'font-size': '12pt',
  'font-family': 'Rajdhani, sans-serif',
  'text-align': 'center',
  padding: '0 32px',
};
const screenStyle = {
  width: '100%',
  'box-shadow': '2px 4px 8px 1px rgba(0, 0, 0, 0.6)',
};
const centeredDiv = {
  margin: '0 auto',
  'text-align': 'center',
};
const steamButtonWrapper = {
  margin: '0 auto',
  'text-align': 'center',
  height: '200px',
};
const steamButton = {
  position: 'absolute',
  left: 0,
  width: '100%',
  overflow: 'hidden',
};
const separatorDiv = {
  height: '32px',
};

function QuantumPage() {
  return (
    <Layout>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap" rel="stylesheet"/>

      <div>
        <img src="/zero-strain/headerBg.png" style={bgStyle} />
        <img src="/zero-strain/headerChar.png" style={charStyle} />
      </div>
      <img src="/zero-strain/libraryLogo.png" style={logoStyle} />

      <div style={separatorDiv}></div>
      <div style={steamButtonWrapper}><div style={steamButton}>
        <iframe src="https://store.steampowered.com/widget/1079560/" frameborder="0" width="646" height="190"></iframe>
      </div></div>

      <div style={separatorDiv}></div>

      <div style={separatorDiv}></div>
      <div>
        <p style={bigHeaderStyle}>Hyper-fast combat. No cooldowns.</p>
        <p style={detailStyle}>The only limit is your skill. Multiple ships to master, each with their own unique weapons and abilities.</p>
      </div>
      <br />
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <img src="/zero-strain/screen1.png" style={screenStyle}/>
        </li>
        <li className={contentGrid.contentRowItem}>
          <img src="/zero-strain/screen2.png" style={screenStyle}/>
        </li>
      </ul>
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <img src="/zero-strain/screen3.png" style={screenStyle}/>
        </li>
        <li className={contentGrid.contentRowItem}>
          <img src="/zero-strain/screen4.png" style={screenStyle}/>
        </li>
      </ul>
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <img src="/zero-strain/screen5.png" style={screenStyle}/>
        </li>
        <li className={contentGrid.contentRowItem}>
          <img src="/zero-strain/screen6.png" style={screenStyle}/>
        </li>
      </ul>

      <div style={separatorDiv}></div>
      <div style={steamButtonWrapper}><div style={steamButton}>
        <iframe src="https://store.steampowered.com/widget/1079560/" frameborder="0" width="646" height="190"></iframe>
      </div></div>

      <div style={separatorDiv}></div>

      <style jsx>{`
      body {
        background-color: #161616;
      }
      `}</style>
    </Layout>
  )
}

export default QuantumPage