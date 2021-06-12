import React, { Component } from 'react'
import  './App.css'

export class App extends Component {
  state = {
    colorList: ["red", "white", "blue"],
    backgroundColorInput: "",
  };

  handleOnBackgroundChange=(color) => {
    // console.log(color)
    this.setState ({
      backgroundColorInput: color,
    })
  }

  render() {
    return (
      <div className={"all"}>
        <div className={"header"}>My Header</div>

        <div className={"center"}>
          <div
            className="sidebar"
            style={{ backgroundColor: this.state.backgroundColorInput }}
          >
            <h3> SideBar</h3>
            <ul className={"color"}>
              {this.state.colorList.map((item, index) => {
                // map creates a new array based on what we are looking for.
                return (
                  <li
                    key={index}
                    onClick={() => this.handleOnBackgroundChange(item)}
                  >
                    {item}
                  </li> // the new array will give each color a onClick function that will take in handle the function handleOnBackgroundChange.
                );
              })}
            </ul>
          </div>
          <div className={"body"}>
            <h3>Body</h3>
            <img
              className={"img"}
              src="https://cdn.shopify.com/s/files/1/0931/7974/products/64131_grande_2x.jpeg?v=1441734741"
              alt=""
            />
            <p>Zombie killer</p>
            <div className={"squares"}>
              <div className={"img"}>
                <img
                  className={"img"}
                  src="https://www.denofgeek.com/wp-content/uploads/2021/05/army-of-the-dead-1.jpeg?resize=768%2C432"
                  alt=""
                />
                undead 1
              </div>
              <div className={"img"}>
                <img
                  className={"img"}
                  src="https://cdn.onebauer.media/one/media/6075/da4f/2cae/d468/e338/5503/alpha-zombie-main.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill"
                  alt=""
                />
                undead 2
              </div>
              <div className={"img"}>
                <img
                  className={"img"}
                  src="https://www.indiewire.com/wp-content/uploads/2021/04/army-of-the-dead-1.png"
                  alt=""
                />
                undead 3
              </div>
            </div>
          </div>
        </div>

        <div className={"footer"}>
          <h1 className={"footer-h1"}>Leeeeeeeeeeee copy wrotededed</h1>
          <h3>Footer</h3>
          <h1 className={"empty"}>invisible</h1>
        </div>
      </div>
    );
  }
}

export default App
