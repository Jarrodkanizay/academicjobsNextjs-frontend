import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-8 px-7 bg-[#f4a10c]">
      <div className="text-white grid grid-cols-1 md:grid-cols-5 gap-10 max-w-[1500px] mx-auto">
        <ul>
          <li className="font-bold text-xl pb-1 ">Recruiters</li>

          <li>
            <Link className="footer-nav__link" href="/post-a-job">
              Post a Job
            </Link>
          </li>
          <li>
            <Link href="/ai-recruitment">AI Recruitment</Link>
          </li>
          <li>
            <Link href="/about">About AJ</Link>
          </li>
          <li>
            <Link href="/recruitment">Recruitment Assistance</Link>
          </li>
        </ul>

        <ul>
          <li className=" font-bold text-xl pb-1">Job Seekers</li>
          <li>
            <Link href="/jobs">Find Jobs</Link>
          </li>
          <li>
            <Link href="/student-jobs-on-campus">Student Jobs on Campus</Link>
          </li>
          <li>
            <Link href="/employers">Find Employers</Link>
          </li>
          <li>
            <Link href="/academic-hub">Academic Hub</Link>
          </li>
          <li>
            <Link href="/the-academic-rankings/find-my-rank">
              View your Academic Rank
            </Link>
          </li>
          <li>
            <Link href="/academic-talent-pool">Talent Pool</Link>
          </li>
        </ul>

        <ul>
          <li className=" font-bold text-xl pb-1">Institutions</li>
          <li>
            <Link href="/the-university-rankings">University Rankings</Link>
          </li>
          <li>
            <Link href="/employers">Colleges & Universities</Link>
          </li>
          {/* <li>
            <Link href="/the-university-rankings/find-my-rank">
              Check Academic Rank
            </Link>
          </li> */}
        </ul>

        <ul>
          <li className=" font-bold text-xl pb-1 ">Navigation</li>
          {/* <li><a className="footer-nav__link" href="/">Home</a></li> */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>

          <li>
            <Link href="/sitemap">Site Map</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <ul>
          <li className=" font-bold text-xl pb-1 ">Socials</li>
          {/* <li><a href="https://academicjobs.com/career-advice">Career Advice</a></li> */}
          <li>
            <a
              className="footer-nav__link"
              href="https://www.facebook.com/profile.php?id=100088232015128"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>

          <li>
            <a
              className="footer-nav__link"
              href="https://www.youtube.com/channel/UCIaknpVcM_ZijJSWJCYi8aw"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/academic-jobs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/academicjobs_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
