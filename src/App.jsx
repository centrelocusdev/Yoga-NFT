import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import hero from './assets/images/hero.png';
import heroRight from './assets/images/hero-right.png';
import heroLeft from './assets/images/hero-left.png'
import Story from './Story';
import About from './About';
import Arts from './Arts';
import Benefits from './Benefits';
import Roadmap from './Roadmap';
import Team from './Team';
import Faq from './Faq';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" bg-cover bg-center h-screen bg-hero">
      {/* <h1 className="text-3xl text-centre font-bold">Our First Project3</h1> */}
      <nav className=" fixed w-[90%] mt-5 md:mx-12   mx-2 bg-white rounded-full  z-10 bg-center shadow px-6">
      <div className="container ">
            <div className="flex justify-between items-center py-2">
                <a href="#" className=" font-samarkan text-2xl font-bold text-orange-400">Yoga</a>
                
                {/* <!-- Navigation Links --> */}
                <ul className="space-x-6">
                    <li className="inline-block">
                        <a href="#" className="text-gray-800  font-monteserrat font-semibold hover:text-orange-600 transition duration-300 ">Home</a>
                    </li>
                    <li className="inline-block">
                        <a href="#aboutUs" className="scroll-mt-96 text-gray-800 font-monteserrat font-semibold hover:text-orange-600 transition duration-300">About Us</a>
                    </li>
                    <li className="inline-block">
                        <a href="#roadMap" className="text-gray-800 font-monteserrat font-semibold hover:text-orange-600 transition duration-300">RoadMap</a>
                    </li>
                    <li className="inline-block">
                        <a href="#faq" className="text-gray-800 font-monteserrat font-semibold hover:text-orange-600 transition duration-300">FAQs</a>
                    </li>
                </ul>
                <div>

                <button type="button" className=" inline-block text-black hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-0 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Log In</button>
                <button type="button" className=" inline-block text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-0 dark:focus:ring-yellow-900">Sign Up</button>
                </div>
            </div>
        </div>
      </nav>
      <img src={heroLeft} alt="Right Top Image" className="absolute left-0 bottom-0 p-[5%]" />
      <img src={heroRight} alt="Right Top Image" className="absolute right-0 top-[20%] p-[5%]" />


      <div className=" absolute top-0 left-[20%] right-[20%] bottom-0 flex flex-col justify-center items-center text-center gap-6 text-white">
      {/* "border-solid border-4 border-cyan-950 */}


      <h1 className=" font-hind text-xl/8 font-normal">Unleash your inner zen with NFT Yoga</h1>
      <h1 className="tracking-widest font-monteserrat sm:text-7xl text-4xl font-semibold  ">Where mindfulness meets blockchain magic!</h1>
      {/* <h1 class=" font-monteserrat text-4xl font-bold">Your Title</h1> */}
        {/* <p class="text-xl">Your content goes here</p> */}
      </div>


      </div>
      <Story/>
      <About/>
      <Arts/>
      <Benefits/>
      <Roadmap/>
      <Team/>
      <Faq/>
       <Footer/>
    </>
  )
}

export default App
