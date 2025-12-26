import axios from "axios";
import Card from "./component/Card";
import { useEffect, useState } from "react";
import Button from "./component/Button";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(28);

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    );
    setUserData(response.data);
    // console.log(response.data);
  };

  useEffect(
    function () {
      getdata();
    },
    [index]
  );

  let printUserData = (
    <h1 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      Loading...
    </h1>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} idx={idx} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen p-4  overflow-auto text-white">
      <div className=" h-[70%] flex flex-wrap gap-4 p-2">{printUserData}</div>

      <Button index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  );
};

export default App;
