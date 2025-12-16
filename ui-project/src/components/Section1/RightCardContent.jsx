export const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h1 className="bg-white text-2xl  rounded-full font-semibold  h-11 w-11 flex justify-center items-center">
        {props.id + 1}
      </h1>

      <div>
        <p className="text-xl leading-normal text-white mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ut
          repellat quas iure repellendus explicabo.
          {/* {props.intro} */}
        </p>

        <div className="flex justify-between">
          <button
            style={{ background: props.color }}
            className=" text-white font-medium px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>

          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full ">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RightCardContent;
