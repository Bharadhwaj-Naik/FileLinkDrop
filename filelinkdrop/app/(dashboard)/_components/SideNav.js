// "use client"
// import { File, Shield, Upload, UploadIcon } from 'lucide-react'
// import Image from 'next/image'
// import React, { act, useState } from 'react'

// function SideNav() {
//     const menuList = [
//         {
//             id: 1,
//             name: 'Upload',
//             icon: UploadIcon,
//             path: '/upload'
//         },
//         {
//             id: 2,
//             name: 'Files',
//             icon: File,
//             path: '/files'
//         },
//         {
//             id: 3,
//             name: 'Upgrade',
//             icon: Shield,
//             path: '/upgrade'
//         }
//     ]
//     const [activeIndex, setActiveIndex] = useState(0);
//     return (
//         <div className='shadow-sm border-r h-full'>
//             <div className='p-5 border-b'>
//                 <Image src='../logo.svg' width={1000} height={400} />
//             </div>
//             <div className='flex flex-col float-left'>
//                 {menuList.map((item, index) => (
//                     <button className={`flex gap-2 p-4 px-6 hover:bg-pink-600 w-full ${activeIndex === index ? " text-orange-500" : ""
//                         }`}
//                     onClick={()=>setActiveIndex(index)}>
//                         <item.icon/>
//                         <h2>{item.name}</h2>
//                     </button>
//                 ))}
//             </div>
//         </div>

//     )
// }

// export default SideNav


"use client"
import { File, Shield, UploadIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SideNav() {

  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: UploadIcon,
      path: '/upload'
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="shadow-sm border-r h-full">

      <div className="p-5 border-b">
        <Image
          src="/logo.svg"
          width={380}
          height={100}
          alt="logo"
        />
      </div>

      <div className="flex flex-col">

        {menuList.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-2 p-4 px-6 hover:bg-pink-600 w-full transition-colors
            ${activeIndex === index ? "text-orange-500 bg-orange-50" : ""}`}
          >
            <item.icon size={18} />
            <h2>{item.name}</h2>
          </button>
        ))}

      </div>

    </div>
  )
}

export default SideNav