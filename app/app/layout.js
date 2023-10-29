import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Web3ModalProvider } from '@/context/Web3ModalProvider'
import { StateContextProvider } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Escrow',
  description: 'Developed by Team Dackers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' '>
    <body className={`${inter.className} bg-[#000C24] text-white`}>
    <Web3ModalProvider>
    <StateContextProvider>
    <Navbar/>
      <div className='flex gap-10'>
      <Sidebar/>
      {children}
      </div>
    </StateContextProvider>
    </Web3ModalProvider>
    </body>

    </html>
  )
}
