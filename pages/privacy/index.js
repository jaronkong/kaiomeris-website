import Layout from "../../components/Layout";

const contentColumn = {
  color: '#a1a1a1',
  'font-family': 'sans-serif',
  'font-size': '14pt',
  margin: 'auto',
  maxWidth: '768px',
};

const bigHeaderStyle = {
  color: '#ebebeb',
  'font-size': '32pt',
  'font-family': 'sans-serif',
  'text-align': 'center',
  margin: '0 32px',
};

const topMargin = {
  margin: '64px 0px'
}

function About() {
  return (
    <Layout>
      <div style={topMargin}> </div>
      <p style={bigHeaderStyle}>Privacy Policy</p>
      <div style={contentColumn}>
        <p>Last Updated: September 15, 2020</p>

        <p>
        Kaio Meris ("company", "we") respects your privacy.
        The application or service ("Quantum Protocol") is provided by Kaio Meris and is intended for use as is.
        This article is used to inform visitors regarding the policies with the collection and use of personal information if any,
        in using the application. If you choose to use the application, then you agree to the collection and use of information
        in relation to this policy. The information that we collect is used for providing and improving the application.
        </p>

        <h1>Information Collection and Use</h1>
        <p>
        We collect data when you interact with the application. Including, but not limited to, decisions made during gameplay and the
        results of gameplay. This information is used to inform the creation of future updates for the game.
        </p>

        <h1>Changes to this privacy policy</h1>
        Kaio Meris reserves the right to modify this privacy policy. Therefore, please review this page periodically.

        <h1>Contact Us</h1>
        If you have any questions about this privacy policy, please contact at: contact [at] kaiomeris.com
      </div>
      <style jsx>{`
      body {
        background-color: #161616;
      }
      `}</style>
    </Layout>
  )
}

export default About