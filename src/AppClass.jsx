import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {

  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant
      },
      {
        id: 2,
        img: elephant
      },
      {
        id: 3,
        img: elephant
      },
      {
        id: 4,
        img: elephant
      }
    ]
    return data;
  }

  // code here
  render() {
    let Data = this.imageData()
    return (
      <div>

        <div>
          <h1 className='heading' >Kalvium Gallery-2</h1>
        </div>

        <div className='img-container'>
          {Data.map((element) => {
            return <img src={element.img} />
          })
          }
        </div>

      </div>
    )
  }
}