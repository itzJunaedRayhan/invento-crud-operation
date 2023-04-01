import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Home from './Home'
import Read from './Read'
import Update from './Update'
import axios from 'axios'


function App() {
    const [comments, setComments] = useState([]);
    let [count, setCount] = useState(0);

    useEffect(()=> {
      axios.get('https://jsonplaceholder.typicode.com/comments/')
      .then(res => {
          localStorage.setItem("comments", JSON.stringify(res.data));
          setComments(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  function handleDelete(id) {
    let info = JSON.parse(localStorage.getItem("comments")).filter((item) => item.id != id);
    localStorage.setItem("comments", JSON.stringify(info));
    setCount(count++);
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home handleDelete={handleDelete} count={count} comments={comments} setComments={setComments} />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update/:id' element={<Update comments={comments} />}></Route>
            <Route path='/read/:id' element={<Read comments={comments} />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App