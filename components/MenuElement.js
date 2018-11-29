import React, { Component } from 'react'

export default class MenuElement extends Component {
  render() {
    const {data} = this.props
    return (
    <li>
        <a href="">{data.descripcion}</a>
    </li>
    )
  }
}
