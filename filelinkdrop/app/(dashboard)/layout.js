// import React from 'react'
// import SideNav from './_components/SideNav'
// import TopHeader from './_components/TopHeader'

// function layout({children}) {
//   return (
//     <div>
//         <div className=' h-full md: w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
//             <SideNav/>
//         </div>
//         <div className='md:ml-64'>
//             <TopHeader/>
//             {children}
//         </div>
      
//     </div>
//   )
// }

// export default layout


"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'

function Layout({ children }) {

  const [open, setOpen] = useState(false)

  return (
    <div>

      {/* Sidebar */}
      <div
        className={`h-full w-64 flex-col fixed inset-y-0 z-50
        ${open ? "flex" : "hidden"}
        md:flex`}
      >
        <SideNav />
      </div>

      {/* Main content */}
      <div className="md:ml-64">
        <TopHeader toggleSidebar={() => setOpen(!open)} />
        {children}
      </div>

    </div>
  )
}

export default Layout