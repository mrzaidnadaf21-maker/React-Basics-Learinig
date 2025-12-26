const Button = (props) => {
  return (
    <div className="p-28">
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{ opacity: props.index == 1 ? 0.5 : 1 }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-bold"
          onClick={() => {
            if (props.index > 1) {
              props.setIndex(props.index - 1);
              props.setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {props.index}</h4>
        <button
          style={{ opacity: props.index == 30 ? 0.5 : 1 }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95  text-black rounded px-4 py-2 font-bold"
          onClick={() => {
            if (props.index < 30) {
              props.setUserData([]);
              props.setIndex(props.index + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Button;
