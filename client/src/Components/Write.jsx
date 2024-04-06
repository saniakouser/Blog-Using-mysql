import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Write() {
    const [value, setValue] = useState('');
  return (
    <div className='write'>
      <div className="content">
        <input type="text" name="" id="" placeholder='Title' />
         <div className="editorContainer">
         <ReactQuill theme="snow" value={value} onChange={setValue} />
         </div>
      </div>
      <div className="menu">
        <div className="item">
            <h1>publish</h1>
            <span>
                <b>Status:</b> Draft
            </span>
            <span>
                <b>visiblity:</b> public
            </span>
            <input style={{display:'flex'}} type="file" name="" id="file" />
             <label htmlFor="file"> Uplaod image</label>
             <div className="buttons">
                <button>Save as draft</button>
                <button>update</button>
             </div>
        </div>
        <div className="item">
            <h1>category</h1>
             <input type="radio" name="cat" value='cat' id="art" />
             <label htmlFor="art">Art</label>
             <input type="radio" name="cat" value='science' id="science" />
             <label htmlFor="science">science</label>
             <input type="radio" name="cat" value='Technology' id="Technology" />
             <label htmlFor="Technology">Technology</label>
             <input type="radio" name="cat" value='cinema' id="cinema" />
             <label htmlFor="cinema">Cinema</label>
             <input type="radio" name="cat" value='Design' id="Design" />
             <label htmlFor="Design">Art</label>
             <input type="radio" name="cat" value='food' id="food" />
             <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  )
}
