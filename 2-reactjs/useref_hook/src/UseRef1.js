import React, {useState, useRef} from "react";
const UseRef1 = () => {
  const [myData, setMyData] = useState();

  const inputElement1 = useRef("");

  const changeStyle = () => {
    inputElement1.current.style.backgroundColor = "#82E0AA";
    inputElement1.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement1} value={myData} onChange={(e) => setMyData(e.target.value)} />
      <br />
      <button onClick={changeStyle}>Submit</button>
    </>
  );
}
export default UseRef1;