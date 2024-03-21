import SignUpForm from './SignUpForm';
import AusUniLogos from '@/components/AusUniLogos';
import AmericaUniLogos from '@/components/AmericaUniLogos';

const page = () => {
  return (
    <div className="w-full">
      
      
  
      <div className="full-width md:h-[120px] h-[120px] gradient-aj">
     
      <section className="wrapper md:flex">
        <h2 className="sentence ">
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
      </div>

   <div className="md:flex mx-auto">
<div className="md:w-1/2 mx-4">
   <SignUpForm />
   </div>
   <div className="col-sm-8 col-md-8 col-lg-8 hidden-xs hidden-sm registrationHeader mt-4 ml-12 md:w-1/2 mx-4">



   <h1 className="text-3xl capitalize">Take your Academic Jobs <br/> to the next level today</h1>
                                <p>AcademicJobs is a hiring platform that only does Higher Ed. <br/> If you’re searching or hiring&nbsp;<strong>Staff, Faculty</strong>&nbsp;or&nbsp;<strong>Executives</strong>, be on AcademicJobs.</p>
                                <div className="row mt-12 flex">
                                     <div className="col-sm-3 col-md-2  col-lg-2 mr-4">
                                     <img alt="Client Care icon" loading="lazy" width="65" height="65" decoding="async" data-nimg="1" className="rounded-xl max-h-[100px] "   src="/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2F_misc%2FClient-Care-icon.png&amp;w=256&amp;q=75"></img>
                                     </div>
                                     <div className="col-sm-9 col-md-10  col-lg-10 ">
                                         <p className="font-bold text-blue-400">Register Now!</p>
                                         <p>Signing up is easy. Your AcademicJobs Profile is one click away.</p>
                                     </div>
                                </div>
                                <div className="row mt-8 flex">
                                     <div className="col-sm-3 col-md-2  col-lg-2 mr-4">
                                     <img alt="Internship icon" loading="lazy" width="65" height="65" decoding="async" data-nimg="1" className="rounded-xl max-h-[100px] "   src="/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2F_misc%2FInternship-icon.png&amp;w=256&amp;q=75"></img>
                                     </div>
                                     <div className="col-sm-9 col-md-10  col-lg-10">
                                         <p className="font-bold text-blue-400">Create a profile</p>
                                         <p>Showcase your skills and let employers and recruiters find you.</p>
                                     </div>
                                </div>
                                <div className="row mt-8 flex">
                                     <div className="col-sm-3 col-md-2  col-lg-2 mr-4">
                                     <img alt="Innovation icon" loading="lazy" width="65" height="65" decoding="async" data-nimg="1" className="rounded-xl max-h-[100px] "   src="/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2F_misc%2FProfessional-Services-icon.png&w=256&q=75"></img>
                                     </div>
                                     <div className="col-sm-9 col-md-10  col-lg-10">
                                         <p className="font-bold text-blue-400">Thousands of Uni jobs</p>
                                         <p>Search and apply with just the touch of a button!</p>
                                     </div>
                                </div>
                                 <div className="row mt-8 flex">
                                     <div className="col-sm-3 col-md-2  col-lg-2 mr-4">
                                     <img alt="Innovation icon" loading="lazy" width="65" height="65" decoding="async" data-nimg="1" className="rounded-xl max-h-[100px] "   src="/_next/image?url=https%3A%2F%2Facademicjobs.s3.amazonaws.com%2Fimg%2F_misc%2FInnovation-icon.png&amp;w=256&amp;q=75"></img>
                                    
                                     </div>
                                     <div className="col-sm-9 col-md-10 col-lg-10">
                                         <p className="font-bold text-blue-400">Access career tools</p>
                                         <p>Create personalized salary estimates and explore career paths.</p>
                                     </div>
                                </div>

                                
                            </div>
                            
                            

   </div>
   
                        <div className="max-w-screen-md mx-auto">
                        <h3 className="mx-8">Thousands of top Higher Ed employers,
                        including...</h3>
                                <AmericaUniLogos/>
   <AusUniLogos/>
   </div>
      
    </div>
  );
};

export default page;
