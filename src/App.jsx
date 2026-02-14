import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div class name='mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div class name='sticky top-0 grid grid-rows-[35%_45%_20%'>
        <div>Title</div>
        <div>Nav</div>
        <div class name='flex item-end'>Link</div>
      </div>
    </div>
  )
}

export default App
