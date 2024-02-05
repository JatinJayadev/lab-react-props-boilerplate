import './App.css';
import elephant from "./images/elephant.jpeg";
import Images from './components/images';

function App(props) {
  // code here

  return (
    <div>

      <div>

        <h1 className='heading' >Kalvium Gallery-1</h1>

      </div>



      <Images data={props.data} />


    </div>
  )
}

export default App;