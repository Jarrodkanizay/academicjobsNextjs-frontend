'use client';
import Image from 'next/image';
import { useState } from 'react';
import { productData } from '@/data/productData';

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

type Props = {
  currency?: '' | 'AUD' | 'USD' | 'NZD';
  regionSelector?: boolean;
};

const PricingTable = ({ currency = '', regionSelector = false }: Props) => {
  // const PricingTable = () => {
  const region = {
    Australia: 'AUD',
    // Asia: 'JPY',
    // Africa: 'ZAR',
    // Canada: 'CAD',
    // Europe: 'EUR',
    // India: 'INR',
    // 'South America': 'BRL',
    // 'Middle East': 'SAR',
    'New Zealand': 'NZD',
    // 'United Kingdom': 'GBP',
    USA: 'USD',
    Other: 'USD',
  };
  const regionMessage = 'Which Region are you from?';

  function formatNumberWithCommas(number: number) {
    return number.toLocaleString();
  }
  const [regionSelected, setRegion] = useState(region);

  // TODO - Add validation for region, users should be able to proceed without selecting a region!
  // TODO - Display a modal or highlight the region selector
  // TODO - Customize the features for AHEIA versus other regions
  // TODO - Setup other pricing for other regions in stripe

  const [selectedCurrency, setSelectedCurrency] = useState(regionMessage);

  let productList = [];

  if (currency === '') {
    productList = productData.AUD;
  } else {
    productList = productData[currency];
  }

  const [products, getProducts] = useState(productData.AUD);

  const handleChange = (event) => {
    setSelectedCurrency(event.target.value); // Get the selected option element
    const selectedOption = event.target.options[event.target.selectedIndex]; // Get the text of the selected option
    const selectedRegion = selectedOption.text;
    setRegion(selectedRegion);
  };

  return (
    <div className="max-w-6xl mx-auto pt-4 px-8">
      {/* {regionSelector ? ( */}
      <>
        <label htmlFor="currency" className="label-text text-xs">
          {selectedCurrency === regionMessage
            ? 'Please select a region?'
            : 'Region'}
        </label>
        <select
          id="currency"
          value={selectedCurrency}
          onChange={handleChange}
          name="currency"
          className="select select-bordered w-full bg-white focus:outline-none focus:border-orange-500 mb-4"
          required
        >
          <option value="" selected>
            Which Region are you from?
          </option>
          {Object.keys(region)
            .filter((key) => key !== 'JobElephant')
            .map((key) => (
              <option key={key} value={region[key]}>
                {key}
              </option>
            ))}
        </select>
      </>
      {/* ) : null} */}

      <h2 className="underline-full gray-blue">
        {selectedCurrency === 'AUD'
          ? 'EOFY Special (AHEIA Members Only)'
          : 'Pricing'}{' '}
        {selectedCurrency === regionMessage ? '' : selectedCurrency}
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
                {products[0].name}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {products[0].currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold">
                  {formatNumberWithCommas(products[0].price)}
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
            href={`/purchase/${products[0].slug}`}
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            Buy {products[0].name}
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
                {products[1].name}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {products[1].currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold text-black">
                  {formatNumberWithCommas(products[1].price)}
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
            href={`/purchase/${products[1].slug}`}
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            Buy {products[1].name}
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
                {products[2].name}
              </span>
              <span>
                <span className="font-medium text-gray-500 text-xl align-top">
                  {products[2].currencySymbol}&thinsp;
                </span>
                <span className="text-3xl font-bold text-black">
                  {formatNumberWithCommas(products[2].price)}
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
                <span className="text-black"> {products[1].name} </span>
                features
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
            href={`/purchase/${products[2].slug}`}
            className="flex justify-center items-center bg-aj rounded-xl py-5 px-4 text-center text-white font-bold text-xl"
          >
            Subscribe to {products[2].name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
