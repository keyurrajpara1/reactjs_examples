import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "./axios";

const API = "https://jsonplaceholder.typicode.com";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  /*useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setMyData(res.data);
      setIsError("");
    })
    .catch((error) => {
      setMyData([]);
      setIsError(error.message);
    });
  }, []);*/

  const getApiData = async() => {
    try{
      const res = await axios.get("/posts");
      setMyData(res.data);
      setIsError("");
    }
    catch(error){
      setMyData([]);
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Axios tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title.slice(0, 15).toUpperCase()}</h2>
            <p>{body.slice(0, 100)}</p>
          </div>
        )
      })}
      </div>
    </>
  );
}

export default App;
