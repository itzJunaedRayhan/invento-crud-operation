import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = (props) => {
    let data = JSON.parse(localStorage.getItem("comments"));
    const navigate = useNavigate();
    
    const [inputData, setInputData] = useState({
        id : data.length++,
        name: '',
        email: '',
        body: '',
    });

    let handleSubmit = (event) => {
        event.preventDefault();
        data.push(inputData);
        localStorage.setItem("comments", JSON.stringify(data));
        navigate("/")
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' className='form-control'
                        onChange={e => setInputData({...inputData, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' className='form-control'
                        onChange={e => setInputData({...inputData, email: e.target.value})}/>
                    </div><br />
                    <div>
                        <label htmlFor="comment">Comment:</label>
                        <textarea type="text" name='body' className='form-control'
                        onChange={e => setInputData({...inputData, body: e.target.value})}/>
                    </div><br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;