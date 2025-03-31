import react, { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
      setCount((prevCounter) => prevCounter +1)
  }
  const subValue = () => {
      setCount((prevCounter) => prevCounter -1)
    }

  return (

    <div className='flex items-center justify-center bg-gray-500 h-screen'>
        <div className='bg-gray-300 shadow-lg p-8 rounded-md'>
        <h1 className='font-bold'>Current count:
          <span className='text-xl rounded-xl py-1 px-4 bg-blue-500 shadow-lg ml-3'> {count}</span>
          </h1>
          <div className='space-x-3 pt-10'>
            <button
              onClick={addValue}
              className='bg-blue-500 text-blue-50 px-3 py-1 rounded-md'>
              Increase
            </button>
          <button
            onClick={subValue}
            className='bg-blue-500 text-blue-50 px-3 py-1 rounded-md'>
            Decrease
          </button>
          </div>
        </div>
   </div>
  )
}

export default App
