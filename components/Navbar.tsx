"use client"

import Image from "next/image"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <motion.nav 
    initial={{
      y:10,
      opacity:0
    }}

    whileInView={{
      y:0,
      opacity:1
    }}
    className="py-5 mb-3 flex items-center justify-between">
      <Image
      alt="logo"
      src="/logo.png"
      height={50}
      width={50}
      className="rounded-full animate-spin duration-slow"
      />
    </motion.nav>
  )
}

export default Navbar