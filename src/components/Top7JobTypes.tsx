'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store/store';
import JobTypeFaces from './JobTypeFaces';
export default function JobSearchBox() {
  const { region } = useStore();
    const size = 180;
    const items = [
      {
        src: '/home/academic-faculty-positions.png',
        alt: 'Academic Faculty Positions',
        label: 'Faculty',
        //link: `/faculty`,
        link: `/faculty`,
      },
      {
        src: '/home/academic-executive-positions.png',
        alt: 'Academic Executive Positions',
        label: 'Executive',
        link: `/executive`,
        // link: `/executive?r=Global&filter0=[{"category":"master_category_job_type","filter":"Executive"}]`,
      },
      {
        src: '/home/academic-human-resource-positions.png',
        alt: 'Academic Human Resource Positions',
        label: 'HR Jobs',
        //link: `/hr-jobs`,
        link: `/hr-jobs`,
      },
      {
        src: '/home/academic-phd-positions.png',
        alt: 'Academic PhD Positions',
        label: 'PhD Jobs',
        //link: `/phd`,
        link: `/phd`,
      },
      {
        src: '/home/academic-staff-positions.png',
        alt: 'Academic Staff Positions',
        label: 'Staff/Admin',
        //link: `/admin`,
        link: `/admin`,
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
          <div className="slidingVertical">
            <span>Opportunity</span>
            <span>Connections</span>
            <span>Happiness</span>
            <span>Opportunity</span>
            <span>Connections</span>
          </div>
        </h2>
      </section>
      {/* Headshot's of Faculty, Executive, HR, PhD, Staff/Admin */}
      <JobTypeFaces items={items} size={size} />
      <ul className="hero-icons flex gap-4 md:gap-8 mx-auto text-center items-center justify-center md:mt-[-75px] mt-[-8rem] lg:hidden ">
        <li>
          <a className="grayscale hover:grayscale-0" href="/faculty">
            <Image
              alt="Academic Faculty Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              src="/home/academic-faculty-positions.png"
            ></Image>
          </a>
          <a className="mb-4" href="/executive">
            <p>Faculty</p>
          </a>
        </li>
        <li>
          <a
            className="grayscale hover:grayscale-0"
            href='/executive'
          >
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
          <a className="mb-4" href="/faculty">
            <p>Executive</p>
          </a>
        </li>
        <li>
          <a className="grayscale hover:grayscale-0" href="/staff-jobs">
            <Image
              alt="Academic HR Positions"
              loading="lazy"
              width="180"
              height="180"
              decoding="async"
              data-nimg="1"
              src="/home/academic-human-resource-positions.png"
            ></Image>
          </a>
          <a className="mb-4" href="/staff-jobs">
            <p>HR Jobs</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
