import './App.css'
import Home from "./Components/structures/Home"
import Card from './Components/structures/Card'
import petData from "./CardData.json"
import ImageSlide from './Components/structures/ImageSlide'

function App() {

  return (
    <>
    <div className='Overall-Container'>
      <Home/>
      <ImageSlide />
      <div className="wrapper">
      {petData.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
     
      </div>
      

  



    </div>

    </>
  )
}

export default App
