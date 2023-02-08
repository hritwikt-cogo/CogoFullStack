const ProfilePageHeader = () => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-gray-600 font-text-sm-medium1">
        {/* Color bg Image  */}
          <div className="self-stretch relative h-40 shrink-0 overflow-hidden lg:h-60">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-40 object-cover md:h-60"
              alt=""
              src="https://bafkreifua52l5cznt33ophpi52yi4eyv75bk6tj2soz35f7n6zyfxmrzma.ipfs.nftstorage.link/"
            />
          </div>
          {/* Profile Picture */}
          <div className="self-stretch flex flex-col justify-start items-start py-0 px-4 gap-[16px] mt-[-48px]  lg:flex lg:flex-row lg:items-center lg:justify-between lg:mt-[-40px]">
            <div className="self-stretch flex flex-col items-start justify-start relative gap-[24px] text-xl text-gray-900 lg:flex lg:flex-row lg:items-center lg:justify-center">
              <img
                className="relative rounded-base w-32 h-32 shrink-0 z-[0] lg:w-44 lg:h-44"
                alt=""
                src="../images/avatar-with-tick.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[1] -mt-5 lg:mt-14">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Olivia Rhye
                </div>
                <div className="self-stretch relative text-lg leading-[24px] text-gray-600">
                  olivia@untitledui.com
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px] ">
              <button className="cursor-pointer py-2.5 px-4 bg-white rounded-lg  overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-3001 transition ease-in duration-200 hover:bg-[#F9FAFB]">
                <img
                  className="relative w-5 h-5 shrink-0"
                  alt=""
                  src="https://bafkreiewzll6jlh3lerbsy4775bmlhsgmpveng7o4guqesdl5w2a3s7vgy.ipfs.nftstorage.link/"
                />
                <div className="relative text-base leading-[20px] font-semibold font-text-sm-medium1 text-gray-700 text-left">
                  Share
                </div>
              </button>
              <button className="cursor-pointer py-2.5 px-4 bg-primary-6001 rounded-lg  overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-primary-6001 transition ease-in duration-200 hover:bg-[#6941C6] hover:text-white" >
                <div className="relative text-base leading-[20px] font-semibold font-text-sm-medium1 text-base-white1 text-left ">
                  View profile
                </div>
              </button>
            </div>
          </div>
      </div>
    );
  };
  
  export default ProfilePageHeader;