import { Routes,Route } from 'react-router-dom'
import "./App.css"
import Endnavbar from './components/endNav'
import Home from './components/home'
import Navbar from './components/navbar'
import Create_task from './components/create_task'

function App() {
  return <>

    <Routes>
      <Route path="/" element={<>
        <Navbar/>
        <Home/>
        <Endnavbar/>
       </> }/>
      <Route path='/create_Task' element={<>
      <Create_task/>
      </>}/>
       {/* <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
  

  </>
  
}

export default App
