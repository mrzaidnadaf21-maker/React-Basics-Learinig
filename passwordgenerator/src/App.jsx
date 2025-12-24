import React, { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charaterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charaterAllowed) str += "!@#$%^&*+=_-`{}[]~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      // math.random ek random number deta he jo ki 0.99 ke bich me hota he OR
      // math.floor uss number ka decimal data ke integer bana tha he eg.(2.7)=2
      // charAt mtlb jo bhi string he uska index number nikal kr uss position me jo likha he o deta he

      pass += str.charAt(char);
      // console.log(str.charAt(char));
    }

    setPassword(pass);
  }, [length, numberAllowed, charaterAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // ye line se samj rha he ki password copy hua he blue line ayyi ge or (useref dom element ka direct access deta he)
    passwordRef.current?.setSelectionRange(0, 23); // ye line range bata rahi he ki ham kittna select kr rhe he .
    window.navigator.clipboard.writeText(password); // ye line jo input me password  he usse copy kr ke de rah he
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charaterAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full text-center max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-2  font-bold">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outilne-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-400"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
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

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charaterAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">CharacterInput</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
