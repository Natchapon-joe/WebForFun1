import RangePercent from "./RangePercent";
const TopChannelChildren = ({ image, count, percent, title }) => {
  return (
    <div className="flex flex-row w-full h-[54px] bg-[#FAFAFA] items-center ">
      <div className="flex gap-[42px] ml-[18px] pr-[18px]">
        <div className="flex gap-[8px] w-[98px] ">
          <img src={image} alt={title} />
          <h1>{title}</h1>
        </div>
        <div className="flex">
          <p className="">{count}</p>
          <p className="text-[#30D987]">{percent}</p>
        </div>
      </div>
      <RangePercent />
    </div>
  );
};
export default TopChannelChildren;
