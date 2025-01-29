import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);
  let myObj ={
    username: "Avinash",
    age: 23
  }
  return (
    <>
      <h1 className="bg-blue-400 text-gray-800 border-8 p-3 rounded-3xl">
        Tailwind text
      </h1>
      <Card channel="Photographic" someObj={myObj} btnText="Click Me"/>
      <Card channel="Avi-Photographi" someObj={myObj} btnText="Text Me"/>
      <Card channel="Chai Aur Code" someObj={myObj}/>
    </>
  );
}

export default App;
