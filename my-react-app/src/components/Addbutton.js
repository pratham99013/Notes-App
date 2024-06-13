import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircle } from "react-icons/io";

const Addbutton = () => {
  return (
    <div>
<Link to = "/note/new" className='floating-button'>

<IoIosAddCircle></IoIosAddCircle>
</Link>  
    </div>
  )
}

export default Addbutton
