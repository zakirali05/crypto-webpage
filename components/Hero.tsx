"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-24 md:gap-5 ">
      <div className="flex flex-col gap-2 mt-8">
        <motion.div
        initial={{
            y:20,
            opacity:0   
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{
            delay:0
        }}
        className="flex gap-2 items-center">
          <div className="w-[60px] h-1 bg-[#db01a8]" />
          <p className="font-semibold text-lg text-[#db01a8]">Trade</p>
        </motion.div>

        <motion.h1
         initial={{
            y:20,
            opacity:0   
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{
            delay:0.2
        }}
        className="font-bold text-[2.7rem] max-w-[100%] leading-[3rem] uppercase ">
          cryptos, stocks, commodities and forex with{" "}
          <span className="bg-gradient-to-r from-[#cd2bc8] to-[#3aa9e1] bg-clip-text text-transparent">
            leverages!
          </span>
        </motion.h1>
        <motion.div
         initial={{
            y:20,
            opacity:0   
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{
            delay:0.4
        }}
        className="flex flex-col gap-3 mt-4 text-sm">
          <div className="flex gap-3 items-center">
            <Sparkle className="text-[#cd2bc8]" />
            <p className="text-muted-foreground ">
              <span className="font-semibold text-secondary">
                Milestone 1:{" "}
              </span>
              First 100,000 users will get 20 LVRJ
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Sparkle className="text-[#cd2bc8]" />

            <p className="text-muted-foreground ">
              <span className="font-semibold text-secondary">
                Milestone 1:{" "}
              </span>
              First 100,000 users will get 20 LVRJ
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Sparkle className="text-[#cd2bc8]" />

            <p className="text-muted-foreground ">
              <span className="font-semibold text-secondary">
                Milestone 1:{" "}
              </span>
              First 100,000 users will get 20 LVRJ
            </p>
          </div>
        </motion.div>
        <motion.div
         initial={{
            y:20,
            opacity:0   
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{
            delay:0.5
        }}
        >
        <Button className="w-[150px] mt-4 bg-gradient-to-r from-[#cd2bc8] to-[#5e00c3] ">
          Join waitlist
        </Button>
        </motion.div>
      </div>
      <div className="relative order-first md:order-last">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="absolute z-[-10] h-[400px] w-[400px] rounded-full bg-white/5 blur-xl right-[200px]"
        />
        <motion.div
          initial={{
            x: 0,
            y: 54,
            scale: 1,
            rotate: 0,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0,
          }}
        >
          <Image
            alt="img"
            src="/nft_1.jpg"
            width={500}
            height={500}
            className=" rounded-md"
          />
        </motion.div>
        <motion.div
          className="absolute top-[40px] left-[40px]"
          initial={{
            x: 0,
            y: 108,
            scale: 1,
            rotate: 0,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
          }}
        >
          <Image
            alt="img"
            src="/nft_2.jpg"
            width={500}
            height={500}
            className=" rounded-md "
          />
        </motion.div>
        <motion.div
          className="absolute top-[80px] left-[80px]"
          initial={{
            x: 0,
            y: 162,
            scale: 1,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          <Image
            alt="img"
            src="/nft_3.jpg"
            width={500}
            height={500}
            className=" rounded-md "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
