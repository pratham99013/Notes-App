import React,{useState, useEffect} from 'react'
import Listitem from '../components/Listitem'
import Addbutton from '../components/Addbutton'



const NotelistPage = () => {

    let [notes, setNotes] = useState([])

useEffect(()=>{
    getNodets();
})
 let getNodets = async () =>{
  let ans = await fetch('http://127.0.0.1:8000/api/notes/')
  let data = await ans.json()
  console.log(data)
  setNotes(data)
 }


  return (
    <div className='notes'>
      <div className="notes-header">

        <h2 className='notes-title'>&#9782; NOTES</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className='notes-list'>
        {notes.map((notes) => (
   <Listitem note = {notes}></Listitem>
        ))}
      </div>
      <Addbutton></Addbutton>
    </div>
  )
}

export default NotelistPage
