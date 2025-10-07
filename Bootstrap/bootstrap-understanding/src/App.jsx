import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <button type="button" classname="btn btn-primary">Primary</button>
      <button type="button" classname="btn btn-secondary">Secondary</button>
      <button type="button" classname="btn btn-success">Success</button>
      <button type="button" classname="btn btn-danger">Danger</button>
      <button type="button" classname="btn btn-warning">Warning</button>
      <button type="button" classname="btn btn-info">Info</button>
      <button type="button" classname="btn btn-light">Light</button>
      <button type="button" classname="btn btn-dark">Dark</button>

      <button type="button" classname="btn btn-link">Link</button>
    </div>
  )
}

export default App
