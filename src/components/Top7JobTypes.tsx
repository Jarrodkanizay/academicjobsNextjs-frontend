'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store/store';
import JobTypeFaces from './JobTypeFaces';
export default function JobSearchBox() {
  const { region } = useStore();
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
      <JobTypeFaces />
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
          <a className="grayscale hover:grayscale-0" href='/executive?r=Global&filter0=[{"category":"master_category_job_type","filter":"Executive"}]'>
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
