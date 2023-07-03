import ButtonGroup from "../../Components/Buttons/ButtonGroup";
import { useState } from "react";
import PieChart from "../../Components/Charts/PieChart";
import demographic from "../../Assets/Icons/demographic.svg";
import vectorLeft from "../../Assets/Icons/vectorLeft.svg";
import {
  facebook,
  ig,
  linkedin,
  youtube,
  totalreach,
  totalorganicreach,
  totalpaidreach,
} from "../../Assets/Images/index";
import LineChart from "../../Components/Charts/LineChart";
import TopChannelChildren from "./Components/TopChannelChildren";
const Home = () => {
  const mutiple = "2" * "1";
  console.log(typeof ("2" * "1"));
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
  const mockUpChannel = [
    {
      img: facebook,
      count: "124K",
      percent: "+12%",
      title: "facebook",
    },
    {
      img: ig,
      count: "124K",
      percent: "+12%",
      title: "Instagram",
    },
    {
      img: linkedin,
      count: "124K",
      percent: "+12%",
      title: "linkedin",
    },
    {
      img: youtube,
      count: "124K",
      percent: "+12%",
      title: "Youtube",
    },
  ];
  return (
    <div className="flex flex-col w-full ">
      <div className="bg-white max-h-[482px] h-full mx-[32px] mt-[18px] rounded-[8px]">
        <div className="flex relative items-center pt-[24px] pl-[28px] gap-[88px]">
          <div className="flex flex-row">
            <img src={totalreach} alt="total reach" />
            <div className="pl-[16px] text-center">
              <p className="text-[#A9ABB0]">Total Reach</p>
              <h1 className="text-[34px] font-bold">150K</h1>
            </div>
          </div>
          <div className="flex flex-row">
            <img src={totalpaidreach} alt="total reach" />
            <div className="pl-[16px] text-center">
              <p className="text-[#A9ABB0]">Total Paid Reach</p>
              <h1 className="text-[34px] font-bold">150K</h1>
            </div>
          </div>
          <div className="flex flex-row flex-1">
            <img src={totalorganicreach} alt="total reach" />
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
      <div className="flex flex-row gap-[12px] ml-[32px]">
        <div className="bg-white max-w-[680px] w-full max-h-[426px] h-full rounded-[8px] mt-[18px]">
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
          <div className="mb-[20px] flex gap-[80px]">
            <PieChart />
            {/* <div className="flex bg-[#FAFAFA] rounded-[12px] w-[428px] h-[250px]">
              <div className="flex mx-[28px] my-[18px] text-[#1C1F37] font-bold">
                <h1>Audience Age</h1>
                <div className="flex">
                  <div
                    style={{ width: `${12}%` }}
                    className="bg-[#51CBFF] h-[24px]"
                  ></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col bg-white w-full max-h-[426px] h-full rounded-[8px] mx-[32px] mt-[18px]">
          <div className="flex w-full items-center py-[16px] pl-[24px] border-b-[1px] border-[#DADADA]">
            <img src={demographic} alt={demographic} />
            <h1 className="pl-[16px] flex items-center flex-1">Top Channels</h1>
            <div className="flex text-[#017EFA]">
              <h1 className="font-semibold text-[18px]">See Detail</h1>
              <img
                src={vectorLeft}
                alt="arrow right"
                className="px-[18px] rotate-180"
              />
            </div>
          </div>
          <div className="mx-[24px] my-[16px]">
            <div className="flex text-[#939393] gap-[110px]">
              <p>Source</p>
              <p>Visit</p>
            </div>
            {/* top channels children */}
            {mockUpChannel.map((data, index) => {
              return (
                <TopChannelChildren
                  key={index}
                  image={data?.img}
                  count={data?.count}
                  percent={data?.percent}
                  title={data?.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
