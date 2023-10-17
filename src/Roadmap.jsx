import React from 'react'
import {RxDividerHorizontal, RxDividerVertical} from 'react-icons/rx'
const Roadmap = () => {
  return (
    < >
    <div id='roadMap' className='border-solid border-[1px] border-cyan-950 scroll-m-24 h-min   bg-gradient-to-bl from-gray-2 to-slate-2 to-100% '>
        {/* <section className='border-solid border-4 border-cyan-950 text-center p-10 md:mx-32 mx-12 p-[2%] md:mx-[18%] mx-[10%]'> */}
        <section className='text-center p-10 md:mx-32 mx-12 p-[2%] md:mx-[18%] mx-[10%] mx-auto'>
            <p className='font-monteserrat md:text-4xl text-4xl mb-4 font-semibold text-black '> Journey Of Yoga NFTs</p>
            <p className='font-samarkan md:text-2xl text-2xl mb-2 font-normal text-orange-6 '>Roadmap</p>
        </section>
         <section className=' mb-12'>
            {roadMap.map((item)=>{
                 const {id,percent,heading,des} = item
                 console.log(id,percent,heading,des)

                 return (

                 <article key={id} className='w-[80%]  flex md:flex-row flex-col justify-center items-center bg-white-2  p-6 mx-auto mb-4 divide-x-2  divide-black gap-8 rounded-lg '>
                 <div className='font-Limelight font-normal text-6xl' >
                       {percent}
                     
                 </div>
                 {/* <div className='flex flex-col justify-center items-centre gap-2 ml-6  mx-auto  '> */}
                 <div className=' p-6 flex flex-col justify-center items-centre gap-2 mx-auto  '>
                     <div className=' font-Limelight font-normal text-2xl'>{heading} </div>
                     <div className=' font-AnekDevanagari font-normal text-xl'>{des}
                     </div>
 
                 </div>
             </article> )



            })}

            {/* <article className='w-[80%]  flex md:flex-row flex-col justify-center items-center bg-white-2  p-6 mx-auto mt-4 divide-x-2  divide-black gap-8 rounded-lg '>
                <div className='font-Limelight font-normal text-6xl' >
                      10%
                    
                </div>
                <div className=' p-6 flex flex-col justify-center items-centre gap-2 mx-auto  '>
                    <div className=' font-Limelight font-normal text-2xl'>NFTs are being minted </div>
                    <div className=' font-AnekDevanagari font-normal text-xl'>
                    That’s where art becomes a part of the digital world. We wrap it like a gift in a nice and pretty NFT shell to make sure the soon-to-be owner is happy about everything.
                    </div>

                </div>
            </article> */}


            {/* <article className='w-[80%] flex md:flex-row  flex-col justify-center items-center bg-white-2 to-60% p-8 mx-auto mt-4 md:divide-x-2  divide-y-2 divide-black gap-8 rounded-lg'>
  <div className='font-Limelight font-normal text-6xl'>
    10%
  </div>
  <div className='flex flex-col justify-center align-center gap-2 ml-6 mx-auto'>
    <div className='font-Limelight font-normal text-2xl'>NFTs are being minted</div>
    <div className='font-AnekDevanagari font-normal text-xl'>
      That’s where art becomes a part of the digital world. We wrap it like a gift in a nice and pretty NFT shell to make sure the soon-to-be owner is happy about everything.
    </div>
  </div>
</article> */}





         </section>




        </div>
    </>
  )
}

export default Roadmap


const roadMap =  [
{id:1,percent:'10%',heading:'NFTs are being minted' ,
des:'That’s where art becomes a part of the digital world. We wrap it like a gift in a nice and pretty NFT shell to make sure the soon-to-be owner is happy about everything.'},
{id:2,percent:'25%',heading:'Getting into your eyes and ears with the promo',
des:'The hype starts building around our NFTs. People get to know our top drops and exclusive features, and the word spreads all over the place.'},
{id:3,percent:'50%',heading:'Interactive perks go live' ,
des:'Remember the NFT game we mentioned? Time to launch it! Now, you can try it right here and on our partner website - come visit and don’t forget to tell us what you think'},
{id:4,percent:'75%',heading:'Time for the main sales round' ,
des:'Too much waiting would be tiresome, wouldn’t it? So, at last, the sales are officially open! Hurry up: the limited collection gets sold out faster than you say “Shut up and take my money!”'},
{id:5,percent:'100%',heading:'Pat on the back for all of us and let the new journey begin',
des:'Wow, that was fun! This time, it took you just 2 days to reach sold out. We should do that again, and we’ve already started on our next project. Stay tuned!'},
]