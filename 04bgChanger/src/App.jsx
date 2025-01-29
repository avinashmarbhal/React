import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-xl flex justify-center gap-6 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 text-white pr-3 pl-3"
          >
            RED
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 text-white pr-3 pl-3"
          >
            GREEN
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 text-white pr-3 pl-3"
          >
            BLUE
          </button>
          <button
            onClick={() => setColor("pink")}
            className="bg-pink-600 text-white pr-3 pl-3"
          >
            PINK
          </button>
          <button
            onClick={() => setColor("gray")}
            className="bg-gray-600 text-white pr-3 pl-3"
          >
            GRAY
          </button>
          <button
            onClick={() => setColor("white")}
            className="bg-white text-black pr-3 pl-3"
          >
            WHITE
          </button>
          <button
            onClick={() => setColor("orange")}
            className="bg-orange-600 text-white pr-3 pl-3 rounded"
          >
            ORANGE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
