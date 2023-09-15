
import './App.css'
import Course from './components/Course/Course'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <h1 className='text-center  font-bold text-3xl mt-5'>Course Registration</h1>
     <header className=' max-w-5xl mx-auto'> 
     <div className='flex '>
     
   
   <Home></Home>
 
      <Course></Course>
     </div>
     </header>
    
    </>
  )
}

export default App
