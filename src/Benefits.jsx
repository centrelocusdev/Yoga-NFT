import React from 'react'
import b1 from './assets/icons/b1.png'
import b2 from './assets/icons/b2.png'
import b3 from './assets/icons/b3.png'
import b4 from './assets/icons/b4.png'
import b5 from './assets/icons/b5.png'
import b6 from './assets/icons/b6.png'
import b7 from './assets/icons/b7.png'
import b8 from './assets/icons/b8.png'
// import b1 from './assets/icons/b1.png'

const Benefits = () => {
  return (
    <>
    
    {/* <div className='h-[1020px] bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-orange-7 to-slate-1  border-solid  border-2'> */}
    {/* <div className='h-[1020px] bg-[radial-gradient(at_left,_var(--tw-gradient-stops))] from-slate-1 to-orange-7  border-solid  border-2'> */}
    <div className='h-min bg-gradient-to-r from-slate-1 to-orange-7 to-70%  border-solid  border-2 pb-12 '>
        {/* <section className='border-solid border-4 border-cyan-950 text-center p-10 md:mx-32 mx-12 p-[4%] md:mx-[18%] mx-[10%]'> */}
        <section className=' text-center p-10 md:mx-32 mx-12 p-[4%] md:mx-[18%] mx-auto'>
            <p className='font-monteserrat md:text-5xl text-3xl mb-4 font-semibold text-white '> Additional Benefits of joining <br/>the NFT Cult</p>
            <p className='font-samarkan md:text-2xl text-2xl mb-4 font-normal text-white '>Benefits</p>
        </section>
        
        {/* < section className='p-10 md:mx-12 mx-6 border-solid border-4 border-cyan-950 flex flex-row  gap-5 flex-wrap'> */}
        {/* < section className='p-10 md:mx-12 md:mx-[4%]  mx-6 border-solid border-4 border-cyan-950 flex gap-6 justify-center flex-wrap '> */}
        < section className='p-10 md:mx-12 md:mx-[4%]  mx-auto flex gap-6 justify-center flex-wrap mb-8'>
            {/* <article className=' ml-5 border-solid border-0 rounded-md shadow-inner box-content w-64 p-4  '> */}

           {/* {benefits.map((benefit)=>{
            const {id,text,img} = benefit 
               return (
                <article key = {id}className=' mt-6 border-solid rounded-3xl box-content md:w-96  w-56 p-4  shadow-[0_0px_20px_rgba(0,0,0,0.4)] '>
                <img src={img}/>
                <div className='font-monteserrat md:text-2xl text-xl mt-4 mb-4 font-semibold tracking-wider text-white'>
                {text}
                </div>
                </article>
               )
           })} */}

           {benefits.map((benefit)=>{
            const {id,text,img} = benefit 
               return (
                <article className='group [perspective:1000px] md:w-[30%] '>
                {/* <div key = {id} className=' relative mt-6  min-h-[160px] border-solid rounded-3xl box-content md:w-96  w-56 p-4  shadow-[0_0px_20px_rgba(0,0,0,0.4)] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] '> */}
                <div key = {id} className=' relative mt-6  min-h-[170px]  border-solid rounded-3xl box-content  p-4 shadow-[0_0px_20px_rgba(0,0,0,0.4)] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] '>
                <div className='aboslute inset-0'>
                <img src={img}/>
                <div className='font-monteserrat md:text-2xl text-xl mt-4 mb-4 font-semibold tracking-wider text-white'>
                {text}
                </div>
                </div>
                <div className="absolute inset-0 h-fit w-full rounded-xl bg-white p-4  text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <ul className="flex min-h-full flex-col">
          <li>
          • Attend in-person events featuring yoga experts and practitioners from around the world.
          </li>
          <li>
          • Engage in workshops, seminars, and retreats that provide immersive experiences and opportunities for personal growth.
          </li>
        </ul>
      </div>


                  </div>
                </article>

               )
           })}

            

            {/* <article className=' border-solid rounded-3xl box-content md:w-96  w-56 p-4  shadow-[0_0px_20px_rgba(0,0,0,0.4)] '>
                <img src={b1}/>
                <div className='font-monteserrat md:text-2xl text-xl mt-4 mb-4 font-semibold tracking-wider text-white'>
                Free Workshop in the Yoga Capital of the World, Rishikesh, India

                </div>

            </article> */}


            {/* <article className='group [perspective:1000px] border-solid rounded-3xl box-content md:w-96  w-56 p-4  shadow-[0_0px_20px_rgba(0,0,0,0.4)]  '>
                 <div className='relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] ' >
                  <div className='aboslute inset-0'>

                <img src={b1}/>
                <div className='font-monteserrat md:text-2xl text-xl mt-4 mb-4 font-semibold tracking-wider text-white'>
                Free Workshop in the Yoga Capital of the World, Rishikesh, India
                </div>
                 </div>


        <div class="absolute inset-0 h-full w-full rounded-xl  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">Jane Doe</h1>
          <p class="text-lg">Photographer & Art</p>
          <p class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>

            </article> */}

            {/* <article className='group [perspective:1000px]  '>
                 <div className='relative border-solid rounded-3xl box-content md:w-96  w-56 p-4  shadow-[0_0px_20px_rgba(0,0,0,0.4)]  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] ' >
                  <div className='aboslute inset-0'>

                <img src={b1}/>
                <div className='font-monteserrat md:text-2xl text-xl mt-4 mb-4 font-semibold tracking-wider text-white'>
                Free Workshop in the Yoga Capital of the World, Rishikesh, India
                </div>
                 </div>

        <div className="absolute inset-0 h-full w-full rounded-xl bg-white p-4  text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <ul className="flex min-h-full flex-col">
          <li>
          • Attend in-person events featuring yoga experts and practitioners from around the world.
          </li>
          <li>
          • Engage in workshops, seminars, and retreats that provide immersive experiences and opportunities for personal growth.
          </li>
        </ul>
      </div>


                  </div>

            </article> */}



        </section>





        </div>
    
    </>
  )
}

export default Benefits


const benefits= [

    {id:1,img:b1,text:'Free Workshop in the Yoga Capital of the World, Rishikesh, India'},
    {id:2,img:b2,text:'Visit to Cosmic Energy Space'},
    {id:3,img:b3,text:'Board of Director Rights (Phase 2)'},
    {id:4,img:b4,text:'Lifetime Membership Access of EkY Club'},
    {id:5,img:b5,text:'Voting Rights to Gurus (Phase 2)'},
    {id:6,img:b6,text:'Board of Director Rights (Phase 2)'},
    {id:7,img:b7,text:'Merchandise for Gurus'},
    {id:8,img:b8,text:'Access to exclusive Private Events and Meditation circle'},
    {id:9,img:b1,text:'Visit to Cosmic Energy Space'},



]