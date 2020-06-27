import Layout from "../components/Layout";
import Link from "next/link";

import contentGrid from './styles/contentGrid.module.scss'
import hoverEffects from './styles/hoverEffects.module.scss'

const topSpacer = {
  height: '200px',
};
const boxArtStyle = {
  width: '100%',
  'box-shadow': '2px 4px 8px 1px rgba(0, 0, 0, 0.6)',
};

const Index = () => {
  return (
    <Layout>
      <div style={topSpacer}></div>
      <ul className={contentGrid.contentRow}>
        <li className={contentGrid.contentRowItem}>
          <a href="/quantum">
            <div className={hoverEffects.shinebutton}>
                <img src="/box-arts/quantum.png" style={boxArtStyle} />
            </div>
          </a>
        </li>
        <li className={contentGrid.contentRowItem}>
          <a href="/zero-strain">
            <div className={hoverEffects.shinebutton}>
              <img src="/box-arts/zerostrain.jpg" style={boxArtStyle} />
            </div>
          </a>
        </li>
      </ul>
      <style jsx>{`
      body {
        background-color: #161616;
      }
      `}</style>
    </Layout>
  )
};

export default Index;