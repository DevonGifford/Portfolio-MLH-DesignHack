import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import LeftSide from '@/components/LeftSide';
import RightSide from '@/components/RightSide';

import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Devon Gifford</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-textLight'>     
        <Navbar />
        <div className='w-full h-[88vh] lg:flex items-center gap-20 justify-between'> 
          <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <LeftSide />
          </div>
          <div className='h-[88vh] mx-auto p-4'>Middle</div>
          <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <RightSide />
          </div>

        </div>
      </main>
    </>
  )
}
