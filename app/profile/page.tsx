"use client"

import { Intro } from '@/components'
import React from 'react'
import { useSession } from 'next-auth/react'

const Profile = () => {
    const { data:session } = useSession()

    return (
        <>
            <Intro
                category="👋 Hello"
                bgColor='bg-[#27374D]'
                username={`${session?.user?.name}`}
                categoryClasses=''
            />
            <section>

            </section>
        </>
    )
}

export default Profile
