import type { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Post Doc Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'As an academic Post Doc, you will have the opportunity to work with talented and dedicated staff, students, alumni, and stakeholders, contribute to the vision and mission.  ',
  keywords: 'Academic Executive Jobs, Executive AcademicJobs',
};
export default function myPage() {
  return (
    
      <main className="content-grid">
              <h1>
              Academic Executive Jobs
              </h1>
              <p>
              View all of the Post Doc jobs that respectable universities now have available on AcademicJobs. Our academic institutions are constantly seeking the greatest Post Docs, and academics may apply for fantastic global academic Post Doc positions through our website.</p>

              <p className='pt-4'>Academic Executive Jobs contain leadership, management, and direction for a specific academic unit or function within a higher education institution. Academic Executive Jobs set the goals and objectives of the unit or function, overseeing the academic programs and activities, ensuring the quality and standards of teaching and research, supporting and developing the staff and students, and managing the financial and human resources.</p>

             
      </main>
   
  );
}
