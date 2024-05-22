import React from 'react';
import TalentPoolForm from '../components/forms/TalentPoolForm';

const TalentPool = ({userId: userId}) => {
  return (
    <div className="mt-8">
          <TalentPoolForm userId={userId} maxWidth="700" />
    </div>
  );
};

export default TalentPool;