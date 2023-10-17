import React from 'react'
import Question from './Question'

const Faq = () => {
  return (
    <>
    <div id='faq' className=' h-min pb-48 border-solid border-[1px]  border-slate-500 scroll-m-24 bg-white-1 '>
    <div className=' bg-white-1   '>
        {/* <section className='border-solid border-4 border-cyan-950 text-center p-10 md:mx-auto mx-auto'> */}
        <section className='text-center p-10 md:mx-auto mx-auto'>
        {/* <section className='text-center p-10 md:mx-32 mx-12'> */}
            <p className=' font-monteserrat md:text-4xl text-3xl mb-4 font-semibold text-orange-6 '> Frequently Asked Questions</p>
        </section>


    <scetion className="  ">

        {questions.map((question)=> {
        return (
            <Question  key={question.id} {...question} />

        )}
        
        )}

    </scetion>

        </div>
        </div>
    
    
    </>
  )
}

export default Faq

const questions = [
{id:1,title:'What is the benefit of owning a Yoga NFT compared to physical artwork?',
info:'Owning a Yoga NFT provides the advantage of digital ownership, allowing for easy storage, display, and sharing across various digital platforms. Additionally, Yoga NFTs can have programmable features, such as unlockable content or royalties, which enhance their value and functionality.'},
{id:2,title:'How do I ensure the authenticity and originality of a Yoga NFT?',
info:'Owning a Yoga NFT provides the advantage of digital ownership, allowing for easy storage, display, and sharing across various digital platforms. Additionally, Yoga NFTs can have programmable features, such as unlockable content or royalties, which enhance their value and functionality.'},
{id:3,title:'Can I sell my Yoga NFTs on any platform?',
info:'Owning a Yoga NFT provides the advantage of digital ownership, allowing for easy storage, display, and sharing across various digital platforms. Additionally, Yoga NFTs can have programmable features, such as unlockable content or royalties, which enhance their value and functionality.'},
{id:4,title:'How do I make a payment for a Yoga NFT?',
info:'Owning a Yoga NFT provides the advantage of digital ownership, allowing for easy storage, display, and sharing across various digital platforms. Additionally, Yoga NFTs can have programmable features, such as unlockable content or royalties, which enhance their value and functionality.'},

]