import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 px-7 border  justify-center ">
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-10 max-w-screen-sm mx-auto border-t-2 pt-4">
       
        <ul className="items-center justify-center mx-auto w-full">
    
              <img  width="40"
            height="40"
            alt="" src="https://academicjobs.s3.amazonaws.com/icon/1738704.png" />
  <li className=" font-bold text-xs  pb-1 text-center">6</li>
          <li className=" text-xs  pb-1 text-center ">Atempts to Apply</li>

  
        </ul>

        <ul>
        <img  width="40"
            height="40"
            alt="" src="https://academicjobs.s3.amazonaws.com/icon/8178947.png" />
              <li className=" font-bold text-xs  pb-1 text-center">23</li>
          <li className=" text-xs  pb-1 text-center">Views</li>
        
              
        </ul>

        <ul>
        <img  width="40"
            height="40"
            alt="" src="https://academicjobs.s3.amazonaws.com/icon/logored.png" />
            <li className=" font-bold text-xs  pb-1 text-center">1</li>
          <li className=" text-xs  pb-1 text-center ">Shares</li>
          {/* <li><a className="footer-nav__link" href="/">Home</a></li> */}
       
        </ul>

        <ul>
        <img  width="40"
            height="40"
            alt="" src="https://academicjobs.s3.amazonaws.com/icon/9005728.png" />
            <li className=" font-bold text-xs  pb-1 text-center">8</li>
          <li className="  text-xs  pb-1 text-center ">Full Post Requests</li>
        
        </ul>

        <ul>
        <a
                     
                      className="btn btn-aj btn-sm  mx-auto my-2"
                    >
                     Activate Full Ad
                    </a>
        
        </ul>

      </div>
    </footer>
  );
};
export default Footer;
