import React, { Component } from 'react'
import MenuElement from "./MenuElement"

//estilos
import "../style/header/_masterHeader.less"

export default class Header extends Component {
    state={
        openMenu:false
    }
    openMenu=(event)=>{
        this.setState({
            openMenu: !this.state.openMenu
        }) 
    }
    render() {
        const {data} = this.props
        return (
        <header className="header">
                <div className="about">
                    <div className="about_1">
                        <img src={data.about.imgSrc} alt={data.about.imgAlt}/>
                        <button onClick={this.openMenu}>
                            {data.about.buttonText}
                        </button>
                    </div>
                    <div className="about_2">
                        <h1>{data.about.titulo}</h1>
                        {/* <h3>{data.about.descripcion}</h3> */}
                        <h3> SOY  <br/> <strong>DESARROLADOR WEB</strong> <br/> ESPECIALIZADO EN FRONTEND UI/UX Y SOY PUBLICISTA EN <br/> <strong>MARKETING DIGITAL</strong></h3>
                    </div>
                </div>
                <div className="menuContainer" id="menuContainer">
                    <button onClick={this.openMenu}> {"<"} </button>
                    <ul className="menu">
                    {
                        data.menu.map((element)=>{
                            return(

                                <MenuElement key={element} data={element}></MenuElement>
                            )
                        })

                    }
                    </ul>
                </div>
                {
                    this.state.openMenu ?
                    <style jsx>
                    {`
                        .about{
                            background: url("../static/images/fondo-morado.jpg");
                            background-attachment: fixed;
                        }
                        .menuContainer{
                            left: 0;
                            background: url("../static/images/fondo-amarillo.jpg");
                            background-attachment: fixed;
                        }
                    `}
                    </style>
                    :
                    <style jsx>
                    {`
                        .about{
                            background: url("../static/images/fondo-morado.jpg");
                            background-attachment: fixed;
                        }
                        .menuContainer{
                            left: 100vw;
                            background: url("../static/images/fondo-amarillo.jpg");
                            background-attachment: fixed;
                        }
                    `}
                    </style>

                }
        </header> 
        )
  }
}
