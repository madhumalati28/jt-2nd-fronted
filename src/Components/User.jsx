import React, { Children } from 'react'

const User = ({name,email,children}) => {
  return (
    
    <div>
        <p>Name:{name}</p>
        <p>Age:19</p>
        <p>emai:{email}</p>
        {children}
    </div>
  
  )
}

export default User