import Link from 'next/link';
import Image from 'next/image';

const HeadlineJobLinks = () => {
  const iconSize = 40;
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t-2 pt-4 text-black">
      <div className="grid grid-cols-s items-center justify-center gap-1.5 max-w-[50px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/1738704.png"
        />
        <div className="text-[16px] w-[18px] text-center">6</div>
        <div className="text-[10px] leading-tight col-span-2 pb-1 text-center ">
          Attempts to Apply
        </div>
      </div>

      <div className="grid grid-cols-s items-center justify-center gap-1.5 max-w-[50px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/8178947.png"
        />
        <div className="text-[16px] w-[18px] text-center">23</div>
        <div className="text-[10px] leading-tight col-span-2  pb-1 text-center">
          Views
        </div>
      </div>

      <div className="grid grid-cols-s items-center justify-center gap-1.5 max-w-[50px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/logored.png"
        />
        <div className="text-[16px] w-[18px] text-center">1</div>
        <div className="text-[10px] leading-tight col-span-2  pb-1 text-center ">
          Shares
        </div>
      </div>

      <div className="grid grid-cols-s items-center justify-center gap-1.5 max-w-[50px] mx-auto sm:mx-0">
        <Image
          className="stat-icon"
          width={iconSize}
          height={iconSize}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/9005728.png"
        />
        <div className="text-[16px] w-[18px] text-center">8</div>
        <div className="text-[10px] leading-tight col-span-2  pb-1 text-center ">
          Full Post Requests
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1.5">
        <a className="btn btn-accent btn-sm rounded-full my-2">
          Activate Full Ad Now
        </a>
      </div>
    </div>
  );
};
export default HeadlineJobLinks;
