type Props = { buttonText?: string };

const SearchButton = ({ buttonText = 'Search' }: Props) => {
  return (
    <button
      className="h-[50px] ml-auto px-4 py-2 bg-[#f4a10c] w-full md:w-auto text-white hover:bg-orange-600 animate-pulse font-bold shadow-md rounded-t-none rounded-b-lg md:rounded-lg"
      type="submit"
    >
      {buttonText}
    </button>
  );
};

export default SearchButton;
