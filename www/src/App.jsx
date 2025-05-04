import { useState } from 'react'

// icons
import Email from './assets/icons/email.svg';
import Facebook from './assets/icons/facebook.svg';
import Github from './assets/icons/github.svg';
import Linkedin from './assets/icons/linkedin.svg';

import { motion } from 'framer-motion';

import image from '/image.svg'
import './App.css'

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.9
  }
}

const pageTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20
}

function App() {

  return (
    <>
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}>

    <div className="main">
      <div className="image">
        <img src={image} width={418} height={418} className='image'/>
      </div>
      <div className="desc">
        <p className="hello">Hello There</p>
        <p className="intro">
        I am <span>Zach David</span>, a backend developer constantly learning and creating new stuff every day. I am currently working on various applications such as appointment systems, web application apps, open source, and DevOps.
        </p>
        <div className="social">
         <a href="https://facebook.com/zenzxay">
          <img src={Facebook} alt="facebook" className="icon" />
         </a>
         <a href="https://github.com/zxaylex">
          <img src={Github} alt="github" className="icon" />
         </a>
         <a href="https://linkedin.com/in/zxayler">
          <img src={Linkedin} alt="linkedin" className="icon" />
         </a>
        </div>
      </div>
    </div>
    </motion.div>
    </>
  )
}

export default App
