import React, { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    settitle("");
    setDetails("");
  };

  // Delete button code
  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex  bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  gap-4 flex-col items-start p-10 lg:w-1/2"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          className="w-full px-5 py-3 border-2 font-medium rounded outline-none "
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          className=" w-full px-5  h-30 py-3 border-2 font-medium rounded outline-none"
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="w-full font-medium bg-white text-black px-5 py-5 rounded  outline-none active:bg-gray-400">
          Add notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 h-full">
        <h1 className="text-4xl font-bold">Recents Notes</h1>
        <div className="flex flex-wrap items-start justify-start  gap-5 mt-6 h-[90%] overflow-auto ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" relative flex justify-between flex-col items-start  h-62 w-50 pt-6 pb-4 px-10 bg-cover rounded-2xl text-black bg-[url('https://img.freepik.com/free-vector/blank-white-notepaper-design_53876-118304.jpg?t=st=1761833387~exp=1761836987~hmac=155b524ef287565dba8feee78731b1f78fbedfbfd3f30480a387fff690dc4dd1')] "
              >
                <div>
                  <h3 className="leading-tight  text-xl font-bold">
                    {elem.title}
                  </h3>

                  <p className="mt-3 leading-tight font-medium text-gray-700">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-30 cursor-pointer active:scale-95 bg-red-400 py-2 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
