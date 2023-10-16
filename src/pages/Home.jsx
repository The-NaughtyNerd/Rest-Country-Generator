import '../sass/inputs.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import CountryCard from '../components/CountryCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CardSkeleton from '../layout/CardSkeleton';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectInput, setSelectInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const regionList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    fetchCountries();
    setIsLoading(false);
  }, []);

  // const fetchCountries = async () => {
  //   const res = await fetch(`http://localhost:5000/countryAPI`);
  //   const data = await res.json();
  //   // console.log(data);
  //   setCountry(data);
  //   // console.log(country);
  // };
  const fetchCountries = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    // console.log(data);
    // setIsLoading(true);
    setCountries(data);
    // console.log(country);
  };

  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setSelectInput(e.target.value);
  };

  useEffect(() => {
    const result = countries.filter(
      (item) =>
        (!searchInput ||
          item.name.common.toLowerCase().includes(searchInput.toLowerCase())) &&
        (!selectInput || item.region === selectInput)
    );
    setFilteredItems(result);
    // console.log(result);
  }, [searchInput, countries, selectInput]);

  return (
    <>
      <main className="pt-[6rem] md:pt-[10rem] px-12 md:px-20">
        <div className="flex flex-col md:flex-row justify-between mb-20 ">
          {isLoading ? (
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <Skeleton className="input w-full md:w-[70%]" />
            </div>
          ) : (
            <form className="w-full md:w-1/2 relative mb-10 md:mb-0">
              {/* <div className=""> */}
              <input
                required
                type="search"
                name="search-country"
                id=""
                value={searchInput}
                onChange={handleChangeInput}
                placeholder="Search for a country..."
                className="w-full md:w-[70%] shadow-md input pl-20"
              />
              <button className="absolute left-5 top-4">
                <AiOutlineSearch className="  w-8 h-8 text-lightInput dark:text-white" />
              </button>
              {/* </div> */}
            </form>
          )}

          {isLoading ? (
            <div className="w-full md:w-1/2 flex justify-start md:justify-end">
              <Skeleton className="input w-full" />
            </div>
          ) : (
            <div className="w-full md:w-1/2 flex justify-start md:justify-end">
              <select
                required
                name=""
                id=""
                className="w-[70%] md:w-[30%] shadow-md input"
                onChange={handleChangeSelect}
              >
                <option value="">Filter by Region (All)</option>
                {regionList.map((region) => (
                  <option value={region} key={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className=" country__card">
          {isLoading && <CardSkeleton cards={8} />}
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div className="" key={idx}>
                <Link to={`${item.cca3.toLowerCase()}`}>
                  {/* <CountryCard key={idx} {...item} /> */}
                  <CountryCard
                    id={idx}
                    img={item.flags.png}
                    title={item.name.common}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                  />
                </Link>
              </div>
            ))
          ) : (
            <div className="container mx-auto text-center">
              <div className={`${!isLoading ? '' : 'hidden'}`}>
                <h1 className="font-extrabold text-[3rem]">
                  Country not found...
                </h1>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
