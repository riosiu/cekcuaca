import React from 'react'

type Props = {
    children?: React.ReactNode
}

const Layout = ({children} : Props) => {
  return (
    <>
        <nav>
        <nav className=" bg-header p-5 flex flex-row text-white justify-between top-0 left-0">
        <h1>Cuacaaaa!</h1>
        <ul className="flex flex-row gap-5">
          <li className='cursor-pointer hover:scale-125'>Home</li>
          <li className='cursor-pointer hover:scale-12'>About Us</li>
        </ul>
      </nav>

      <main className="min-h-screen bg-slate-900 p-2  text-white">
        {children}
      </main>
      <footer className="p-5 bg-footer text-center text-white">
        Create Using React.js and Import API from openweather.com
      </footer>
        </nav>
    </>
  )
}

export default Layout