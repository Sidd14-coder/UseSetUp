import { useState } from 'react'
import Car from './Car'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Car />
    </div>
  )
}

export default App
