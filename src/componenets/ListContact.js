import React from 'react'
import Contact from "./Contact"

const ListContact = ({list}) => {
  return (
    <div>
        {list.length?list.map(elm=><Contact elm={elm}/>):<h2>NOt FOUND</h2>}
    </div>
  )
}

export default ListContact