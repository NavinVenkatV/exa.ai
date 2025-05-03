import React from 'react'
import PriceBox from './priceBox'

import { motion } from 'framer-motion'

const item1 = [
  'AI-Powered Search Assistance',
  'Basic Research Queries',
  '24/7 Support',
  'Basic Export Options',
];

const item2 = [
  'Enhanced AI Responses',
  'Priority Research Results',
  'Priority Support',
  'HD Data Export',
  'Advanced AI Insights',
  'Personalized Recommendations',
];

const item3 = [
  'Unlimited Access to Advanced AI Models',
  'Custom Research Styles',
  'Dedicated Personal Support',
  'API Access for Custom Integrations',
  'Advanced Customization Options',
  'Collaborative Workspace Features',
];


function Pricing() {
  return (
    <div className="relative bg-gradient-to-br from-[#0d1117] via-[#1f2b3a] to-[#000000]

 rounded-2xl w-full max-w-[1400px] mx-auto  text-white py-10 overflow-hidden">

      <div className="relative z-10">
        <div className="flex px-5 justify-center items-center text-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-3xl md:text-6xl">
              Simple plans. No hidden fees.
            </motion.div>
            <p className="mt-3 text-sm md:text-md text-neutral-500">
              Choose the perfect plan for your needs. No hidden fees.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row gap-12 px-7 mt-10">
            <PriceBox
              title1="Basic"
              title2="The key features to unlocking your creativity and bringing your vision to life."
              context={item1}
              price="Free"
            />

            <PriceBox
              title1="Premium"
              title2="Built to scale. The perfect plan for ambitious businesses on the rise."
              context={item2}
              price="$10"
            />

            <PriceBox
              title1="Enterprise"
              title2="Dedicated support and infrastructure for your company and unlimited stock content."
              context={item3}
              price="$19"
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
