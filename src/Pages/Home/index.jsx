import ButtonGroup from "../../Components/Buttons/ButtonGroup";
import totalreach from "../../Assets/Images/totalreach.svg";
import { useState } from "react";
import PieChart from "../../Components/Charts/PieChart";
import demographic from "../../Assets/Icons/demographic.svg";
import vectorLeft from "../../Assets/Icons/vectorLeft.svg";
import LineChart from "../../Components/Charts/LineChart";
const Home = () => {
  const [buttonIndex, setButtonIndex] = useState(0);
  const mockUpButtonGroup = [
    {
      title: "Daily",
    },
    {
      title: "Weekly",
    },
    {
      title: "Monthly",
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="bg-white max-h-[482px] h-full mx-[32px] mt-[18px] rounded-[8px]">
        <div className="flex items-center pt-[24px] pl-[28px]">
          <div className="flex flex-row">
            <img src={totalreach} alt="total reach" />
            <div className="pl-[16px] text-center">
              <p className="text-[#A9ABB0]">Total Reach</p>
              <h1 className="text-[34px] font-bold">150K</h1>
            </div>
          </div>

          <div className="flex flex-row pl-[88px]">
            <img src={totalreach} alt="total reach" />
            <div className="pl-[16px] text-center">
              <p className="text-[#A9ABB0]">Total Paid Reach</p>
              <h1 className="text-[34px] font-bold">150K</h1>
            </div>
          </div>
          <div className="flex flex-row pl-[88px] flex-1">
            <img src={totalreach} alt="total reach" />
            <div className="pl-[16px] text-center">
              <p className="text-[#A9ABB0]">Total Organic Reach</p>
              <h1 className="text-[34px] font-bold">150K</h1>
            </div>
          </div>
          {/* button group */}
          <div className="flex max-w-[328px] w-full max-h-[48px] h-full mr-[18px]">
            <ButtonGroup
              listButton={mockUpButtonGroup}
              buttonIndex={buttonIndex}
              setButtonIndex={setButtonIndex}
            />
          </div>
        </div>
        <div className="flex h-full w-full  items-center justify-center">
          <LineChart />
        </div>
      </div>
      <div className="bg-white max-w-[871px] w-full max-h-[426px] h-full rounded-[8px] mx-[32px] mt-[18px]">
        <div className="flex items-center py-[16px] pl-[24px] border-b-[1px] border-[#DADADA]">
          <img src={demographic} alt={demographic} />
          <h1 className="pl-[16px] flex items-center flex-1">Demographic</h1>
          <div className="flex text-[#017EFA]">
            <h1 className="font-semibold text-[18px]">See Detail</h1>
            <img
              src={vectorLeft}
              alt="arrow right"
              className="px-[18px] rotate-180"
            />
          </div>
        </div>
        <div className="mb-[20px]">
          <PieChart />
          <div className="pl-[100px] bg-[#FFFFFF]"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
