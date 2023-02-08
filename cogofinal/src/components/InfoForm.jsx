const InfoForm = () => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-sm-medium1 py-10 px-4 gap-[20px] lg:flex lg:flex-row lg:mt-[-20px]">
        {/* INFO HEADING  */}
        <div className="w-[280px] flex flex-col items-start justify-start lg:w-1/4">
          <div className="self-stretch relative leading-[20px] font-medium">
            Personal info
          </div>
          <div className="self-stretch relative leading-[20px] text-gray-600">
            Update your photo and personal details.
          </div>
        </div>
        {/* Container Form */}
        <div className="self-stretch rounded-xl bg-gray overflow-hidden flex flex-col items-start justify-start text-gray-600 border-[1px] border-solid border-gray-200 lg:w-3/4">
          <form className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[24px]">
            {/* Name Form  */}
            <div className=" flex flex-col self-stretch gap-5 lg:flex-row ">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] lg:w-1/2">
              <div className="font-medium">First Name</div>
                <input className="self-stretch rounded-lg bg-white py-2.5 px-3.5 text-gray-900 border-[1px] border-solid border-gray-300 leading-[24px] font-medium font-text-sm-medium1 text-[14px] focus:outline-none" type="text" defaultValue="Olivia" placeholder="First Name" />
            </div>
  
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] lg:w-1/2">
              <div className="font-medium">Last Name</div>
                <input className="self-stretch rounded-lg bg-white py-2.5 px-3.5 text-gray-900 border-[1px] border-solid border-gray-300 leading-[24px] font-medium font-text-sm-medium1 text-[14px] focus:outline-none" type="text" defaultValue="Rhye" placeholder="Last Name"/>
            </div>
  
            </div>
            {/* Email Form  */}
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[20px] font-medium">Email</div>
              <div className="self-stretch rounded-lg border-[1px] border-solid border-gray-300 flex ">
  
                <img className="pl-3.5" src="https://bafkreigdti2yycwghezudlfrcv336i6xbcmoaajuodtziei6xgsh4v64aq.ipfs.nftstorage.link/" alt="" />
                <input className="self-stretch rounded-lg border-none bg-white py-2.5 px-3.5 gap-[8px] text-gray-900 leading-[24px] font-medium font-text-sm-medium1 text-[14px] focus:outline-none" type="email" defaultValue="olivia@untitledui.com" placeholder="Email"/>
              </div>
            </div>
  
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] lg:flex-row ">
              <img
                className="rounded-full w-16 h-16 shrink-0 object-cover"
                alt=""
                src="https://fastly.picsum.photos/id/633/200/300.jpg?hmac=TdUWNg34fjigifBBMXrwci0tVpiezw92QqwoO2oDJak"
              />
              <div className="self-stretch flex flex-col items-start justify-start lg:w-full">
                <div className="self-stretch rounded-xl bg-base-white1 flex flex-col py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-2001 transition ease-in duration-200 hover:border-[#7F56D9] hover:border-[2px] hover:m-[-0.75px] ">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
                    <img
                      className="relative rounded-small w-[46px] h-[46px] shrink-0 cursor-pointer"
                      alt=""
                      src="https://bafkreih6sjsp3ewk76mc6kydatfzlpi77tcq2x46fwxxnuaqqegdgc7bf4.ipfs.nftstorage.link/"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <div className="leading-[18px] mb-2 text-center">
                        <span className="text-primary-7001 font-semibold">
                          Click to upload
                        </span>
                        <span> or drag and drop</span>
                      </div>
                      <span className="leading-[18px] text-center">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="self-stretch flex flex-col pt-0 px-0 pb-3 items-center justify-start gap-[12px]">
            <div className="h-0.5 w-full bg-[#EAECF0]"></div>
            <div className="self-stretch flex flex-row py-0 px-4 items-center justify-end gap-[16px]">
              <div className=" flex flex-row items-center justify-end gap-[12px]">
                <button className="cursor-pointer py-2.5 px-4 bg-base-white1 rounded-lg border-[1px] border-solid border-gray-3001 transition ease-in duration-200 hover:bg-[#F9FAFB]">
                  <div className=" font-semibold font-text-sm-medium1 text-gray-7001">
                    Cancel
                  </div>
                </button>
                <button
                onClick={() => console.log("hv")}
                  className=" hover:text-white cursor-pointer py-2.5 px-4 bg-primary-6001 rounded-lg border-[1px] border-solid border-primary-6001 transition ease-in duration-200 hover:bg-[#6941C6]"
                >
                  <div  className="font-semibold font-text-sm-medium1 ">
                    Save changes
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoForm;