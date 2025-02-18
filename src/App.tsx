
import './App.css'
import Clock from './Components/Clock'
import ToDo from './Components/ToDo'

function App() {
 

  return (
    <>
     <div className='flex w-full h-screen  '>
     <ToDo/>
     <Clock/>
     </div>
    </>
  )
}

export default App
