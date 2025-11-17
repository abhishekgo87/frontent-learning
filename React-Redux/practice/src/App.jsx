import { useState } from 'react'

import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <UserCard name="goswami"  desc="desc1" />
    <UserCard  name="giri" desc="desc2"/>
    <UserCard name= " raj chauhan" desc="desc3" />
    </div>
   
  )
}

export default App
