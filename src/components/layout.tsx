import Head from 'next/head'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <>
        <header className='bg-slate-800'>
          <nav className=" bg-header p-5 flex flex-row text-white justify-between top-0 left-0">
            <h1>Cek Cuaca!</h1>
            <ul className="flex flex-row gap-5">
              <li className='cursor-pointer hover:scale-125'>Home</li>
              <li className='cursor-pointer hover:scale-12'>About Us</li>
            </ul>
          </nav>
        </header>

        <main className="min-h-screen bg-slate-900 p-2  text-white">
          {children}
        </main>
        <footer className="p-5 bg-footer text-center text-white bg-zinc-800">
          Create Using Next.13 and Import API from openweather.com
        </footer>
      </>
    </>
  )
}

export default Layout