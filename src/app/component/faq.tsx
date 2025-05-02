"use client"
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react' // fix import
import {motion} from "framer-motion"
const faqs = [
    {
        question: "What is Exa?",
        answer: "Exa is a platform that combines AI and search to give you smart, conversational access to online information.",
    },
    {
        question: "How does Exa work?",
        answer: "It uses advanced LLMs to generate meaningful responses based on search context and user input.",
    },
    {
        question: "Is Exa free to use?",
        answer: "Yes, Exa offers a free tier with optional premium features.",
    },
    {
        question: "Do I need an account to use Exa?",
        answer: "You can use Exa without an account, but signing up unlocks more features.",
    },
    {
        question: "How is my data handled?",
        answer: "We respect your privacy and securely handle your data with transparency and control.",
    },
];

function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClick = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <div className='my-10 w-full'>
            <motion.p
                initial={{ opacity: 0, x:40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
             className='text-3xl md:text-6xl text-center'>Have Questions? Exa has answers.</motion.p>
            <div className="md:w-full max-w-xl mx-auto w-[350px] py-4">
                {faqs.map((q, i) => (
                    <div className='mt-10 ' key={i}>
                        <button
                            onClick={() => handleClick(i)}
                            className="flex cursor-pointer justify-between items-center w-full text-left text-lg text-white font-bold"
                        >
                            <span>{q.question}</span>
                            <ChevronDown
                                className={`h-5 w-5 transform transition-transform duration-300 ${
                                    openIndex === i ? "rotate-180" : ""
                                }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === i ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="text-gray-400">{q.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq
