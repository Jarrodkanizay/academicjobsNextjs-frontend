'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { countryMappings1 } from '@/lib/data/data'
// import DispatchLink from './DispatchLink'
// import { useLocation } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
export default function Header() {
//   const navigate = useNavigate()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
//   const region = useSelector((state) => state.posts.region)
  const ref = useRef(null)
//   const onMouseEnter = (e) => {
//     setDropdown(true)
//   }
  const onMouseLeave = () => {
    setDropdown(false)
  }
  const closeDropdown = () => {
    dropdown && setDropdown(false)
  }
  //const location = useLocation()
  return (
    <div className='flex w-full items-center  justify-between md:justify-start gap-12 border-gray-400 py-8 px-8'>
      <Link href='/' className=''>
        {location.pathname === '/' || (
          <Image
            className='w-48'
            src='https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png'
            alt=''
            fill
          />
        )}
      </Link>
      <nav className='md:w-full'>
        <section className='MOBILE-MENU flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>
          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className='absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='flex flex-col items-start justify-between min-h-[250px] text-3xl'>
              <button
                className='text-gray-900 hover:underline p-4  '
                onClick={() => {
                  navigate('/find-jobs/')
                  setIsNavOpen(false)
                }}
              >
                Find Jobs
              </button>
              <button
                className='text-gray-900 hover:underline p-4  '
                onClick={() => {
                  navigate('/top-universities/')
                  setIsNavOpen(false)
                }}
              >
                Top Universities
              </button>
              <button
                className='text-gray-900 hover:underline p-4  '
                onClick={() => {
                  navigate('/academic-happiness/')
                  setIsNavOpen(false)
                }}
              >
                Academic Happiness
              </button>
              <div className=' flex justify-between gap-10'>
                <a
                  href='https://iloveacademicjobs.com/recruitment/'
                  target='_blank'
                  className='text-[#f4a10c] hover:underline font-bold p-4 '
                >
                  Recruiters
                </a>
              </div>
              <div
                className={`p-2  md:w-52  dropdown-content z-[1] menu p-2  bg-base-100 rounded-box w-31 } `}
              >
                <div className='  text-gray-900 relative'>
                  <ul className=' text-[0.875rem] z-99  min-w-[10rem] py-1 bg-white rounded-lg'>
                    {Object.keys(countryMappings1).map((key) => (
                      <li className='navbar__item' key={key}>
                        <DispatchLink
                          to={`/${key}`}
                          region={key}
                          setDropdown={setDropdown}
                          setIsNavOpen={setIsNavOpen}
                          className='navbar__link'
                        >
                          {countryMappings1[key].menu}
                        </DispatchLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </section>
        <div className='DESKTOP-MENU w-full justify-between hidden space-x-8 lg:flex'>
          <div className='w-full columns-1 flex justify-start  md:items-center  md:gap-10'>
            <Link to='/find-jobs/' className='text-gray-900 hover:underline'>
              Find Jobs
            </Link>
            <Link
              to='/top-universities/'
              className='text-gray-900 hover:underline'
            >
              Top Universities
            </Link>
            <Link
              to='/academic-happiness/'
              className='text-gray-900 hover:underline'
            >
              Academic Happiness
            </Link>
            <div
              className={`p-2  md:w-52  dropdown-content z-[1] menu p-2  bg-base-100 rounded-box w-31 } `}
              onMouseLeave={onMouseLeave}
            >
              <div
                className='  text-gray-900 relative'
                onMouseEnter={onMouseEnter}
              >
                {countryMappings1[region].hasPic ? (
                  <img
                    src={`https://academicjobs.s3.amazonaws.com/icon/countryFlag/${region}.svg`}
                    alt={region}
                    style={{ height: '20px' }}
                  />
                ) : (
                  <span className='' style={{ height: '20px' }}>
                    {' '}
                    {region}{' '}
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
                    <li className='navbar__item' key={key}>
                      <DispatchLink
                        to={`/${key}`}
                        region={key}
                        setDropdown={setDropdown}
                        setIsNavOpen={setIsNavOpen}
                        className='navbar__link'
                      >
                        {countryMappings1[key].menu}
                      </DispatchLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className=' flex justify-between gap-10'>
            <a
              href='https://iloveacademicjobs.com/recruitment/'
              target='_blank'
              className='text-[#f4a10c] hover:underline font-bold'
            >
              Recruiters
            </a>
          </div>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}
