
import { Helmet } from 'react-helmet-async'
import Navbar from './Components/Navbar/Navbar'

import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';



function App() {

  return (
    <>
    <Helmet>
      <title>WanderWise | Home</title>
    </Helmet>
      <Navbar></Navbar>
      
      <Outlet></Outlet>
      <Footer></Footer>
      
      
    </>
  )
}

export default App
