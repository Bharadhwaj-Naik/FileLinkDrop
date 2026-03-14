import React from 'react'
import { UserButton } from '@clerk/nextjs'
function Files() {
  return (
    <div>
      Files
      <UserButton afterSignoutUrl="/"/>
    </div>
  )
}

export default Files
