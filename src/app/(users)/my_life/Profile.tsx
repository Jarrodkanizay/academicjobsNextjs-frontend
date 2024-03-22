import { StarRank } from '@/components/StarRank';
import WaveBackground from '@/components/WaveBackground';
import MapMarkerIcon from '@/components/icons/MapMarkerIcon';
import DashboardCard from '@/components/profile/DashboardCards';
import Image from 'next/image';
import Link from 'next/link';
// import JobSearchBox2 from '@/components/JobSearchBox2';
// import SearchResults from '@/components/SearchResults';

type UserProps = {
  id: number;
  firstName?: string;
  lastName?: string;
  summary?: string;
  expertise?: string[];
  skills?: string[];
  teachingPhilosophy?: string;
  researchPhilosophy?: string;
  qualifications?: string[];
  profileStrength?: number;
  location?: string;
  rank?: number;
  jobTitle?: string;
  organization?: string;
  description?: string;
  avatar?: string;
  wavesOn?: boolean;
  bgColor?: string;
  savedJobs?: [];
};

const SimpleCard = ({
  id,
  firstName = '',
  lastName = '',
  summary = '',
  expertise = [],
  skills = [],
  teachingPhilosophy = '',
  researchPhilosophy = '',
  qualifications = [],
  profileStrength = 0,
  location = '',
  rank = 1,
  jobTitle = '',
  organization = '',
  avatar = '/placeholders/generic-headshot.png',
  wavesOn = true,
  bgColor = 'custom-background',
  savedJobs = [],
}: UserProps) => {
  if (id === -1) {
    firstName = 'Jane';
    lastName = 'Doe';
    summary =
      'Dr. Jane Doe is a passionate and experienced marine biologist with a strong research focus on deep-sea ecology and biomimicry. Her research career has involved leading deep-sea exploration missions, discovering and studying fascinating deep-sea creatures, and utilizing biomimicry to develop innovative technologies.  Dr. Doe is committed to fostering a collaborative research environment and inspiring the next generation of marine scientists.';
    expertise = [
      'Deep-Sea Ecology',
      'Biomimicry',
      'Deep-Sea Invertebrate Zoology',
      'Hydrothermal Vent Ecosystems',
      'Bioluminescence',
      'Deep-Sea Exploration Techniques (ROV Piloting, Sample Collection)',
    ];
    skills = [
      'Research Grant Writing and Management (e.g., NSF, NOAA)',
      'Scientific Publication (Authored/Co-authored XX peer-reviewed publications)',
      'Public Outreach and Science Communication',
      'Mentorship and Supervision of Undergraduate/Graduate Students',
      'Teaching Experience (e.g., Undergraduate courses in Marine Biology, Deep-Sea Ecology)',
      'Proficiency in R, MATLAB, and relevant oceanographic software',
    ];
    teachingPhilosophy =
      'Dr. Doe believes in a student-centered learning environment that fosters critical thinking, problem-solving skills, and scientific curiosity.  She utilizes innovative teaching methods, including incorporating real-world research data and case studies from her deep-sea expeditions.';
    researchPhilosophy = `The vast and unexplored depths of the ocean hold a wealth of mysteries waiting to be unveiled. My research philosophy centers on uncovering these mysteries through a blend of exploration, meticulous scientific analysis, and a drive to translate discoveries into real-world applications.

    Here are the core principles guiding my research:
    
    Deep-Sea Exploration and Discovery: I believe that pushing the boundaries of deep-sea exploration is crucial to understanding our planet's biodiversity, ecological processes, and the potential for new resources and technologies. My research focuses on utilizing cutting-edge submersible technology and sample collection techniques to access and study these previously unexplored environments.
    Focus on Deep-Sea Ecology and Adaptations: The unique pressures, darkness, and limited resources of the deep sea have led to the evolution of fascinating adaptations in its resident organisms. My research dives deep (pun intended) into understanding these adaptations, including bioluminescence, pressure-resistant proteins, and chemosynthesis-based ecosystems.
    Biomimicry for Innovation: Nature has already perfected solutions to many challenges we face. My research philosophy integrates biomimicry, where I translate the insights gained from studying deep-sea organisms into the development of novel technologies. This could involve creating sustainable lighting solutions inspired by bioluminescent creatures or developing new materials using the pressure-resistant proteins found in deep-sea bacteria.
    Collaborative Research Environment: I believe in fostering a collaborative research environment where students and colleagues can contribute their expertise and learn from each other. Open communication, teamwork, and mentorship are key to achieving impactful scientific breakthroughs.
    Public Outreach and Science Communication: Sharing the wonders and importance of the deep sea with the public is essential. I aim to translate complex scientific discoveries into engaging and accessible content through public lectures, educational outreach programs, and media engagement.`;
    qualifications = [
      'Earned Ph.D. in Marine Biology from Harvard University',
      'Served as Principal Investigator on XX funded research projects',
      'Awarded XX for outstanding research/teaching (optional)',
      'Active member of professional organizations (e.g., The Oceanography Society, The Marine Technology Society)',
    ];
    profileStrength = 30;
    location = 'Boston, MA, USA';
    rank = 5;
    jobTitle = 'Department of Ocean Exploration & Marine Biology';
    organization = 'Harvard University';
    avatar = '/users/avatar.jpg';
    wavesOn = true;
    bgColor = 'custom-background';
  }
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
