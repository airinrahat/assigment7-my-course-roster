
import { useEffect, useState } from 'react'
import './App.css'
import Course from './components/Course/Course'
import Home from './components/Home/Home'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = card =>{
    console.log('bookmark adding soon')
  }

  return (
    <>
      <h1 className='text-center  font-bold text-3xl mt-5'>Course Registration</h1>
     <header className=' max-w-5xl mx-auto'> 
     <div className='flex '>
     
   
   <Home handleAddToBookmark ={handleAddToBookmark}></Home>
 
      <Course></Course>
     </div>
     </header>
    
    </>
  )
}

export default App
