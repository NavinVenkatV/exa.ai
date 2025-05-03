"use client"
import React, { useState } from 'react'
import { Space_Grotesk } from 'next/font/google'
import Button from './ui/Button'
import Nav from './nav'
import Hori from './hori'
import Login from './login'
import Image from 'next/image'
import Pricing from './pricing'
import Footer from './footer'
import Faq from './faq'
import { motion } from "framer-motion"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin']
})

function HomePage() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };
  const [login, setLogin] = useState(false)
  return (
    <div className={`w-full h-auto relative z-0 pt-28 overflow-hidden text-white ${spaceGrotesk.className}`}>
      <Nav setLogin={setLogin} />
      {login && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-opacity-50">
          <Login setLogin={setLogin} />
        </div>
      )}
      <div className='flex  items-center justify-center'>
        <div className='flex flex-col justify-start mt-14 md:mt-32 items-center text-center'>
        <motion.div
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.2, ease: 'easeInOut' }}
         className="bg-gradient-to-br from-[#0f0f0f] via-[#0b1b33] border-1 border-neutral-800 to-[#000000] animate-gradient text-sm rounded-2xl px-3 py-1 my-2">Currently in beta v1.0</motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="md:text-7xl text-4xl font-bold w-[320px] md:w-[800px]"
            >
              Chat with the internet not just search it
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-3 w-[300px] md:w-[600px] text-neutral-400"
            >
              Built for thinkers, makers, and the endlessly curious.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10">
              <Button title="Get Started" place="dashboard" setLogin={setLogin}/>
            </motion.div>
          </motion.div>
          <div className='mt-12'>
            <Hori />
          </div>
          {/* <div className='flex bg-black px-7 items-center justify-center mt-14'>
            <Image />
          </div> */}
          <div className='mt-10'>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
             className='text-xl md:text-2xl'>Basic Illustration of exa</motion.p>
            <Image
              src="/image.png"
              alt=""
              width={1000}
              height={600}
              className="w-[400px] md:w-[1200px] h-[200px] md:h-[600px] object-cover 
             rounded-2xl mt-7 border-[1px] border-l-green-900 border-t-red-700 border-r-pink-700 border-b-yellow-700"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#0f0f0f] via-[#0b1b33] mt-10 to-[#000000]">
        <div className="flex justify-center">
          <Pricing />
        </div>
        <div className='flex justify-center '>
          <div><Faq /></div>
        </div>
        <div className="mt-4 w-full h-full flex items-center justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
