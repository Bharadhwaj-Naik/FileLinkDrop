// import { UserButton } from '@clerk/nextjs'
// import { AlignJustify } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'

// function TopHeader() {
//   return (
//     <div className='flex p-5 border-b items-center justify-between md:justify-end'>
//       <AlignJustify className='md:hidden'/>
//       <Image src='/logo.svg' width={300} height={400} className='md:hidden' alt="logo"/>
//       <UserButton />
//     </div>
//   )
// }

// export default TopHeader
import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader({ toggleSidebar }) {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>

      <AlignJustify
        className='md:hidden cursor-pointer'
        size={28}
        onClick={toggleSidebar}
      />

      <Image
        src='/logo.svg'
        width={300}
        height={400}
        className='md:hidden'
        alt="logo"
      />

      <UserButton />

    </div>
  )
}

export default TopHeader