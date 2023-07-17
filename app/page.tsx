import { DailyUpdates, DevTools, Intro, Tutorials } from '@/components'
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
        <DevTools />
        <DailyUpdates />
        <Tutorials />
      </section>
    </>
  )
}
