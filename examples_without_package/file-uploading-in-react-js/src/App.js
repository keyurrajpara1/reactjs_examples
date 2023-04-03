import React, { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [selectedFileData, setSelectedFile] = useState({selectedFile:null});
  const [srcFilePreview, setSrcFilePreview] = useState();

  const onFileChange = (event) => {
    setSelectedFile({ selectedFile: event.target.files[0] });
    setSrcFilePreview(URL.createObjectURL(event.target.files[0]));
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      selectedFileData.selectedFile,
      selectedFileData.selectedFile.name
    );
    axios.post("api/uploadfile", formData);
  };

  const fileData = () => {
    if (selectedFileData.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFileData.selectedFile.name}</p>
          <p>File Type: {selectedFileData.selectedFile.type}</p>
          <p>
            Last Modified:
            {selectedFileData.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  
  return (
    <>
      <div>
          <h1>
            Keyur Rajpara
          </h1>
          <h3>
            File Upload using React!
          </h3>
          <div>
              <input type="file" onChange={onFileChange} />
              <br />
              <img src={srcFilePreview} width="200" height="200" />
              <br />
              <button onClick={onFileUpload}>
                Upload!
              </button>
          </div>
        {fileData()}
      </div>
    </>
  )
}
export default App;