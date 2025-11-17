import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
           <Button handleClick={handleClick}
            text="click me " >
            <h1>{count}</h1>

           </Button>
                {/* <Card name="Abhishek">
                  <h1>Best Web Dev Course </h1>
                  <p>Trying to be consistent in this</p>
                  <p>Will complete the course soon </p>
                </Card>
                <Card children = "Main ek children hu ">
                  helloe i will millione one day
                </Card> */}
    </div>

  )
}

export default App
