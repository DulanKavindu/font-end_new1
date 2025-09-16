
import { useState } from "react";
import { Mediauplord } from "../../util/mediauplord";

export function UploadPhotos(){
  const [file , setFile]=useState('')

  function handleUpload(){
    Mediauplord(file).then((url)=>{
      console.log(url)
    }).catch((err)=>{
      console.log(err)
    })
  }
    
  

  return (
    <div>
      <h1>Add File</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
