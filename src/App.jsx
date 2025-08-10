import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center px-4">
        <h1 className="text-4xl font-bold text-amber-400 mb-4">
          Bhajiya <span className="text-white"> + </span>
          <span className="text-green-400">Chutney</span>
        </h1>

        <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
          <button
            className="my-3 px-4 py-2 bg-gray-700 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors duration-200 rounded"
            onClick={() => setCount((count) => count + 1)}
          >
            Dabao Please!! {count}
          </button>
          <p className="mt-2 text-sm text-gray-300">
            File name <code className="text-pink-400">Deploy</code> learning to deploy apps in detail.
          </p>
        </div>

        <p className="read-the-docs mt-6 underline text-gray-400">
          Just testing this app, Ek baar sikhlun saala fir btata hun.
        </p>
      </div>
    </>
  );
}

export default App;
