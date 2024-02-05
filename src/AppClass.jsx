import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import Images from './components/images';

export default class AppClass extends Component {
  constructor(props) {
    super(props)
  }
  // code here
  render() {
    return (
      <div>

        <div>
          <h1 className='heading' >Kalvium Gallery-2</h1>
        </div>

        <Images data={this.props.data} />

      </div>
    )
  }
}