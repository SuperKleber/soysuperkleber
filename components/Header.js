import React, { Component } from 'react'
import MenuElement from "./MenuElement"

//estilos
import "../style/header/_masterHeader.less"

export default class Header extends Component {
  render() {
    const {data} = this.props
    return (
      <header>
          <div className="about">
                <div className="about_1">
                    <img src={data.about.imgSrc} alt={data.about.imgAlt}/>
                    <button>{data.about.buttonText}</button>
                </div>
                <div className="about_2">
                    <h1>{data.about.titulo}</h1>
                    <h3>{data.about.descripcion}</h3>
                </div>
          </div>
          <div className="menuContainer">
              <ul className="menu">
              {
                  data.menu.map((element)=>{
                      return(

                            <MenuElement data={element}></MenuElement>
                      )
                  })

              }
              </ul>
          </div>
      </header>
    )
  }
}
