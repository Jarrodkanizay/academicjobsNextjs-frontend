import React from 'react';
import TalentPoolForm from '../components/forms/TalentPoolForm';
import Link from 'next/link';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';

const TalentPool = ({talentPool: talentPool}) => {
  const queryClient = useQueryClient();

  const mutationEmployer = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/favoriteEmployerId', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('favoriteEmployers');
    },
  });

  return (
    <div className="mt-8">
          {talentPool?.length > 0 && (
            <>
              {talentPool.map(({ userId, employer: { id: employerId, company_name, logo } }, i) => (
                <div key={i} className="card card-side bg-white shadow-xl border border-slate-300 p-4 mb-8">
                  <figure className="mr-2">
                    <Image
                      width={100}
                      height={100}
                      src={logo ? `https://academicjobs.s3.amazonaws.com/img/university-logo/${logo}` : '/favicon.png'}
                      alt=""
                    />
                  </figure>
                  <div className="flex flex-col justify-center">
                    <h3 className="m-0 p-0 pr-6 mb-2 leading-tight text-sky-800">{company_name}</h3>
                  </div>
                  <div className="flex flex-col justify-center ml-auto gap-2">
                    <Link
                      className="btn btn-accent"
                      href={`/employers/${company_name.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, '-')}/${employerId}`}
                    >
                      Employer Profile
                    </Link>
                    <button
                      className="btn btn-error"
                      onClick={() => {
                        const mode = 'remove';
                        const type = 'TALENTPOOL'
                        mutationEmployer.mutate({ employerId, userId, mode, type });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
    </div>
  );
};

export default TalentPool;