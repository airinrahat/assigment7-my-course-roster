
import './App.css'
import Course from './components/Course/Course'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      
      <h1 className='text-center  font-bold text-3xl mt-5'>Course Registration</h1>
     <div className='flex'>
     <Home></Home>
      <Course></Course>
     </div>
    
    </>
  )
}

export default App
