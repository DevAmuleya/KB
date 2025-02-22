import './App.css'
import Home2 from './component/Home2'
import Signin from './component/Signin'
import Home from './component/Home'
import Bulkupdate from './component/Bulkupdate'
import Quickupdate from './component/Quickupdate'
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <> 
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bulkupdate" element={<Bulkupdate />} />
        <Route path="/quickupdate" element={<Quickupdate />} />
        <Route path="/home2" element={<Home2 />} />
    </Routes>
</>
  )
}

export default App
