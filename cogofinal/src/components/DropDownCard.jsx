const DropdownCard = ({ label, logo, text, extraText}) => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-gray-700 font-text-sm-medium1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className=" leading-[20px] font-medium">{label}</div>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start gap-[8px] text-lg text-gray-900 border-[1px] border-solid border-gray-3001">
            <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-5 h-5"
                alt=""
                src={logo}
              />
              <div className="leading-[24px] font-medium">{text}</div>
              <div
                className="leading-[24px] inline-block text-gray-600"
              >
                {extraText}
              </div>
            </div>
            <img
              className="w-5 h-5 shrink-0"
              alt=""
              src="../Images/arrow-down.svg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default DropdownCard;