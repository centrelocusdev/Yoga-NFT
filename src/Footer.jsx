import React from 'react'
import  {BiLogoInstagramAlt,BiLogoTwitter,BiLogoDiscord,BiLogoFacebook,BiLogoLinkedin} from 'react-icons/bi'
import { IconContext } from "react-icons";




const Footer = () => {
  return (
<>
<div className =' h-min bg-white rounded-xl  shadow-lg   mx-auto p-6 pb-16 '>

    <section className='flex md:flex-row justify-evenly items-center gap-4 flex-col'>

        <article className='flex flex-col gap-8'>
            <div className='font-samarkan text-2xl  font-normal text-orange-6 '> Newsletter</div>
         <input type="text" placeholder="Enter Your Email" class="border-2 rounded-2xl  h-12 px-4"/>
         <button class="bg-orange-400 text-white rounded-2xl font-semibold px-4 py-2  hover:bg-yellow-500 " onClick={""}>Subscribe</button>
            <div className='flex flex-row justify-center items-center gap-4 '>
            <IconContext.Provider value={{ color: "#FC7538", className: "global-class-name" ,size:"2rem"}}>
             <a href="#"> < BiLogoTwitter/></a>
             <a href="#"> <BiLogoInstagramAlt/></a>
             <a href="#"> <BiLogoDiscord/></a>
             <a href="#">  <BiLogoFacebook/></a>
             <a href="#"> <BiLogoLinkedin/></a>
</IconContext.Provider> 
            </div>
            {/* <div class="flex items-center justify-center h-screen bg-blue-100">
    
	<div class="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
    <div class="flex flex-col items-center space-y-4">
        <p class="text-sm text-gray-500 text-center w-5/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea.</p>
         <input type="text" placeholder="Enter Your Email" class="border-2 rounded-lg w-full h-12 px-4"/>
         <button class="bg-blue-400 text-white rounded-md font-semibold px-4 py-3 w-full">Subscribe</button>

       </div>
	
      </div>
	
  </div> */}

        </article>
        <article className='flex flex-col gap-8 '>
            <div className='font-semibold  text-base font-Poppins text-black-1 md:text-left  text-center' >Useful Links</div>
            <a href="#" className='font-normal  text-sm font-roboto black-2 hover:underline md:text-left text-center' >Privacy Policy</a>
            <a href="#" className=' font-normal  text-sm font-roboto black-2 hover:underline md:text-left text-center' >Terms & Conditions</a>
            <a href="#" className='font-normal   text-sm font-roboto black-2 hover:underline md:text-left text-center' >Support</a>
        </article>
        <article className='flex flex-col gap-8 '>
            <div className='font-semibold  text-base font-Poppins text-black-1 md:text-left text-center' >Disclaimer</div>
            <div className='font-normal  text-sm font-roboto black-2 w-[300px] md:text-left text-center'  >The information provided on this website and through our app is for educational and informational purposes only. It should not be considered as medical or professional advice. Always consult with a qualified professional before making any decisions based on information obtained from this app or website.</div>
        </article>

    </section>
</div>

</>
  )
}

export default Footer