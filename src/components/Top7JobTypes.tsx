'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store/store';

export default function JobSearchBox() {
 
const { region } = useStore();

          

  const size = 180;
  const items = [
    {
      src: '/home/academic-staff-positions.png',
      alt: 'Academic Staff Positions',
      label: 'Staff/Admin',
      link: `${region}/staff-jobs`,
    },
    {
      src: '/home/academic-executive-positions.png',
      alt: 'Academic Executive Positions',
      label: 'Executive',
      link: `${region}/executive`,
    },
    {
      src: '/home/academic-human-resource-positions.png',
      alt: 'Academic Human Resource Positions',
      label: 'HR Jobs',
      link: `${region}/hr-jobs`,
    },
    {
      src: '/home/academic-faculty-positions.png',
      alt: 'Academic Faculty Positions',
      label: 'Faculty',
      link: `${region}/faculty`,
    },
    {
      src: '/home/academic-phd-positions.png',
      alt: 'Academic PhD Positions',
      label: 'PhD Jobs',
      link: `${region}/phd`,
    },
    {
      src: '/home/academic-graduate-positions.png',
      alt: 'Academic PhD Positions',
      label: 'Student',
      link: `${region}/student-jobs`,
    },
    {
      src: '/home/academic-lecturer-positions.png',
      alt: 'Academic Graduate Positions',
      label: 'Collaborate',
      link: `${region}/graduate`,
    },
  ];
  return (
    <div className="hero-bg md:bg-center">
      <section className="wrapper md:flex">
        <h2 className="sentence">
          <span className="mr-8">Find</span>{' '}
          <span className="md:hidden block">
            <br />
          </span>
          <div className="slidingVertical ">
            <span>Opportunity</span>
            <span>Connections</span>
            <span>Happiness</span>
            <span>Opportunity</span>
            <span>Connections</span>
          </div>
        </h2>
      </section>
      <ul className="hero-icons md:flex flex-wrap md:gap-8 mx-auto text-center items-center justify-center md:mt-0 mt-[-11rem] hidden ">
        {items.map((item, index) => (
          <li key={index}>
            <Link className="grayscale hover:grayscale-0" href={item.link}>
              <Image src={item.src} width={size} height={size} alt={item.alt} />
            </Link>
            <Link className="mb-4" href={item.link}>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="hero-icons flex flex-wrap gap-4 md:gap-8 mx-auto text-center items-center justify-center md:mt-0 mt-[-8rem] md:hidden ">
        <li>
          <a className="grayscale hover:grayscale-0" href="/executive">
            <Image
              alt="Academic Executive Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              src="/_next/image?url=%2Fhome%2Facademic-executive-positions.png&amp;w=384&amp;q=75"
            ></Image>
          </a>
          <a className="mb-4" href="/executive">
            <p>Executive</p>
          </a>
        </li>
        <li>
          <a className="grayscale hover:grayscale-0" href="/faculty">
            <Image
              alt="Academic Faculty Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              src="/_next/image?url=%2Fhome%2Facademic-human-resource-positions.png&amp;w=384&amp;q=75"
            ></Image>
          </a>
          <a className="mb-4" href="/faculty">
            <p>Faculty</p>
          </a>
        </li>
        <li>
          <a className="grayscale hover:grayscale-0" href="/staff-jobs">
            <Image
              alt="Academic Staff Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              src="/_next/image?url=%2Fhome%2Facademic-staff-positions.png&amp;w=384&amp;q=75"
            ></Image>
          </a>
          <a className="mb-4" href="/staff-jobs">
            <p>Staff/Admin</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
