import Link from 'next/link';

type Props = {
  heading: string;
};

const TopUnis = ({ heading }: Props) => {
  return (
    <>
      {/* Start US Section */}
      <h2 id="section" className="underline-full">
        {heading}
      </h2>
      <div className="regions grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-16">
        <ul>
          <li>
            <h3>ACT</h3>
          </li>
          <li>
            <Link href="/employers/australian-national-university/3739">
              ANU
            </Link>
          </li>
          <li className="text-[#003463] font-bold">
            <Link href="/employers/university-of-canberra/3821">UC</Link>
          </li>
          <li>
            <h3>New South Wales</h3>
          </li>
          <li>
            <Link href="/employers/the-university-of-sydney/3171">USYD</Link>
          </li>
          <li>
            <Link href="/employers/university-of-new-south-wales-unsw-/3738">
              UNSW
            </Link>
          </li>
          <li>
            <Link href="/employers/charles-sturt-university/3855">CSU</Link>
          </li>
          <li>
            <Link href="/employers/australian-catholic-university/3853">
              ACU
            </Link>
          </li>
          <li>
            <Link href="/employers/southern-cross-university/3862">SCU</Link>
          </li>
          <li>
            <Link href="/employers/university-of-technology-sydney/3864">
              UTS
            </Link>
          </li>
          <li>
            <Link href="/employers/macquarie-university/3881">
              Macquarie University
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-new-england/3209">UNE</Link>
          </li>
          <li>
            <Link href="/employers/university-of-newcastle/3863">
              University of Newcastle
            </Link>
          </li>
          <li>
            <Link href="/employers/western-sydney-university-wsu-/13128">
              WSU
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-wollongong/3866">UOW</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Victoria</h3>
          </li>
          <li>
            <Link href="/employers/university-of-melbourne/3170">UniMelb</Link>
          </li>
          <li>
            <Link href="/employers/monash-university/3182">
              Monash University
            </Link>
          </li>
          <li>
            <Link href="/employers/victoria-university/3871">VU</Link>
          </li>
          {/* <li>
            <Link href="/employers/university-of-divinity/3872">
              University of Divinity
            </Link>
          </li> */}
          <li>
            <Link href="/employers/swimburne-university-of-technology/10541">
              Swinburne
            </Link>
          </li>
          <li>
            <Link href="/employers/rmit-university/3869">RMIT</Link>
          </li>
          <li>
            <Link href="/employers/la-trobe-university/3868">
              La Trobe University
            </Link>
          </li>
          <li>
            <Link href="/employers/deakin-university/3856">Deakin</Link>
          </li>
          <li>
            <Link href="/employers/federation-university/3787">Federation</Link>
          </li>
          <li>
            <h3>Tasmania</h3>
          </li>
          <li>
            <Link href="/employers/university-of-tasmania/3867">UTAS</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Queensland</h3>
          </li>
          <li className="text-[#003463] font-bold">
            <Link href="/employers/bond-university/3785">Bond University</Link>
          </li>
          <li>
            <Link href="/employers/university-of-queensland/3172">UQ</Link>
          </li>
          <li>
            <Link href="/employers/cquniversity/3854">CQU</Link>
          </li>
          <li>
            <Link href="/employers/griffith-university/3218">
              Griffith University
            </Link>
          </li>
          <li>
            <Link href="/employers/james-cook-university/3857">JCU</Link>
          </li>
          <li>
            <Link href="/employers/university-of-southern-queensland/3861">
              UniSQ
            </Link>
          </li>
          <li className="text-[#003463] font-bold">
            <Link href="/employers/queensland-university-of-technology-qut-/3786">
              QUT
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-sunshine-coast/3859">
              UniSC
            </Link>
          </li>
          <li>
            <h3>Northern Territory</h3>
          </li>
          <li>
            <Link href="/employers/charles-darwin-university/3880">CDU</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h3>South Australia</h3>
          </li>
          <li>
            <Link href="/employers/the-university-of-adelaide/3737">
              The University of Adelaide
            </Link>
          </li>
          {/* <li>
            <Link href="/employers/torrens-university-australia/3875">
              Torrens University Australia
            </Link>
          </li> */}
          <li>
            <Link href="/employers/university-of-south-australia/3874">
              UniSA
            </Link>
          </li>
          <li>
            <Link href="/employers/flinders-university/3873">Flinders</Link>
          </li>
          <li>
            <h3> Western Australia</h3>
          </li>
          <li>
            <Link href="/employers/university-of-western-australia/3173">
              UWA
            </Link>
          </li>
          <li>
            <Link href="/employers/university-of-notre-dame/3879">UND</Link>
          </li>
          <li>
            <Link href="/employers/murdoch-university/3878">Murdoch</Link>
          </li>
          <li>
            <Link href="/employers/edith-cowan-university/3877">ECU</Link>
          </li>
          <li>
            <Link href="/employers/curtin-university/3876">Curtin</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopUnis;
