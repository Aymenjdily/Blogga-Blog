"use client"

import React, {useState, useEffect, Fragment} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Menu, Transition } from "@headlessui/react";
import { useProviders } from '@/hooks/useProviders'

const Navbar = () => {
    const {data:session} = useSession()
    const [toggle, setToggle] = useState(false)

    const { providers } = useProviders()

    return (
        <header className="text-gray-600 body-font absolute w-full">
            <div className="px-10 flex flex-wrap p-5 flex-col md:flex-row items-center relative">
                <Link
                    href="/"
                    className='font-extrabold md:mb-0 mb-3 text-2xl uppercase text-white'
                >
                    blogga
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/devTools" className="md:mr-10 mr-5 text-white hover:text-gray-300 text-sm font-semibold">Dev Tools</Link>
                    <Link href="/dailyUpdates" className="md:mr-10 mr-5 text-white hover:text-gray-300 text-sm font-semibold">Daily Updates</Link>
                    <Link href="/Tutorials" className="md:mr-10 mr-5 text-white hover:text-gray-300 text-sm font-semibold">Tutorials</Link>
                    <Link href="/Library" className="md:mr-10 mr-0 text-white hover:text-gray-300 text-sm font-semibold">Library</Link>
                </nav>
                {
                    session?.user ? (
                        <Menu as="div" className="">
                            <Menu.Button
                                className="z-[10] md:mt-0 mt-5"
                                onMouseEnter={() => setToggle(true)}
                            >
                                <Image
                                    src={session?.user.image || ''}
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                    alt="profile"
                                    onClick={() => setToggle((prev) => !prev)}
                                />
                            </Menu.Button>
                            <Transition
                                show={toggle}
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    static
                                    className="absolute w-[300px] right-0 flex md:items-center justify-center flex-col bg-white p-10 rounded-xl m-5"
                                    onMouseLeave={() => setToggle(false)}
                                >
                                    <div className="flex md:flex-col items-center md:gap-0 gap-2">
                                        {session?.user?.image && (
                                            <Image
                                                src={session?.user?.image}
                                                className="rounded-full"
                                                width={80}
                                                height={80}
                                                alt="profile Image"
                                            />
                                        )}
                                        <p className="font-semibold">{session?.user?.name}</p>
                                    </div>
                                    <div className="flex flex-col md:text-center mt-5 gap-2">
                                        <Menu.Item>
                                            <Link 
                                                className=""
                                                href="/profile"
                                                onClick={() => setToggle(false)}
                                            >
                                                My Profile
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link 
                                                className=""
                                                href="/create-post"
                                                onClick={() => setToggle(false)}
                                            >
                                                Create your Post
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link 
                                                className=""
                                                href="/share-book"
                                                onClick={() => setToggle(false)}
                                            >
                                                Share a Book
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setToggle(false)
                                                    signOut()
                                                }}
                                                className="mt-5 w-full bg-[#27374D] px-8 py-2 rounded-md font-semibold duration-300 text-white"
                                            >
                                                Sign Out
                                            </button>
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                             
                        </Menu>
                    ) : (
                        <>
                            {
                                providers && Object.values(providers).map((provider: any) => (
                                    <button
                                        type="button"
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                        className="bg-white/10 text-sm px-8 py-2 rounded-md font-semibold md:mt-0 mt-5 duration-300 text-white"
                                    >
                                        Sign In
                                    </button>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </header>
    )
}

export default Navbar