import React, { useState } from "react";

export const TodoForm = ({addTodoHandler}) => {
    const [inputValue,setInputvallue] = useState("")

    const changeInput = (e) => {
        setInputvallue(e.targe.value)
    }
    const addHandler = () => {
        const data = {
            title:inputValue,
            id:Date.now().toString(),
        };
        addTodoHandler(data)
        setInputvallue("")
    }
  return <div>
    <input type="text" value={inputValue} onChange={changeInput} />
    <button onClick={addHandler}>add</button>
  </div>;
};
