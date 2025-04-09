"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
           <motion.div
           variants={slideInFromTop}
            className='Welcome-box py-[15px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
           >
             <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
             <h1 className='Welcome-text text-[10px]'>Frontend Developer Portfolio</h1>
           </motion.div>

           <motion.div
           variants={slideInFromLeft(0.5)}
           className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
           >
            
             Providing
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500'>the best</span>
              project experience
            
           </motion.div>

           <motion.p
           variants={slideInFromLeft(0.8)}
           className='text-lg text-gray-400 my-5 max-w-[600px]'
           >
                I&apos;am a frontend developer with a passion for creating beautiful and functional web applications. 
                I have experience with React, Next.js, and Tailwind CSS. I am always looking to learn new technologies and improve my skills.
                Mastering components from: 
                <div className='flex flex-wrap gap-4 mt-4'>
                    <a 
                    href="https://www.framer.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-2 border border-purple-500 text-white rounded-md hover:shadow-[0_0_10px_#a855f7] transition-shadow'
                    >
                    Framer
                    </a>
                    <a 
                    href="https://greensock.com/gsap/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-2 border border-green-500 text-white rounded-md hover:shadow-[0_0_10px_#22c55e] transition-shadow'
                    >
                    GSAP
                    </a>
                    <a 
                    href="https://aceternity.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-2 border border-blue-500 text-white rounded-md hover:shadow-[0_0_10px_#3b82f6] transition-shadow'
                    >
                    Aceternity
                    </a>
                </div>
           </motion.p>
           <motion.a
           variants={slideInFromLeft(1)}
           className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-200px'
           >
             Learn More!
           </motion.a>
        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex items-center justify-center'
        >
          <img
          src='/mainIconsdark.svg'
          alt='icons'
          height={650}
          width={650}
          />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent