'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import NavItem from '@/components/NavItem';
import DispatchLink from '@/components/DispatchLink';
import { useStore } from '@/lib/store/store';

import {
  countryMappings,
  countryMappings1,
  countryMappings2,
} from '@/lib/data/data';
export default function Header() {
  const { region } = useStore();
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);
  const onMouseEnter = (e) => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <header className="">
      <nav>
        <Link href="/" className="mr-10">
          {pathname === '/' || <LogoAJ width={270} height={60} />}
        </Link>
        <NavItem
          url="/jobs"
          icon="/dotted-arrow.svg"
          navLink="Seek Jobs"
          forceClass="" //this is optional
        />
        <NavItem
          url="/Global/employers"
          icon="/upward-arrow.svg"
          navLink="Top Universities"
        />
        <NavItem
          url="/academic-hub"
          icon="/network-icon.svg"
          navLink="My Academic Hub"
        />
        <div
          className={`hide-mobile p-2  md:w-52  dropdown-content z-[1] menu px-4 py-2   rounded-box w-31 } `}
          style={{ maxWidth: '62px' }}
          onMouseLeave={onMouseLeave}
        >
          <div className="  text-gray-900 relative" onMouseEnter={onMouseEnter}>
            {countryMappings1[region].hasPic ? (
              <Image
                src={`https://academicjobs.s3.amazonaws.com/icon/countryFlag/${region}.svg`}
                alt={region}
                width={30}
                height={30}
              />
            ) : (
              <span className="" style={{ height: '20px' }}>
                {region}
              </span>
            )}
            <ul
              onMouseLeave={onMouseLeave}
              className={`${
                dropdown ? 'block' : 'hidden'
              } absolute  left-0 text-[0.875rem] z-99  min-w-[10rem] py-1 bg-white rounded-lg shadow-lg shadow-indigo-500/40`}
              ref={ref}
            >
              {Object.keys(countryMappings1).map((key) => (
                <li className="navbar__item" key={key}>
                  <DispatchLink
                    to={`/${key}/`}
                    region={key}
                    setDropdown={setDropdown}
                    setIsNavOpen={setIsNavOpen}
                    className="navbar__link"
                  >
                    {countryMappings1[key].menu}
                  </DispatchLink>
                </li>
              ))}
            </ul>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        <NavItem
          url="/recruitment"
          icon="/post-a-job-icon.svg"
          navLink="Post a Job"
          forceLinkClass="btn-mode"
          forceButtonClass="nav-mobile-btn btn btn-aj"
        />
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: end;
        background: rgba(0,0,0,.4);
      }
    `}</style>
    </header>
  );
}
