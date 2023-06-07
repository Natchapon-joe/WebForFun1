import lightning from "../../Assets/Icons/lightning.svg";
import dashboard from "../../Assets/Icons/dashboard.svg";
import inbox from "../../Assets/Icons/inbox.svg";
import accounts from "../../Assets/Icons/accounts.svg";
import schedulePost from "../../Assets/Icons/schedulePost.svg";
import communities from "../../Assets/Icons/communities.svg";
import analytics from "../../Assets/Icons/analytics.svg";
import file from "../../Assets/Icons/file.svg";
import settings from "../../Assets/Icons/settings.svg";
import questionmark from "../../Assets/Icons/questionmark.svg";
import vectorLeft from "../../Assets/Icons/vectorLeft.svg";
import search from "../../Assets/Icons/search.svg";
import ring from "../../Assets/Icons/ring.svg";
import arrowdown from "../../Assets/Icons/arrowdown.svg";
// image
import profilemock from "../../Assets/Images/profilemock.svg";
import { useState } from "react";
import classNames from "classnames";
const Navbar = ({ children }) => {
  const [slide, setSlide] = useState(false);
  return (
    <div className="bg-[#E5E5E5]">
      <div className="flex">
        <div
          className={classNames(
            "bg-[#081A51] w-full max-w-[260px] h-full max-h-[1064px] left-0 border-[1px] border-[#000000] relative shadow-sm hidden md:block"
          )}
          style={{
            transition: "transform 0.3s ease",
            transform: slide ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          <div
            className="absolute top-6 bg-white w-[40px] h-[40px] rounded-[20px] flex items-center justify-center border-[#DADADA] border-[2px] -right-[22px] cursor-pointer"
            onClick={() => setSlide(!slide)}
          >
            {slide ? (
              <img src={vectorLeft} className="rotate-180" alt="vector left" />
            ) : (
              <img src={vectorLeft} alt="vector left" />
            )}
          </div>
          <div className="flex flex-row text-start items-center pl-[30px] pt-[24px] align-middle">
            <img
              src={lightning}
              alt="icon lightning"
              className="w-[40px] h-[40px]"
            />
            <b className="font-extrabold text-[24px] text-white pl-[14px]">
              Dash
            </b>
          </div>
          <div className="pt-[61px] ml-[16px] max-h-[135px] h-full">
            <p className="text-[#51CBFF] text-[12px] ml-[28px]">MAIN MENU</p>
            <div className="mt-[8px] h-full max-h-[56px]">
              <div className="w-full flex justify-start items-center h-full max-h-[56px] hover:bg-[#1B2B65] rounded-[8px] cursor-pointer">
                <img src={dashboard} alt="dashboard" className="pl-[14px]" />
                <p className="text-white pl-[8px]">Dashboard</p>
              </div>
              <div className="w-full flex justify-start items-center h-full max-h-[56px] hover:bg-[#1B2B65] rounded-[8px] cursor-pointer">
                <img src={inbox} alt="dashboard" className="pl-[14px]" />
                <p className="text-[#CCD2E3] pl-[8px] flex-1">Inbox</p>
                <div className="bg-[#CF3A59] w-[24px] h-[25.41px] rounded-[4px] text-center flex justify-center text-white mr-[24px]">
                  <b>1</b>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[61px] ml-[16px] mt-[32px] max-h-[248px] h-full">
            <p className="text-[#51CBFF] text-[12px] ml-[28px]">Workspace</p>
            <div className="mt-[8px] h-full max-h-[56px]">
              <div className="w-full flex justify-start items-center h-full max-h-[56px] hover:bg-[#1B2B65] rounded-[8px] cursor-pointer">
                <img src={accounts} alt="dashboard" className="pl-[14px]" />
                <p className="text-white pl-[8px]">Accounts</p>
              </div>
            </div>
            <div className="mt-[8px] h-full max-h-[56px]">
              <div className="w-full flex justify-start items-center h-full max-h-[56px] hover:bg-[#1B2B65] rounded-[8px] cursor-pointer">
                <img src={schedulePost} alt="dashboard" className="pl-[14px]" />
                <p className="text-white pl-[8px]">Schedule Post</p>
              </div>
            </div>
            <div className="mt-[8px] h-full max-h-[56px]">
              <div className="w-full flex justify-start items-center h-full max-h-[56px] hover:bg-[#1B2B65] rounded-[8px] cursor-pointer">
                <img src={communities} alt="dashboard" className="pl-[14px]" />
                <p className="text-white pl-[8px]">Communities</p>
              </div>
            </div>
            <div className="mt-[8px] h-full max-h-[56px]">
              <div className="w-full flex justify-start items-center h-full max-h-[56px] hover:bg-[#1B2B65] rounded-[8px] cursor-pointer">
                <img src={analytics} alt="dashboard" className="pl-[14px]" />
                <p className="text-white pl-[8px]">Analytics</p>
              </div>
            </div>
          </div>
          <div className="pt-[61px] ml-[16px] mt-[32px] max-h-[248px] h-full">
            <p className="text-[#51CBFF] text-[12px] ml-[28px]">General</p>
            <div className="mt-[8px] h-full max-h-[56px]">
              <div className="w-full flex justify-start items-center h-full max-h-[56px] hover:bg-[#1B2B65] rounded-[8px] cursor-pointer">
                <img src={file} alt="dashboard" className="pl-[14px]" />
                <p className="text-white pl-[8px]">File & Folders</p>
              </div>
            </div>
            <div className="mt-[8px] h-full max-h-[56px]">
              <div className="w-full flex justify-start items-center h-full max-h-[56px] hover:bg-[#1B2B65] rounded-[8px] cursor-pointer">
                <img src={settings} alt="dashboard" className="pl-[14px]" />
                <p className="text-white pl-[8px]">Settings</p>
              </div>
            </div>
          </div>
          <div className="flex relative items-center justify-center h-[145px] mt-[170px]">
            <div className="absolute -top-2 bg-[#AABBFA] w-[40px] h-[40px] flex items-center justify-center rounded-[20px]">
              <img src={questionmark} alt="questionmark" />
            </div>
            <div className="flex flex-col items-center justify-center max-w-[204px] w-full max-h-[125px] h-full bg-[#1B2B65] rounded-[8px]">
              <p className="text-white">Need Help with Dash?</p>
              <div className="max-w-[166px] w-full max-h-[40px] h-full bg-[#017EFA] rounded-[6px] text-white items-center flex justify-center">
                <p className="text-center">Go to help center</p>
              </div>
            </div>
          </div>
        </div>
        {/* top bar */}
        <div className="w-full">
          <div className="w-full max-h-[90px] flex flex-row bg-white right-0">
            <div className="my-[10px] ml-[58px] flex-1 hidden  md:block">
              <div className="flex items-center">
                <h1 className="text-[32px] font-bold">Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center">
              <div className="absolute pl-[16px]">
                <img src={search} alt="search" className="-pt-[10px]" />
              </div>
              <input
                className="bg-[#E3E8F1] pl-[50px] w-full max-w-[169px] max-h-[40px] h-full rounded-[8px] border-[#E3E8F1] border-[1px]"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center justify-center my-[16px]">
              <div className="border-[#DADADA] border-[1px] h-[40px] ml-[21px]"></div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[40px] h-[40px] rounded-[20px] bg-[#EAECF2] flex items-center justify-center ml-[21px]">
                <img src={ring} alt="ring" />
              </div>
            </div>
            <div className="flex items-center justify-center ml-[18px]">
              <img src={profilemock} alt="profile" />
            </div>
            <div className="flex items-center justify-center ml-[12px]">
              <b>Erza Miller</b>
            </div>
            <div className="flex items-center justify-center ml-[18px] mr-[46px]">
              <img src={arrowdown} alt="arrow down" />
            </div>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
