const ButtonGroup = ({ listButton, buttonIndex, setButtonIndex }) => {
  return (
    <div className="flex bg-[#F5F7FB] max-w-[328px] w-full max-h-[48px] h-full">
      {listButton.map((data, index) => {
        if (index === buttonIndex) {
          return (
            <div
              key={index}
              className="bg-white text-center max-w-[108px] w-full max-h-[40px] my-[4px] ml-[4px] cursor-pointer"
              onClick={() => setButtonIndex(index)}
            >
              <p className="text-[#017EFA]">{data?.title}</p>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="text-center max-w-[108px] w-full max-h-[40px] my-[4px] ml-[4px] cursor-pointer hover:bg-[#ffffff]"
              onClick={() => setButtonIndex(index)}
            >
              <p className="text-[#A9ABB0]">{data?.title}</p>
            </div>
          );
        }
      })}
    </div>
  );
};
export default ButtonGroup;
