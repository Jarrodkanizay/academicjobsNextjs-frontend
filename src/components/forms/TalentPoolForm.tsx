import countries from '@/data/CountryList.json';

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
            <input
              tabIndex={1}
              type="text"
              id="first-name-input"
              name="01_First_Name"
              className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
              placeholder="First Name"
              autoComplete="given-name"
              // onChange={handleChange}
              required
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Last name */}
        <div className="col-span-1">
          <div className="relative">
            <input
              tabIndex={2}
              type="text"
              id="last-name-input"
              name="02_Last_Name"
              className="w-full px-4 py-3  rounded-lg text-black focus:outline-none focus:border-orange-500"
              placeholder=" Last Name"
              autoComplete="family-name"
              // onChange={handleChange}
              required
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Academic Title */}
        <div className="col-span-1">
          <div className="relative">
            <input
              tabIndex={3}
              type="text"
              id="name-input"
              name="03_Academic_Title"
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
              placeholder="Academic Title (Role or Position)"
              // onChange={handleChange}
              required
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* phone */}
        <div className="col-span-1">
          <div className="relative">
            <input
              tabIndex={4}
              type="tel"
              id="phone-input"
              name="04_phone"
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
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
            <input
              tabIndex={5}
              type="email"
              id="email-input"
              name="05_Email"
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
              placeholder="Email"
              autoComplete="email"
              // onChange={handleChange}
              required
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
            <input
              tabIndex={6}
              type="checkbox"
              id="06_Collaborations_Checkbox"
              name="06_Collaborations_Checkbox"
              // value={isChecked1 ? 'Collaborate with Top Academics' : ''}
              className="checkbox checkbox-warning"
              // checked={isChecked1}
              // onChange={handleCheckboxChange1}
            />
            <span className="label-text ml-2 mr-auto">Collaborations</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={7}
              type="checkbox"
              id="keynote"
              name="07_Keynote_Checkbox"
              // value={isChecked2 ? 'Keynote Speaking' : ''}
              className="checkbox checkbox-warning"
              // checked={isChecked2}
              // onChange={handleCheckboxChange2}
            />
            <span className="label-text ml-2 mr-auto">Keynote Speaking</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={8}
              type="checkbox"
              id="media"
              name="08_Media_Checkbox"
              // value={isChecked3 ? 'Media' : ''}
              className="checkbox checkbox-warning"
              // checked={isChecked3}
              // onChange={handleCheckboxChange3}
            />
            <span className="label-text ml-2 mr-auto">Media Visibility</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={9}
              type="checkbox"
              id="career-job-opportunities"
              name="09_Career_Job_Opportunities_Checkbox"
              // value={isChecked4 ? 'Career Job Opportunities' : ''}
              className="checkbox checkbox-warning"
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
            <input
              tabIndex={10}
              type="checkbox"
              id="seek-ip-investors"
              name="10_Seek_IP_Investors_Checkbox"
              // value={isChecked5 ? 'Seek IP Investors' : ''}
              className="checkbox checkbox-warning"
              // checked={isChecked5}
              // onChange={handleCheckboxChange5}
            />
            <span className="label-text ml-2 mr-auto">Seek IP Investors</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={11}
              type="checkbox"
              id="partner-with-"
              name="11_Partner_with_Industry_Checkbox"
              // value={isChecked6 ? 'Partner with Industry' : ''}
              className="checkbox checkbox-warning"
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
            <input
              tabIndex={12}
              type="text"
              id="institution-input"
              name="12_Institution"
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
              placeholder="Institution/University (Current, Last or Attended)"
              // onChange={handleChange}
              required
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Department/Faculty */}
        <div className="col-span-1">
          <div className="relative">
            <input
              tabIndex={13}
              type="text"
              id="department-faculty-input"
              name="13_Department_Faculty"
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
              placeholder="Department/Faculty"
              // onChange={handleChange}
              required
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Specialty */}
        <div className="col-span-1">
          <div className="relative">
            <input
              tabIndex={14}
              type="text"
              id="specialty-input"
              name="14_Specialty"
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
              placeholder="Specialty"
              // onChange={handleChange}
              required
            />
            <i className="required">*</i>
          </div>
        </div>
        {/* Location */}
        <div className="col-span-1">
          <div className="relative">
            <input
              tabIndex={15}
              type="text"
              id="location-input"
              name="15_Institution_Location"
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
              placeholder="Institution Location"
              // onChange={handleChange}
              required
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
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
              // onChange={handleChange}
              required
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
              className="w-full px-4 py-3 0 rounded-lg text-black focus:outline-none focus:border-orange-500"
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
