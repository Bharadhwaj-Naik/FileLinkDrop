import { AlertCircle } from 'lucide-react'
import React from 'react'

function alertmsg({msg}) {
  return (
    <div>
        <AlertCircle/>
        {msg}
      
    </div>
  )
}

export default alertmsg
