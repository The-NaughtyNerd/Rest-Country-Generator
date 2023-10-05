import '../sass/inputs.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import CountryCard from '../components/CountryCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectInput, setSelectInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const regionList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    fetchCountries();
  });

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
    console.log(data);
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
          <form className="w-full md:w-1/2 relative mb-10 md:mb-0">
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
          </form>

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
        </div>

        <div className=" country__card">
          {/* {country.map((item, idx) =>
            // <div key={idx}>
            //   <p>{item.name}</p>
            // </div>
            [
              <div className="" key={idx}>
                <Link to={`${item.alpha3Code.toLowerCase()}`}>
              
                  <CountryCard
                    // key={idx}
                    img={item.flag}
                    title={item.name}
                    population={item.population}
                    region={item.region}
                    capital={item.capital}
                  />
                </Link>
              </div>,
            ]
          )} */}
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
              <h1 className="font-extrabold text-[3rem]">
                Country not found...
              </h1>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
