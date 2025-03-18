import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      </div>
      <h1 className='text-amber-400'>Bhajiya <span className='text-white'> + </span> <span className='text-green-400'> Chutney</span></h1>
      <div className="card">
        <button className='my-3 text-rose-400' onClick={() => setCount((count) => count + 1)}>
          Dabao Please!! {count}
        </button>
        <p>
          File name <code className='text-pink-400'>Deploy</code> learning to deploy apps in detail.
        </p>
      </div>
      <p className="read-the-docs underline">
        Just testing this app, Ek baar sikhlun saala fir btata hun.
      </p>
    </>
  )
}

export default App
