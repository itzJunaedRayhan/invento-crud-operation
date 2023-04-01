import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function Update(props) {
    const {id} = useParams();
    const [inputData, setInputData] = useState({
        id: id,
        name: '',
        email: '',
        body: '',
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let arr = JSON.parse(localStorage.getItem("comments"));
        let data = JSON.parse(localStorage.getItem("comments")).findIndex(item => item.id == id);
        if (data) {
            arr[id] = inputData;
            localStorage.setItem("comments", JSON.stringify(arr));
        }
        navigate('/');
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="number" disabled name='id' className='form-control' value={inputData.id}
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' value={inputData.name}
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' value={inputData.email}
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                </div><br />
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea type="text" name='body' className='form-control'
                    onChange={e => setInputData({...inputData, body: e.target.value})}/>
                </div><br />
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update