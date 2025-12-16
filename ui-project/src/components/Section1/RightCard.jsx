import RightCardContent from "./RightCardContent";

export const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-80 overflow-hidden relative rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent
        id={props.id}
        tag={props.tag}
        intro={props.intro}
        color={props.color}
      />
    </div>
  );
};
export default RightCard;
