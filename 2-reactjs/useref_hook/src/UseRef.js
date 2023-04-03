import React, {useState, useEffect, useRef} from "react";
const UseRef = () => {
  const [myData, setMyData] = useState("");
  // const [count, setCount] = useState(0);

  const count = useRef(0);
  console.log("first: " + count.current);

  useEffect(() => {
    // setCount(count + 1);
    console.log("useEffect: " + count.current);
    count.current = count.current + 1;
  });

  return (
    <>
      <input type="text" value={myData} onChange={(e) => setMyData(e.target.value)} />
      <p>The number of times render: {count.current}</p>
    </>
  );
}
export default UseRef;