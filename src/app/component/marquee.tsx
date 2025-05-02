import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image';

const uMarquee = [
    '01.svg',
    '02.svg',
    '03.svg',
    '04.svg',
    '05.svg',
    '06.svg',
    '07.svg',
    '08.svg',
    '09.svg',
    '10.svg',
    '12.svg',
    '13.svg',
    '14.svg',
    '15.svg',
    '16.svg',
    '17.svg',
    '18.svg',
    '19.svg',
    '20.svg',
    '21.svg',
    '22.svg',
]

interface Typess {
    from : string, 
    to   : string
}

function Marquee({from, to} : Typess) {
    return (
    <div className="flex [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {uMarquee.map((image, index) => {
          return  <Image
          alt="img"
          src={image}
          key={index}
          width={192}   // same as w-48 (48 * 4 = 192px)
          height={144}  // same as h-36 (36 * 4 = 144px)
          className="pr-20"
        />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {uMarquee.map((image, index) => {
          return   <Image
          alt="img"
          src={image}
          key={index}
          width={192}   // same as w-48 (48 * 4 = 192px)
          height={144}  // same as h-36 (36 * 4 = 144px)
          className="pr-20"
        />
      ;
        })}
      </motion.div>
    </div>
  );
}

export default Marquee