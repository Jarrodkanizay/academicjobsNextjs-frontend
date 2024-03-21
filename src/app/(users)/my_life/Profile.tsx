import { StarRank } from '@/components/StarRank';
import WaveBackground from '@/components/WaveBackground';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';
import DashboardCard from '@/components/profile/DashboardCards';
import Image from 'next/image';
import Link from 'next/link';
// import JobSearchBox2 from '@/components/JobSearchBox2';
// import SearchResults from '@/components/SearchResults';

type SignUpTypeProps = {
  firstName: string;
  lastName: string;
  profileStrength: number;
  location: string;
  rank?: number;
  jobTitle?: string;
  organization?: string;
  description?: string;
  avatar?: string;
  wavesOn?: boolean;
};

const SimpleCard = ({
  firstName = 'Jane',
  lastName = 'Doe',
  profileStrength = 30,
  location = 'Add your location here.',
  rank = 3,
  jobTitle = 'Add your job title here.',
  organization = 'Add your organization here.',
  avatar = '/users/avatar.jpg',
  wavesOn = true,
  bgColor = 'custom-background',
}) => {
  return (
    <>
      <section className={`${bgColor} full-width mb-16`}>
        <div
          className={`container pt-0 pb-10 ${wavesOn ? 'min-h-[380px]' : ''}`}
        >
          <h1 className="text-center">My Life, My Profile</h1>
          <div className="flex gap-8">
            <div className="avatar">
              <div className="w-40 rounded-full">
                <Image
                  width={160}
                  height={160}
                  src={avatar}
                  alt="User Avatar"
                />
              </div>
            </div>
            <div>
              <StarRank ranking={rank} />
              <h2 className="p-0 m-0">
                {firstName} {lastName}
              </h2>
              <p className="text-white">{jobTitle}</p>
              <p className="text-white">
                Institution:{' '}
                <span className="inline_heading">{organization}</span>
              </p>
              <p className="text-white flex">
                <MapMarkerIcon /> {location}
              </p>
            </div>
            <div className="ml-auto">
              <h2 className="p-0 m-0">Profile Strength {profileStrength}%</h2>
              <progress
                className="progress progress-secondary"
                value={profileStrength}
                max="100"
              ></progress>
              <Link href="/settings" className="p-0 m-0">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
        {wavesOn ? <WaveBackground /> : null}
      </section>
      <section
        title="dashboard"
        className={`${wavesOn ? 'mt-[-96px]' : ''}
`}
      >
        <h2 className="profile">Hi {firstName}</h2>
        <div className="flex gap-6">
          <DashboardCard
            title="Saved Jobs"
            iconPath="/icons/heart.svg"
            href="/my_life"
          />
          <DashboardCard
            title="Recently Viewed"
            iconPath="/icons/eyeball.svg"
            href="/my_life"
          />
          <DashboardCard
            title="Applications"
            iconPath="/icons/network-folder.svg"
            href="/my_life"
          />
        </div>
      </section>
      {/* <section className="jobs_grid job_post_panel_container">
        <div className={`post_panel employer_panel ${employerTheme} mt-6`}>
          {
            <div className={`${panel} ${profileBG}`}>
              <div>
                <div
                  dangerouslySetInnerHTML={{ __html: company_description1 }}
                />
              </div>
            </div>
          }
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <div className="search_panel">
              <JobSearchBox2 />
            </div>
            <SearchResults q={{ employer_id: id || 0 }} filterOff={true} />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default SimpleCard;
