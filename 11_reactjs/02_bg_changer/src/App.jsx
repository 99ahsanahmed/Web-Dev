import { useState } from 'react'
import './App.css'

function App() {
  const [color, setCColor] = useState("white")

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <h1 className="text-3xl">BG COLOR CHANGER</h1>
      <button onClick={() => setCColor("red")}>Red</button>
      <button onClick={() => setCColor("white")}>Reset</button>
    </div>
  );
}

export default App
