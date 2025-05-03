"use client"
import React, { useEffect, useState } from 'react'
import { VscTerminalUbuntu } from 'react-icons/vsc'
import { useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from 'hamburger-react'
import Image from 'next/image'

function Nav({ setLogin }: { setLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [user, setUser] = useState(false);
    const [profile, setProfile] = useState(false);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (status === 'authenticated') {
            setUser(true)
        }
    }, [status])

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    />
                )}
            </AnimatePresence>

            <nav className='fixed top-4 left-1 md:left-4 md:right-4 right-1 z-50  bg-black/40 backdrop-blur-md px-2 md:px-6 py-2 md:py-3 rounded-xl shadow-lg flex justify-between items-center'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <div
                            onClick={() => {
                                router.push('/')
                            }}
                            className='flex gap-3 cursor-pointer'>
                            <div className='flex flex-col justify-center'>
                                <VscTerminalUbuntu size={40} />
                            </div>
                            <p className='flex flex-col justify-center text-3xl'>Exa</p>
                        </div>

                        <div className='pl-5 hidden md:flex items-center justify-center gap-6'>
                            <p className='cursor-pointer'>Why Exa</p>
                            <p className='cursor-pointer'>Pricing</p>
                            <p className='cursor-pointer'>Report Issue</p>
                        </div>
                    </div>
                </div>

                <div className='hidden md:block'>
                    {!user ? (
                        <button
                            onClick={() => {
                                setLogin(true)
                            }}
                            className='flex items-center bg-white px-4 py-2 rounded-full text-black cursor-pointer hover:-translate-y-0.5 transition-all duration-200 ease-in-out'>
                            SignIn/SignUp
                        </button>
                    ) : (
                        <div className='relative z-0'>
                            <Image
                                onClick={() => setProfile(prev => !prev)}
                                src={session?.user?.image || ''} // Provide a fallback image if user image is undefined
                                alt="user"
                                width={30}   // Width of 30px
                                height={30}  // Height of 30px
                                className="cursor-pointer hover:border-2 hover:border-white rounded-full"
                            />
                            {profile && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    className='absolute top-12 right-0 bg-black text-white p-4 rounded-xl w-auto shadow-md'>
                                    <p className='text-sm flex gap-1 items-center whitespace-nowrap'>
                                        <span className=''>{session?.user?.name}</span>
                                    </p>
                                    <button
                                        onClick={() => signOut()}
                                        className='mt-2 text-sm bg-neutral-800 hover:bg-neutral-900 transition-all duration-300 ease-in-out cursor-pointer text-white w-full p-1 rounded-full text-center'>
                                        Sign Out
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Hamburger & Menu */}
                <div className='relative md:hidden z-50'>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="white" />
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full right-0 mt-3 bg-black text-white p-4 rounded-xl shadow-lg z-50 w-48"
                            >
                                <ul className="flex flex-col items-center gap-2">
                                    <li className="cursor-pointer hover:underline" onClick={() => setOpen(false)}>Why Exa</li>
                                    <li className="cursor-pointer hover:underline" onClick={() => setOpen(false)}>Pricing</li>
                                    <li className="cursor-pointer hover:underline" onClick={() => setOpen(false)}>Report Issue</li>
                                    {!user ? (
                                        <li
                                            onClick={() => {
                                                setLogin(true)
                                                setOpen(false)
                                            }}
                                            className="cursor-pointer bg-black text-white text-center rounded-full  px-2 py-1 hover:bg-neutral-800"
                                        >
                                            SignIn
                                        </li>
                                    ) : (
                                        <li
                                            onClick={() => {
                                                signOut()
                                                setOpen(false)
                                            }}
                                            className="cursor-pointer bg-neutral-700 px-2 text-white text-center rounded-full py-1 hover:bg-neutral-800"
                                        >
                                            Sign Out
                                        </li>
                                    )}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </>
    )
}

export default Nav;
