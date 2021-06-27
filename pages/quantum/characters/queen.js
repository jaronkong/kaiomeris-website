import Head from 'next/head';
import Layout from "../../../components/Layout";

const topMargin = {
  margin: '64px 0px'
}

const bigHeaderStyle = {
  color: '#ebebeb',
  'font-size': '32pt',
  'font-family': 'sans-serif',
  'text-align': 'center',
  margin: '0 32px',
};

const contentColumn = {
  color: '#a1a1a1',
  'font-family': 'sans-serif',
  'font-size': '14pt',
  margin: 'auto',
  maxWidth: '768px',
};

const fullImage = {
  width: '100%',
}


function QuantumCharactersQueen() {
  return (
    <Layout>
      <Head>
        <title>Quantum Protocol</title>
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap" rel="stylesheet" />

      <div style={topMargin}> </div>
      <p style={bigHeaderStyle}>Queen Character Reference</p>

      <div style={contentColumn}>
	<img src="/quantum/characters/queen/QueenRenderSmaller.png" style={fullImage} />
	<img src="/quantum/queenCapsule.png" style={fullImage} />
	<img src="/quantum/characters/queen/wideCapsule.png" style={fullImage} />
      </div>

      <style jsx>{`
      body {
        background-color: #161616;
      }
      `}</style>
    </Layout>
  )
}

export default QuantumCharactersQueen