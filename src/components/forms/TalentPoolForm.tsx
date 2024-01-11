import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';

const TalentPoolForm = () => {
  return (
    <form
      className="mt-4 hidden"
      // onSubmit={handleSubmit}
    >
      <h3 className="underline-full mb-6">Your Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First name */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2
              tabIndex={1}
              type="text"
              ID="first-name-input"
              name="01_First_Name"
              forceClass="px-4 py-3 text-black"
              placeholder="First Name"
              autoComplete="given-name"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Last name */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2
              tabIndex={2}
              type="text"
              ID="last-name-input"
              name="02_Last_Name"
              forceClass="w-full px-4 py-3  rounded-lg text-black"
              placeholder=" Last Name"
              autoComplete="family-name"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Academic Title */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2
              tabIndex={3}
              type="text"
              ID="name-input"
              name="03_Academic_Title"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Academic Title (Role or Position)"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* phone */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2
              tabIndex={4}
              type="tel"
              ID="phone-input"
              name="04_phone"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              autoComplete="tel"
              placeholder="Phone Number"
              // onChange={handleChange}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Email */}
        <div className="col-span-2">
          <div className="relative">
            <InputBlock2
              tabIndex={5}
              type="email"
              ID="email-input"
              name="05_Email"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Email"
              autoComplete="email"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
      </div>
      <h3 className="underline-full mt-10 mb-6">What are you interested in?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Seeking Opportunities */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <InputBlock2
              tabIndex={6}
              type="checkbox"
              ID="06_Collaborations_Checkbox"
              name="06_Collaborations_Checkbox"
              // value={isChecked1 ? 'Collaborate with Top Academics' : ''}
              forceClass="checkbox checkbox-warning"
              // checked={isChecked1}
              // onChange={handleCheckboxChange1}
            />
            <span className="label-text ml-2 mr-auto">Collaborations</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <InputBlock2
              tabIndex={7}
              type="checkbox"
              ID="keynote"
              name="07_Keynote_Checkbox"
              // value={isChecked2 ? 'Keynote Speaking' : ''}
              forceClass="checkbox checkbox-warning"
              // checked={isChecked2}
              // onChange={handleCheckboxChange2}
            />
            <span className="label-text ml-2 mr-auto">Keynote Speaking</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <InputBlock2
              tabIndex={8}
              type="checkbox"
              ID="media"
              name="08_Media_Checkbox"
              // value={isChecked3 ? 'Media' : ''}
              forceClass="checkbox checkbox-warning"
              // checked={isChecked3}
              // onChange={handleCheckboxChange3}
            />
            <span className="label-text ml-2 mr-auto">Media Visibility</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <InputBlock2
              tabIndex={9}
              type="checkbox"
              ID="career-job-opportunities"
              name="09_Career_Job_Opportunities_Checkbox"
              // value={isChecked4 ? 'Career Job Opportunities' : ''}
              forceClass="checkbox checkbox-warning"
              // checked={isChecked4}
              // onChange={handleCheckboxChange4}
            />
            <span className="label-text ml-2 mr-auto">
              Career Progression (Open to Job Offers)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <InputBlock2
              tabIndex={10}
              type="checkbox"
              ID="seek-ip-investors"
              name="10_Seek_IP_Investors_Checkbox"
              // value={isChecked5 ? 'Seek IP Investors' : ''}
              forceClass="checkbox checkbox-warning"
              // checked={isChecked5}
              // onChange={handleCheckboxChange5}
            />
            <span className="label-text ml-2 mr-auto">Seek IP Investors</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <InputBlock2
              tabIndex={11}
              type="checkbox"
              ID="partner-with-"
              name="11_Partner_with_Industry_Checkbox"
              // value={isChecked6 ? 'Partner with Industry' : ''}
              forceClass="checkbox checkbox-warning"
              // checked={isChecked6}
              // onChange={handleCheckboxChange6}
            />
            <span className="label-text ml-2 mr-auto">
              Partner with Industry
            </span>
          </label>
        </div>
      </div>
      {/* Academic Details Section */}
      <h3 className="underline-full mt-10 mb-6">Academic Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Institution */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2
              tabIndex={12}
              type="text"
              ID="institution-input"
              name="12_Institution"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Institution/University (Current, Last or Attended)"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Department/Faculty */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2
              tabIndex={13}
              type="text"
              ID="department-faculty-input"
              name="13_Department_Faculty"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Department/Faculty"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Specialty */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2
              tabIndex={14}
              type="text"
              ID="specialty-input"
              name="14_Specialty"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Specialty"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Location */}
        <div className="col-span-1">
          <div className="relative">
            <InputBlock2
              tabIndex={15}
              type="text"
              ID="location-input"
              name="15_Institution_Location"
              forceClass="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="Institution Location"
              // onChange={handleChange}
              required={true}
            />
            <i className="required">*</i>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <select
              tabIndex={16}
              id="country-select"
              name="16_Country"
              className="w-full px-4 py-3 0 rounded-lg text-black"
              // onChange={handleChange}
              required={true}
            >
              <option value="" disabled selected>
                Select a country...
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            <i className="required">*</i>
          </div>
        </div>
        {/* Profile */}
        <div className="col-span-2">
          <div className="relative">
            <textarea
              tabIndex={17}
              id="profile-input"
              name="17_Profile"
              className="w-full px-4 py-3 0 rounded-lg text-black"
              placeholder="OPTIONAL - Please write a brief profile noting your key skills, experience, and achievements."
              // onChange={handleChange}
            />
            <i className="required">*</i>
            <label
              htmlFor="profile-input"
              className="absolute left-4 top-2 text-gray-600 transition-all"
            ></label>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="relative">
          <p required-data>
            Any field with an asterisk (<span className="asterisk">*</span>) is
            a required field!
          </p>
        </div>
      </div>
      <div className="text-right mt-6">
        <button tabIndex={30} type="submit" className="btn btn-aj">
          Join Talent Pool
        </button>
      </div>
      {/* {submitStatus === 'error' && (
      <p className="mt-4 text-center text-2xl font-bold text-red-500">
        An unknown error occurred.
      </p>
    )} */}
    </form>
  );
};

export default TalentPoolForm;
