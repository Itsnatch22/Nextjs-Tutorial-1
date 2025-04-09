import { Socials } from '@/constants'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61] backdrop-blur-md z-50 px-30'>
       <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="#about me" className='h-auto w-auto flex flex-row items-center'>
                <img 
                src="/NavLogo.png"
                alt="logos"
                width={70}
                height={70} />

                <span className='font-bold ml-[18px] hidden md:block text-gray-300'>Next.js Portfolio</span>
            </a>
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between gap-x-4 border w-full h-auto border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[18px] rounded-full text-gray-200'>
                <a href="#about" className='cursor-pointer'>About</a>
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                <a href="#projects" className='cursor-pointer'>Projects</a>
                <a href="#contact" className='cursor-pointer'>Contact</a>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
            {Socials.map((social) => (
            <img
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar