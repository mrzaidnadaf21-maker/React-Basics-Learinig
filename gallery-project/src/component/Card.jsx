const Card = (props, idx) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
          <img
            className="h-full object-cover w-full"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <h2 className="fontt-bold text-lg">
          {props.idx}.{props.elem.author}
        </h2>
      </a>
    </div>
  );
};

export default Card;
