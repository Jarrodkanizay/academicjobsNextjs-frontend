import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t-2 pt-4">
      <div className="flex flex-col items-center justify-center gap-1.5 max-w-[50px] mx-auto sm:mx-0">
        <Image
          className="mx-auto"
          width={40}
          height={40}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/1738704.png"
        />
        <div className=" font-bold text-xs  pb-1 text-center">6</div>
        <div className=" text-xs  pb-1 text-center ">Attempts to Apply</div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1.5 max-w-[50px] mx-auto sm:mx-0">
        <Image
          className="mx-auto"
          width={40}
          height={40}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/8178947.png"
        />
        <div className=" font-bold text-xs  pb-1 text-center">23</div>
        <div className=" text-xs  pb-1 text-center">Views</div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1.5 max-w-[50px] mx-auto sm:mx-0">
        <Image
          width={40}
          height={40}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/logored.png"
        />
        <div className=" font-bold text-xs  pb-1 text-center">1</div>
        <div className=" text-xs  pb-1 text-center ">Shares</div>
        {/* <div><a className="footer-nav__divnk" href="/">Home</a></div> */}
      </div>

      <div className="flex flex-col items-center justify-center gap-1.5 max-w-[50px] mx-auto sm:mx-0">
        <Image
          width={40}
          height={40}
          alt=""
          src="https://academicjobs.s3.amazonaws.com/icon/9005728.png"
        />
        <div className=" font-bold text-xs  pb-1 text-center">8</div>
        <div className="  text-xs  pb-1 text-center ">Full Post Requests</div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1.5">
        <a className="btn btn-aj my-2">Activate Full Ad</a>
      </div>
    </div>
  );
};
export default Footer;
