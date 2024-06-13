import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Notepage = ({history}) => {

  const { id } = useParams();
  console.log(id);
  let [note, setNote] = useState(null);
  const navigate = useNavigate(); 

  useEffect(()=>{
     getnodeid()
  },[id])

  let getnodeid = async() => {
    if(id === 'new'){return; }
    let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/?format=json`);
    let data = await response.json()
     console.log(data)

    setNote(data)
  }

  let update = async() => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/update/?format=json`, {
      method : "PUT",
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(note)
    });

  }

 
  let createNode = async() => {
    fetch(`http://127.0.0.1:8000/api/notes/create/`, {
      method : "POST",
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(note)
    });
    alert('Notes Saved!')

  }

  let deleteg = () => {
    fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/?format=json`, {
      method : "DELETE",
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(note)
    });



  }
  let handle = () =>{
    if (id !== 'new' && note.body == '') {
      deleteg()
  } else if (id !== 'new') {
     update()
  } else if (id === 'new' && note.body !== null) {
    navigate('/');
  }
  }


  return (
    <div className='note'>
      <div className="note-header">
      <Link to="/"><FaArrowLeft onClick={handle}></FaArrowLeft></Link>
      {id !== 'new' ? (
  <Link to="/">
    <button onClick={deleteg}>
      <MdDelete /> Delete
    </button>
  </Link>
) : (

    <button onClick={createNode}>
      Save
    </button>

)}
      </div>
    <textarea onChange={(e) =>{setNote({...note, 'body' : e.target.value})}}  defaultValue={note?.body}></textarea>

    </div>
  )
}

export default Notepage
