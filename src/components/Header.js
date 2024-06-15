'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import NavItem from '@/components/NavItem';
import DispatchLink from '@/components/DispatchLink';
import { useStore } from '@/lib/store/store';
import HamburgerMenuIcon from '@/components/icons/HamburgerMenuIcon';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  countryMappings,
  countryMappings1,
  countryMappings2,
} from '@/lib/data/data';
import SigninButton from '@/components/SigninButton';
import useURLParams from '@/utils/urlParams';
import { setFilter } from '@/app/store/postsSlice';

export default function Header() {
  // const { fetchLocation } = useLocation();
  // const { fetchLocation } = useLocation();
  // useEffect(() => {//
  //   const getLocation = async () => {
  //     const location = await fetchLocation();
  //     //console.log(location);
  //   };
  //   getLocation();
  // }, []);
  const { data: session } = useSession();
  const { r = 'Global' } = useURLParams();
  const region = r
  //const { region, setRegion, setFilter1, reset } = useStore();
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);
  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);
  // useEffect(() => {
  //   const countryMap = {
  //     UK: 'United Kingdom',
  //     Australia: 'Australia',
  //     Canada: 'Canada',
  //     USA: 'United States',
  //   };
  //   setRegion(countryMap[region]);
  //   reset();
  //   if (region === 'Europe') {
  //     setFilter1([{ category: 'region', filter: 'Europe' }]);
  //   } else if (region === 'New Zealand') {
  //     setFilter1([{ category: 'region', filter: 'New Zealand' }]);
  //   } else {
  //     setFilter1([{ category: 'Country', filter: countryMap[region] }]);
  //   }
  // }, [region, setRegion, setFilter1, reset]);
  //console.log(region);
  const handleFormSubmit = async () => {
    if (region !== 'Global') {
      navigate('/jobs/', {
        state: { q: '', l: countryMappings1[region].searchLocation },
      });
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch(
            'https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66'
          );
          const result = await response.json();
          return result.country.name;
        } catch (error) {
          return '';
        }
      };
      fetchLocation1()
        .then((country) => {
          //sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          //alert(countryMappings[country.toLowerCase()])
          //alert(countryMappings[country.toLowerCase()])
          dispatch(setRegion(countryMappings[country.toLowerCase()]));
          //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          //alert(region)
          //dispatch(setSearchJobCriteria(a))
          //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
          navigate('/jobs/', {
            state: {
              q: '',
              l: countryMappings1[countryMappings[country.toLowerCase()]]
                .searchLocation,
            },
          });
          //navigate(`/jobs/${countryMappings1[sessionStorage.getItem("location")].searchLocation}`);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
    setIsNavOpen(false);
  };
  const handleLogoutMobile = async () => {
    setIsNavOpen(false);
    await signOut({ callbackUrl: '/' });
  };
  return (
    <>
      <div className="hamburger-wrapper">
        {pathname === '' ? (
          isNavOpen && (
            <Link
              href={`/${countryMappings2[region?.toLowerCase()]?.url}?r=${r}`}
              className={`static-logo mobile`}
              onClick={() => setIsNavOpen(false)}
            >
              <LogoAJ width={270} height={60} />{' '}
            </Link>
          )
        ) : (
          <Link
              href={`/${countryMappings2[region?.toLowerCase()]?.url}?r=${r}`}
            className={`static-logo mobile`}
          >
            <LogoAJ width={270} height={60} />{' '}
          </Link>
        )}
        <HamburgerMenuIcon
          key={isNavOpen}
          onClick={() => setIsNavOpen(!isNavOpen)}
          isOpen={isNavOpen}
        />
        {/* <HamburgerMenuIcon
          onClick={() => {
            setIsNavOpen(!isNavOpen);
            // setMobileMode(!isNavOpen);
          }}
        /> */}
      </div>
      <header className={`header ${isNavOpen ? 'show-menu shadow-xl' : ''} `}>
        <nav>
          {pathname === '' ? null : (
            <Link
              href={`/${countryMappings2[region?.toLowerCase()]?.url}?r=${r}`}
              className="hide-mobile static-logo mr-4"
            >
              <LogoAJ width={270} height={60} />{' '}
            </Link>
          )}
          <NavItem
            url={region ? `/jobs-advanced-search?l=${countryMappings2[region?.toLowerCase()]?.url}` : '/jobs-advanced-search'}
            icon="/dotted-arrow.svg"
            navLink="Seek Jobs"
            forceClass="border-b hover:border-amber-500" //this is optional
            forceButtonClass="border-b hover:border-amber-500 mr-2 "
            onClick={() => setIsNavOpen(false)}
          />
          <NavItem
            url={`/${countryMappings2[region?.toLowerCase()]?.url
              }/jobs-by-top-universities`}
            icon="/upward-arrow.svg"
            navLink="Top Universities"
            forceButtonClass="border-b hover:border-amber-500 "
            onClick={() => setIsNavOpen(false)}
          />
          <NavItem
            url="/career-help"
            icon="/network-icon.svg"
            navLink="Career Help"
            forceButtonClass="border-b hover:border-amber-500 "
            onClick={() => setIsNavOpen(false)}
          />
          {/* <div
            className={`hide-mobile p-2  md:w-52  dropdown-content z-[1] menu px-4 py-2   rounded-box w-31 } `}
            style={{ maxWidth: '62px' }}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="  text-gray-900 relative"
              onMouseEnter={onMouseEnter}
            >
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
                className={`${dropdown ? 'block' : 'hidden'
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
          </div> */}
          {isNavOpen && (
            <>
              {session && session.user ? (
                <>
                  <NavItem
                    url="/my_life"
                    icon="/icons/users.svg"
                    navLink="My profile"
                    forceButtonClass="border-b hover:border-amber-500 "
                    onClick={() => setIsNavOpen(false)} />
                  <NavItem
                    url="./"
                    icon="/icons/logout.svg"
                    navLink="Logout"
                    forceButtonClass="border-b hover:border-amber-500 "
                    onClick={handleLogoutMobile} />
                </>
              ) : (
                <>
                  <NavItem
                    url=""
                    icon="/icons/signin.svg"
                    navLink="Sign In"
                    forceButtonClass="border-b hover:border-amber-500 "
                    onClick={() => signIn()} />
                  <NavItem
                    url="/auth/sign-up"
                    icon="/icons/signup.svg"
                    navLink="Sign Up"
                    forceButtonClass="border-b hover:border-amber-500 "
                    forceImageClass='text-amber-500'
                    onClick={() => setIsNavOpen(false)} />
                </>
              )
              }
              <a className="btn btn-aj w-full mt-4 h820:hidden" href="/jobs">
                Search Globally
              </a>
              <details className="w-full text-center bg-gray-300 open:bg-[amber-200] duration-300 rounded-3xl font-bold shadow-xl h820:hidden">
                <summary className="py-2">Search In Your Country</summary>
                <a
                  className="md:w-52 dropdown-content z-[1] menu p-2 bg-slate-100 w-31"
                >
                  <div className="text-gray-900 relative z-10">
                    <ul className="font-light text-[0.875rem] z-99 min-w-[10rem] overflow-y-auto h-[200px] py-1 bg-white rounded-lg">
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
                </a>
              </details>
            </>
          )}
          <div className="ml-auto post-a-job-button ">
            <NavItem
              url={`/${countryMappings2[region?.toLowerCase()]?.url
                }/recruitment/`}
              icon="/post-a-job-icon.svg"
              navLink="Post a Job"
              forceLinkClass="ml-auto"
              forceButtonClass="nav-mobile-btn btn btn-aj "
              onClick={() => setIsNavOpen(false)}
            />
          </div>
          <div className="mt-8 lg:block hidden md:mt-0 justify-center ml-4">
            <SigninButton />
          </div>
        </nav>
      </header>
    </>
  );
}
