import React, { useState } from 'react'

export default function FFFFFFFF() {
   const [file, setFile] = useState();
   function handleChange(e) {
     console.log(e.target.files);
     setFile(URL.createObjectURL(e.target.files[0]));
   }
  return (
    <div
      style={{
        background: "black",
        opacity: 80 + "%",
        width: 600 + "px",
        height: 250 + "px",
      }}
    >
      <div >
        <h2 style={{color:'white'}}>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <img src={file} />
      </div>
    </div>
  );
}
