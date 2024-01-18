import './App.css';
import elephant from "./images/elephant.jpeg";

function App() {
  // code here
  let Data = imageData()
  return (
    <div>
      <div>
        <h1 className='heading' >Kalvium Gallery-1</h1>
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

export default App;