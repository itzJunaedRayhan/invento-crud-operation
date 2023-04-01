import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'



function Home(props) {
    const navigate = useNavigate();
    let data = JSON.parse(localStorage.getItem("comments"));
    

  return (
    <div className='container '>
        <h2>Crud Operation with JSON Placeholder</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data?.reverse().map((d, i)=> (
                    <tr key={i}>
                        <td>{d?.name}</td>
                        <td>{d?.email}</td>
                        <td>{d?.body}</td>
                        <td className='d-flex'>
                            <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d?.id}`}>Update</Link>
                            <Link className=' mx-2 text-decoration-none btn btn-sm btn-danger' onClick={e => props.handleDelete(d?.id)}>Delete</Link>
                            <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d?.id}`}>Read</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Home