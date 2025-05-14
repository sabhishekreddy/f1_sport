import "./main.css"
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function ApiMain() {
  const [name, setName] =  useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <div className="ApiMain">
      <form action="post" onSubmit={handleSubmit}>
        <label>Enter your name:
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        </label>
        <h1>{name}</h1>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ApiMain;