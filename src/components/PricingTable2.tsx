import Image from 'next/image';
// type Props = {
//   productName: string
// }

type PricingTypes = {
  cta: string;
  currencySymbol: string;
  basic: string;
  basicPrice: number;
  business: string;
  businessPrice: number;
  enterprise: string;
  enterprisePrice: number;
};

const PricingTable = () => {
  const pricing: PricingTypes = {
    cta: '',
    currencySymbol: '$',
    basic: 'Single Job Post',
    basicPrice: 315,
    business: '3 Job Pack',
    businessPrice: 888,
    enterprise: 'Unlimited',
    enterprisePrice: 888,
  };

  function formatNumberWithCommas(number: number) {
    return number.toLocaleString();
  }

  return (
    <div className="max-w-6xl mx-auto pt-4 px-8">
      <h2 className="underline-full gray-blue">
        EOFY Special (AHEIA Members Only)
      </h2>

      <div
        id="pricing-table-cards"
        className="flex flex-col justify-between items-center lg:flex-row lg:items-start mb-16"
      >
        {/* Pricing Card 1 */}
        <div className="w-full flex-1 mt-8 mb-8 p-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-600">
            <Image
              width="150"
              height="150"
              alt=""
              src="/icons/abstract-orange.jpg"
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold">
                {pricing.basic}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold">
                  {formatNumberWithCommas(pricing.basicPrice)}
                </span>{' '}
                <p className="m-0 mt-[-4px] text-[12px]">/per purchase</p>
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                30 day single<span className="text-black"> job listing</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black">Free </span>employer account
              </span>
            </li>

            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime </span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                Academic
                <span className="text-black"> Job Board</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <a href="/post-a-job" className="ml-3">
                Upgrade to{' '}
                <span className="text-black underline">Featured Listing</span>
              </a>
            </li>
          </ul>

          <a
            href="/post-a-job"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            Buy {pricing.basic}
          </a>
        </div>

        {/* Pricing Card 2 */}
        <div className="w-full flex-1 mt-8 mb-8 p-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:rounded">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-600">
            <Image
              width="150"
              height="150"
              alt=""
              src="/icons/abstract-blue.jpg"
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold text-black">
                {pricing.business}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold text-black">
                  {formatNumberWithCommas(pricing.businessPrice)}
                </span>
                <p className="m-0 mt-[-4px] text-[12px]">/per job pack</p>
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                30 day<span className="text-black"> job listings</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black">Free </span>employer account
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                Post<span className="text-black"> anytime </span>
                <span className="text-[12px]">no expiry</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                Edit job postings
                <span className="text-black"> anytime</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                23%
                <span className="text-black"> cheaper</span> than Seek
              </span>
            </li>
            {/* <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                <span className="text-black">
                  {' '}
                  Save $
                  {formatNumberWithCommas(
                    pricing.basicPrice * 3 - pricing.businessPrice
                  )}
                </span>
              </span>
            </li> */}
          </ul>
          <a
            href="https://buy.stripe.com/dR629O4HmgyY1xe6oM"
            target="_blank"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            Subscribe to {pricing.business}
          </a>
        </div>

        {/* Pricing Card 3 */}
        <div className="w-full flex-1 mt-7 p-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-600">
            <Image
              width="150"
              height="150"
              alt=""
              src="/icons/abstract-green.jpg"
              className="rounded-3xl w-20 h-20"
            />
            <div className="ml-5">
              <span className="block text-2xl font-semibold text-black">
                {pricing.enterprise}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {pricing.currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold text-black">
                  {formatNumberWithCommas(pricing.enterprisePrice)}
                </span>
                <p className="m-0 mt-[-4px] text-[12px]">/monthly</p>
              </span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                EOFY
                <span className="text-black"> special</span>{' '}
                <span className="text-[12px]">(ends soon)</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                All
                <span className="text-black"> {pricing.business} </span>features
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                1 <span className="text-black"> featured listing </span>
                <span className="text-[12px]">per month</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              <Image
                width="20"
                height="20"
                alt=""
                src="/icons/check-grey.svg"
              />
              <span className="ml-3">
                Talent Acquisition <span className="text-black"> support</span>
              </span>
            </li>
            <li className="flex text-lg mb-2">
              ⭐{' '}
              <span className="ml-3">
                <span className="text-black">AHEIA Members Only</span>
              </span>
            </li>
          </ul>
          <a
            href="https://buy.stripe.com/fZeaGk1vaaaAdfWeVh"
            target="_blank"
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            Subscribe to {pricing.enterprise}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
