
import { Helmet } from 'react-helmet-async'
import Navbar from './Components/Navbar/Navbar'

import { Outlet } from 'react-router-dom';



function App() {

  return (
    <>
    <Helmet>
      <title>WanderWise | Home</title>
    </Helmet>
      <Navbar></Navbar>
      
      <Outlet></Outlet>
      
      
    </>
  )
}

export default App
