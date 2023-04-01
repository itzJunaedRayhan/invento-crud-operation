import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

function Read(props) {
    const {id} = useParams()
    const navigate = useNavigate();
    let obj = {}

    let info = JSON.parse(localStorage.getItem("comments")).filter((item) => item.id == id);
    if (info) {
      obj = info[0];
    }

  return (
    <div className='container'>
            <div className='container p-5'>
            <p>{obj.id}</p>
            <p>{obj.name}</p>
            <p>{obj.email}</p>
            <p>{obj.body}</p>
            <Link to="/">Back</Link>
            </div>
    </div>
  )
}

export default Read