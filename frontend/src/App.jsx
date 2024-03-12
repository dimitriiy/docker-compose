import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [data,setData] = useState([]);


    useEffect(() =>{
        async function req(){
            const response = await fetch('http://localhost:3001')
            const data = await response.json();

            setData(data)
        }

        req();
    },[])

  return (
    <>
      <div>
          <h2>{process.env.TITLE}</h2>
          <ul>
              {data.map(({id,first_name}) => <li key={id}>{first_name}</li>)}
          </ul>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
