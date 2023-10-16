import CountryDetails from '../components/countryDetails';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  // const [filterCountry, setFilterCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCountry();
  });

  // const fetchCountries = async () => {
  //   const res = await fetch(`http://localhost:5000/countryAPI`);
  //   const data = await res.json();
  //   // console.log(data);
  //   setCountry(data);
  //   // console.log(country);
  // };
  const fetchCountry = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${name.toUpperCase()}`
    );
    const data = await res.json();
    // console.log(data);
    setCountry(data);
    setIsLoading(false);

    // console.log(country);
  };

  // useEffect(() => {
  //   const result = country.filter(
  //     (item) => item.name.includes(name)
  //     // (!searchInput ||
  //     //   item.name.toLowerCase().includes(searchInput.toLowerCase())) &&
  //     // (!selectInput || item.region === selectInput)
  //   );
  //   setFilterCountry(result);
  //   // console.log(result);
  // }, [country, name]);

  return (
    <>
      <section className="pt-[6rem] md:pt-[10rem] px-12 md:px-24">
        <div className="flex justify-start">
          <Link to="/" className="">
            <button className="flex justify-center items-center bg-white dark:bg-darkBlue py-2 px-8 text-[1.4rem] shadow-sm hover:-translate-y-2">
              <BsArrowLeft className="w-8 h-8 mr-4" /> Back
            </button>
          </Link>
        </div>

        {isLoading ? (
          <div className="flex flex-col md:flex-row py-[5em] gap-[6rem] md:gap-[12rem] items-center">
            <div className="w-full md:w-1/2">
              <Skeleton className="h-[40rem]" />
            </div>

            <div className="w-full md:w-1/2">
              <Skeleton />

              <div className="grid grid-cols-2 gap-[4rem] my-[4rem]">
                <Skeleton count={4} className="mb-4" />
                <Skeleton count={4} className="mb-4" />
              </div>

              <Skeleton />
            </div>
          </div>
        ) : (
          country.map((item, idx) => (
            <div key={idx} className="">
              <CountryDetails
                name={item.name.official}
                img={item.flags.png}
                native={
                  item.name.nativeName[Object.keys(item.name.nativeName)[0]]
                    .common
                }
                population={item.population}
                reg={item.region}
                subreg={item.subregion}
                capital={item.capital}
                domain={item.tld}
                curr={item.currencies[Object.keys(item.currencies)[0]].name}
                lang={item.languages[Object.keys(item.languages)[0]]}
                // lang={item.languages.map((item) => item)}
                border={item.borders}
              />
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default Country;
