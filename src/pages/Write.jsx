import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate=useNavigate()

const upload = async () => {
  try{
    const formData = new FormData();
    formData.append("file",file);
    const res=await axios.post("/api/upload",formData);
    return res.data;
  }
  catch(err){
    console.log(err);
  }
};

const handleClick= async e =>{
  e.preventDefault();
  const imgUrl = await upload();

  try{
    state ? await axios.put(`/api/posts/${state.id}`,{
      title , desc:value ,cat,img:file ? imgUrl : "" ,
    }) 
    : await axios.post(`/api/posts/`,{
      title , desc:value ,cat,img:file ? imgUrl : "" , date : moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    }) 
    navigate("/");
  }
  catch(err){
    console.log(err)

  }
}

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{display:"none"}} type="file" id= "file" name="" onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item"> 
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" checked={cat === 'art'} name="cat" value="art" id="art" onChange={e=>setCat(e.target.value)}/>
          <label htmlFor="art">Art</label>
          </div>
          
          <div className="cat">
            <input type="radio" checked={cat === 'movie'} name="cat" value="movie" id="movie" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="movie">Movie</label>
          </div>

          <div className="cat">
            <input type="radio" checked={cat === 'science'} name="cat" value="science" id="science" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
            <input type="radio" checked={cat === 'books'} name="cat" value="books" id="books" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="books">Books</label>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Write