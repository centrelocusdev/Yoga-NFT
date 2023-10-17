import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Story = () => {
  return (  <>


    <div className="bg-neutral-100 h-min bg-cover" >
        <article className=" p-10 md:mx-32 mx-auto text-center">
        {/* <article className=" border-solid border-2 border-cyan-950 p-10 md:mx-32 mx-12 text-center"> */}

        <div className=' font-monteserrat text-4xl mb-4 font-semibold text-orange-400 '>Our Story</div>
        <p className="font-monteserrat font-normal text-base  tracking-wider"> In ancient India, nestled among the Himalayan mountains, a group of individuals embarked on a quest for deeper meaning in life. They yearned for a connection with something greater, something that would infuse their existence with purpose and significance.<br/><br/>

         Their exploration led them to discover an ancient wisdom that had been passed down through the ages—the wisdom of Yoga. With its roots dating back over 5,000 years, Yoga emerged as a transformative practice, encompassing physical, mental, and spiritual dimensions. It was the path to connect with the divine and tap into a universal consciousness that transcended the material world.
           </p>
<div className="mt-6">


   <a href='#' className="  underline  font-monteserrat font-bold  text-base"> Read More 
    <AiOutlineArrowRight className="inline-block ml-2"/> 
   </a>

</div>
        </article>
        
        </div>
  </>
  )
}

export default Story