import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import {AiFillLeftCircle,AiFillRightCircle} from "react-icons/ai"
import "slick-carousel/slick/slick-theme.css";
import nft1 from './assets/images/nft1.png'
import nft2 from './assets/images/nft2.png'
import nft3 from './assets/images/nft3.png'
import nft4 from './assets/images/monk.png'
import fire from './assets/icons/fire.png'
import leftArrow from './assets/icons/leftArrow.png'
import rightArrow from './assets/icons/rightArrow.png'
import Insta from './assets/icons/Insta.png'
import Linkedin  from './assets/icons/Linkedin.png'


const Team = () => {
  return (
    <>
      <div className='border-solid border-[1px]  border-slate-500 '>
    <div className='h-min bg-white-1  mb-14 '>
        {/* <section className='border-solid border-4 border-cyan-950 text-center p-10 md:mx-32 mx-12'> */}
        <section className='text-center p-10 md:mx-32 mx-auto'>
            <p className='font-roboto text-4xl mb-4 font-semibold text-black '> Meet multi-talented people who are <br/> passionate about their craft</p>
            <p className='font-samarkan text-2xl mb-4 font-normal text-orange-6 '>Meet the team</p>
        </section>
        
        
        
        {/* <section className='border-solid border-4 border-cyan-950 text-center p-10 md:mx-12 mx-8 '> */}
        {/* <section className='text-center p-10 md:mx-12 mx-8 '>
           <div className=' '>

        
          <Slider {...settings}>
          {nfts.map((nft)=>{

            const {id, name,creater,image} = nft

            return (
            
              // <article key={id} className='border-solid border-4 border-cyan-950 relative inline-block '>
              <article key={id} className='relative inline-block p-2'>
              <img src={image} className='rounded-lg'/>
              <div className = "absolute right-6 top-5 h-[20%] w-[20%]  bg-white  hover:bg-red-600 rounded-full flex justify-center items-center">

             <img src={fire} className=' ' />
              </div>
                  <div className='absolute inset-x-4 sm:bottom-4  bottom-1  shadow-2xl bg-white bg-opacity-90 md:p-4 p-2 rounded-full max-w-full justify-between items-center flex flex-col md:flex-row'>
                      <div className='' >
  
                      <p className='font-roboto font-normal text-xl'>{name}</p>
                      <p className='font-roboto font-normal text-sm text-gray-1' >{creater}</p>
                      </div>
                      <button type="button" className=" text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-4 text-center mr-0 mb-0 dark:focus:ring-yellow-900">View Collections</button>
                      
                  </div>
  
              </article>)
        
            
})}
          </Slider>
          </div>

          </section> */}

           <section className='flex md:flex-row flex-col gap-4 mx-10'>
           {nfts.map((nft)=>{

const {id, name,creater,image} = nft

return (

          
            <article  key ={id} className='relative inline-block '>
            <img src={image} className='rounded-lg'/>
            {/* <img src={fire} className='absolute left-0 right-0 top-8 h-[50px] w-[50px] bg-white ' /> */}
            {/* <div className = "animate-bounce absolute right-4 top-6 h-[20%] w-[20%]  bg-white rounded-full flex justify-center items-center">

            <img src={image} className=' ' />
            </div> */}

                <div className='absolute inset-x-4 bottom-2 shadow-2xl bg-white bg-opacity-90 p-4 rounded-full max-w-full justify-between items-center flex flex-col md:flex-row'>
                    <div className=' text-start ' >

                    <p className='font-roboto font-normal text-xl'>{name}</p>
                    <p className='font-roboto font-normal text-sm text-gray-1' >{creater}</p>
                    </div>
                    <button type="button" className=" text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-4 text-center mr-0 mb-0 dark:focus:ring-yellow-900 flex flex-row gap-2">
                        <img src={Insta} alt="" srcset="" />
                        <img src={Linkedin} alt="" srcset="" />
                        </button>
                    
                </div>
            </article>)

})}

            </section>


        </div>
        </div>
    </>
  )
}

export default Team;


const nfts = [
{id:1,image:nft1,name:'Yogi Anime',creater:'@subhankar'},
{id:2,image:nft2,name:'Plant Anime',creater:'@Vijay'},
{id:3,image:nft3,name:'Pokemon Anime',creater:'@Shyam'},


]