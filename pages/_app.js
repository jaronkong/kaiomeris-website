import App from 'next/app'
import React from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-WNH7Z6F'
}

class MyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp