import Head from 'next/head';
import Layout from "../../components/Layout";
import { TwitterFollowButton } from 'react-twitter-embed'

import contentGrid from '../styles/contentGrid.module.scss'
import youtubeEmbed from '../styles/youtubeEmbed.module.scss'

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
const gifStyle = {
  width: '100%',
  'box-shadow': '2px 4px 8px 1px rgba(0, 0, 0, 0.6)',
};
const videoStyle = {
  width: '100%',
  'box-shadow': '2px 4px 8px 1px rgba(0, 0, 0, 0.6)',
};
const basicImageStyle = {
  width: '100%',
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
const videoEmbed = {
  margin: '0 auto',
  'text-align': 'center',
  maxWidth: '700px',
};

const separatorDiv = {
  height: '32px',
};

function QuantumPage() {
  return (
    <Layout>
      <Head>
        <title>Quantum Protocol</title>
        <meta property="og:title" content="Quantum Protocol" />
        <meta property="og:description" content="A visual novel deckbuilding card game where it's always your turn." />
        <meta property="og:url" content="https://www.kaiomeris.com/quantum" />
        <meta property="og:image" content="https://www.kaiomeris.com/quantum/opengraphImage.jpg" />
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>

        <meta property="twitter:url" content="https://www.kaiomeris.com/quantum"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Quantum Protocol"></meta>
        <meta name="twitter:description" content="A visual novel deckbuilding card game where it's always your turn."></meta>
        <meta name="twitter:image" content="https://www.kaiomeris.com/quantum/opengraphImage.jpg"></meta>
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap" rel="stylesheet" />

      <div>
        <img src="/quantum/bg.png" style={bgStyle} />
        <img src="/quantum/character.png" style={charStyle} />
      </div>
      <img src="/quantum/titleWhite1.png" style={logoStyle} />

      <div style={centeredDiv}>
        <TwitterFollowButton screenName="QuantumCardGame" options={{ size: 'large' }} placeholder="Loading" />
      </div>
      <div style={separatorDiv}></div>
      <div style={steamButtonWrapper}><div style={steamButton}>
        <iframe src="https://store.steampowered.com/widget/1328530/" frameBorder="0" width="646" height="190"></iframe>
      </div></div>

      <div style={separatorDiv}></div>
      <div style={separatorDiv}></div>
      <div className={youtubeEmbed.videoContainer} style={videoEmbed}>
        <iframe src="https://www.youtube.com/embed/iXjQNLEozYo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div style={separatorDiv}></div>

      <div style={separatorDiv}></div>
      <div>
        <p style={bigHeaderStyle}>A deckbuilding card game where every action matters.</p>
        <p style={detailStyle}>It’s always your turn. Make plays, upgrade your deck, and break the enemy board.</p>
      </div>
      <br />
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <video autoPlay muted loop style={videoStyle}>
            <source src="/quantum/vid1.mp4" type="video/mp4" />
          </video>
        </li>
        <li className={contentGrid.contentRowItem}>
          <video autoPlay muted loop style={videoStyle} poster='/quantum/vidThumbEditor.jpg'>
            <source src="/quantum/vid2.mp4" type="video/mp4" />
          </video>
        </li>
      </ul>

      <div style={separatorDiv}></div>
      <div>
        <p style={bigHeaderStyle}>In order to make the rules, you have to break the rules.</p>
        <p style={detailStyle}>You play as the members of Quantum, an organization of hackers dedicated to eliminating the most dangerous malware in the world. Together they wield programs with powerful, rule-bending effects.</p>
      </div>
      <br />
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <video autoPlay muted loop style={videoStyle} poster='/quantum/vidThumbCards.jpg'>
            <source src="/quantum/vidCards.mp4" type="video/mp4" />
          </video>
        </li>
        <li className={contentGrid.contentRowItem}>
          <video autoPlay muted loop style={videoStyle} poster='/quantum/vidThumbCharacters.jpg'>
            <source src="/quantum/vidChars.mp4" type="video/mp4" />
          </video>
        </li>
      </ul>

      <div style={separatorDiv}></div>
      <div>
        <p style={bigHeaderStyle}>Behind every program, a dream.</p>
        <p style={detailStyle}>Experience the lives of the people behind the code. Even as an unstoppable computer virus threatens to destroy the modern world, sometimes the most important problems are the ones hidden inside each of us.</p>
      </div>
      <br />
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <img src='/quantum/screen2.jpg' style={gifStyle} />
        </li>
        <li className={contentGrid.contentRowItem}>
          <img src='/quantum/screen1.jpg' style={gifStyle} />
        </li>
      </ul>

      <div style={separatorDiv}></div>
      <div>
        <p style={bigHeaderStyle}>Discover the floating city.</p>
        <p style={detailStyle}>Expect the ordinary to be extraordinary. Far from the shores of any nation floats a magnificent city. Originally created to be home to the most radical and advanced technological research, it now plays host to the most dangerous malware in the world.</p>
      </div>
      <br />
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <img src="/quantum/bg1.jpg" style={gifStyle} />
        </li>
        <li className={contentGrid.contentRowItem}>
          <img src="/quantum/bg2.jpg" style={gifStyle} />
        </li>
      </ul>
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <img src="/quantum/bg3.jpg" style={gifStyle} />
        </li>
        <li className={contentGrid.contentRowItem}>
          <img src="/quantum/bg4.jpg" style={gifStyle} />
        </li>
      </ul>

      <div style={separatorDiv}></div>
      <div>
        <p style={bigHeaderStyle}>Try the <u>free</u> demo on Discord! And get some emotes :)</p>
      </div>
      <br />
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <img src="/quantum/emoteLine.png" style={basicImageStyle} />
        </li>
        <li className={contentGrid.contentRowItem}>
          <a href="https://discord.gg/tpSRqfZ">
            <img src="/quantum/discordWhite.png" style={basicImageStyle} />
          </a>
        </li>
      </ul>

      <div style={separatorDiv}></div>
      <div style={centeredDiv}>
        <TwitterFollowButton screenName="QuantumCardGame" options={{ size: 'large' }} placeholder="Loading" />
      </div>
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