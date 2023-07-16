import { DailyUpdates, Intro } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Intro
        category="👋 Hello"
        bgColor='bg-[#27374D]'
        categoryClasses=''
      />
      <section>
        <DailyUpdates />
      </section>
    </>
  )
}
