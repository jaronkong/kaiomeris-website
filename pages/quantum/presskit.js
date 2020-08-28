import Head from 'next/head';
import Layout from "../../components/Layout";

import infoTable from './style/tables.module.scss'

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
  maxWidth: '1024px',
};

const categoryHeader = {
  'margin-top': '32px',
  'margin-bottom': '0px',
  'font-family': 'sans-serif',
  'font-size': '24pt',
  color: '#707070',
};

const dividerLine = {
  'border-color': '#707070',
}

const fullImage = {
  width: '100%',
}
const boxImage = {
  width: '600px',
}

function QuantumPresskit() {
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
        <meta name="twitter:image" content="https://www.kaiomeris.com/quantum/opengraphImage.jpg"></meta>
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap" rel="stylesheet" />

      <div style={topMargin}> </div>
      <p style={bigHeaderStyle}>Quantum Protocol Press Kit</p>

      <div style={contentColumn}>
        <p style={categoryHeader}>
          Factsheet
        </p>
        <hr style={dividerLine}/>
        <table className={infoTable.infoTable}>
          <tr>
            <td>Developer</td>
            <td>Kaio Meris</td>
          </tr>
          <tr>
            <td>Release Date</td>
            <td>Late 2020</td>
          </tr>
          <tr>
            <td>Platforms</td>
            <td>PC</td>
          </tr>
          <tr>
            <td>Players</td>
            <td>Single Player</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>Deckbuilder, Visual Novel, Roguelike</td>
          </tr>
          <tr>
            <td>Website</td>
            <td><a href="https://kaiomeris.com/quantum">kaiomeris.com/quantum</a></td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>English</td>
          </tr>
          <tr>
            <td>Contact</td>
            <td>jaron [at] kaiomeris [dot] com</td>
          </tr>
          <tr>
            <td>Social</td>
            <td><a href="https://discord.gg/tpSRqfZ">Discord</a>, <a href="https://twitter.com/QuantumCardGame">Twitter</a></td>
          </tr>
        </table>

        <p style={categoryHeader}>
          Description
        </p>
        <hr style={dividerLine}/>
        <p>
          Play as the master hackers of Quantum, an elite organization dedicated to eliminating the most dangerous malware in the world.
          This is not an ordinary deckbuilder, each deck comes with a special <i>Reprogram</i> card that can be played at any time to change your deck.
          Destroy enemies, collect loot, and <i>Reprogram</i> to constantly evolve your deck mid-run.
        </p>
        <p style={categoryHeader}>
          Features
        </p>
        <hr style={dividerLine} />
        <ul>
          <li>6 playable characters.</li>
          <li>Visual novel scenes between story missions.</li>
          <li>Replayable roguelike dungeon missions.</li>
          <li>Very little meta-progression, predominantly unlocks.</li>
          <li>Resource-less ruleset that's easy to learn, but very hard to master.</li>
        </ul>
        <p style={categoryHeader}>
          Artist Statement
        </p>
        <hr style={dividerLine} />
        <p>
          I love card games. I played Yu-Gi-Oh competitively for several years and have always wanted to share a very specific part of the game with others: board breaking.
          On the surface, a Yu-Gi-Oh game looks like players performing multi-minute long combos to defeat their opponent in one turn (commonly known as an 'OTK').
          But really there is a lot more going on. Yu-Gi-Oh games at their heart are about trying to break apart your opponent's defenses to establish your own defenses.
          Once your opponent's defenses are depleted, you go in for the win.
        </p>
        <p>
          I created Quantum Protocol to capture this in a tight, accessible single player experience.
        </p>
        <p>
          The game has a much slower and more methodical pace than other deckbuilder games.
          Every action matters, and there are so many decisions to make at any given moment that the same deck played by two different people will perform radically differently.
          Players can express themselves with not only their card choices, but also with how they play them.
        </p>
        <p>
          Oh! And cute waifus!
        </p>

        <p style={categoryHeader}>
          Media
        </p>
        <hr style={dividerLine}/>
        <img src="/quantum/queenCapsule.png" style={fullImage}/>
        <img src="/quantum/queenHorizontal.png" style={fullImage}/>
        <img src="/quantum/boxCover.png" style={boxImage}/>
      </div>

      <style jsx>{`
      body {
        background-color: #161616;
      }
      `}</style>
    </Layout>
  )
}

export default QuantumPresskit