import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRer hook
  //it give us the refrence of any element on our web page
  //and we can do manipulation with it
  const passwordRef = useRef(null)
  //for it to use we have to pass this refrence hook to that element
  //in our case we have pass to "input" 



  // we can don this without the useCallback also, but the useCallback
  // use to memoized some function and dependency(lenght, numberAllowed, charAllowed)
  // unlase and until one of this is change it is not modified in the React fibre tree
  // If any of the dependencies change, the function is re-created and stored again in the fiber tree for the next render
  // React keeps track of the useCallback hook and its dependencies, ensuring that if the component re-renders but the dependencies
  //  don’t change, the function reference remains the same.React keeps track of the useCallback hook and its dependencies, ensuring
  // that if the component re-renders but the dependencies don’t change, the function reference remains the same.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "mBQaXvWcKzJdLpAYoZfRMEtshNUbGCVqTxnwiDHgSOujkIFylPe";

    if (numberAllowed) str += "7385906241";
    if (charAllowed) str += "^~]$@{+&_?=%!*/>#-)(}";

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [lenght, numberAllowed, charAllowed, setPassword]);



  const copPasswordToClipboard = useCallback(() => {
    //we are working in core React and because of that 
    // we are able to access the window object
    //but if we are using next.js in that case don't have the 
    // access to the window object because next.js do server side rendering  
    
    //by using passwordRef we can know multiple things like isthere current obj or not,is it accessible or not, is it selectable or not
    //in this case we have use this to give select effect to user
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)  //using this method we can add select range
    window.navigator.clipboard.writeText(password)

  },[password])



  //this for running the passwordGenerator
  //whenevr the page is loaded it fire the passwordGenerator
  //and also whenevr the one of the dependancy changes in that case also it fire the passwordGenerator
  useEffect(() => {
    passwordGenerator();
  }, [lenght, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-gray-100"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copPasswordToClipboard}
          className="bg-blue-600 text-white pl-2 pr-2 hover:bg-blue-700 transition duration-300 cursor-pointer">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={lenght}
              className="cursor-pointer"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label>Lenght: {lenght}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
