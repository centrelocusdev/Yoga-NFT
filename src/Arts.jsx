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

function SampleNextArrow(props) {
  const { className, style, onClick,imgSrc,imgAlt } = props;
  console.log(style,props,imgSrc,imgAlt)
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red",height:"50px", fontSize:"50px" ,width: "50px"}}
      // style={{ ...style, display: "block", background: "red",height:"500px", fontSize:"500px" ,width: "500px"}}
      onClick={onClick} >

      <span
        style={{
          fontSize: "36px", // Increase the font size for the arrow icon
          lineHeight: "50px", // Match the line height to the container height
          color: "white", // Optional: Set the color of the arrow icon
        }}
      >
        {/* <AiFillRightCircle className='inline h-[50px] w-[50px]'/> */}
        {/* &gt;Use your arrow icon or content here */}
        {/* <img src={AiFillRightCircle}/> */}
      </span>
    </div>
  );
}
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow /> ,
    //   prevArrow: rightArrow,

          initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  }

  

const Arts = () => {
  return (
    <>
    
    <div className='bg-white-1 border-solid h-min border-2'>
        {/* <section className='border-solid border-4 border-cyan-950 text-center p-10 md:mx-32 mx-12'> */}
        <section className='text-center p-10 md:mx-32 mx-auto'>
            <p className='font-roboto text-4xl mb-4 font-semibold text-black '> Amazing and  Super Unique<br/> Art of This Week</p>
            <p className='font-samarkan text-2xl mb-4 font-normal text-orange-6 '>Trending collections</p>
        </section>
        
        
        
        {/* <section className='border-solid border-4 border-cyan-950 text-center p-10 md:mx-12 mx-8 '> */}
        <section className='text-center p-10 md:mx-12 mx-auto '>
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

            {/* <article className='relative inline-block'>
            <img src={nft1} className='rounded-lg'/>
            <img src={fire} className='absolute left-0 right-0 top-8 h-[50px] w-[50px] bg-white ' />
            <div className = "animate-bounce absolute right-4 top-6 h-[20%] w-[20%]  bg-white rounded-full flex justify-center items-center">

            <img src={fire} className=' ' />
            </div>

                <div className='absolute inset-x-4 bottom-4 shadow-2xl bg-white bg-opacity-90 p-4 rounded-full max-w-full justify-between items-center flex flex-col md:flex-row'>
                    <div className='' >

                    <p className='font-roboto font-normal text-xl'>Yogi Anime</p>
                    <p className='font-roboto font-normal text-sm text-gray-1' >@subhankar</p>
                    </div>
                    <button type="button" className=" text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-4 py-4 text-center mr-0 mb-0 dark:focus:ring-yellow-900">View Collections</button>
                    
                </div>
            </article> */}






    {/* <div className="relative">
      <img
        src={nft2}
        alt="Image Description"
        className="h-auto rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 rounded-t-lg max-w-full">
        <p className="text-lg text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Subscribe
        </button>
      </div>
    </div> */}

        </section>
        </div>
    </>
  )
}

export default Arts;


const nfts = [
{id:1,image:nft1,name:'Yogi Anime',creater:'@subhankar'},
{id:2,image:nft2,name:'Plant Anime',creater:'@Vijay'},
{id:3,image:nft3,name:'Pokemon Anime',creater:'@Shyam'},
{id:4,image:nft2,name:'Plant Anime',creater:'@4th'},


]