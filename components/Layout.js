import React, { Component } from 'react'
import Head from "next/head"

//estyles
import "../style/layout/_masterLayout.less"


export default class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
            <link href="https://fonts.googleapis.com/css?family=Anton|Montserrat" rel="stylesheet"></link>
        </Head>
        {this.props.children}
      </div>
    )
  }
}
