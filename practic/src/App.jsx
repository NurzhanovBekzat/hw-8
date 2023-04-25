import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setAdvice(json);
      } catch (error) {
        console.log("errror", error);
      }
    };
    fetchData();
  }, []);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const [getId, setGetId] = useState();

  const fetchId = async (url) => {
    try {
      const response = await fetch(url);
      const jsonId = await response.json();
      console.log(jsonId);
      setGetId(jsonId);
    } catch (error) {
      console.log("errror", error);
    }
  };
  // fetchId();

  useEffect(()=>{
    fetchId()
  },[])

  return (
   <div>
     <div onClick={()=>fetchId()}>
      {advice.map((el) => {
        return <p>{el.name}</p>;
      })}
    </div>
   </div>
  );
}

export default App;
// const Wrapper = styled.div`
//     padding-top: 150px;
//     margin: 0 auto;
// `;

// const Paragraph = styled.h2`
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 20px;
//     line-height: 48px;
//     text-align: center;
// `;
// Учит
