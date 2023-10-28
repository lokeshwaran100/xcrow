import { Inter } from 'next/font/google';
import Image from 'next/image'
import DisplayCards from '@/components/DisplayCards';
import { SAMPLE_DATE } from '@/constants';

export default function Home() {
  return (
    <main className='flex justify-center w-full'>
    <DisplayCards
      data={SAMPLE_DATE}
    />
    </main>
  )
}
