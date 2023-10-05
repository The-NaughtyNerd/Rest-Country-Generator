import CountryDetails from '../components/countryDetails';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const Country = () => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  // console.log(name);

  const [filterCountry, setFilterCountry] = useState([]);

  // useEffect(async () => {
  //   setLoading(true);
  //   const response = await fetch(`https://restcountries.com/v2/alpha/${name}`)
  //   const json = await response.json();
  //   !json.status && setData(json);
  // }, []);

  // useEffect(() => {
  //   fetchCountries();
  // });
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
    console.log(data);
    setCountry(data);
    console.log(country);
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

        {country.map((item, idx) => (
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
        ))}

        {/* <CountryDetails
          name={country.name.common}
          // img={country.flag}
          // native={country.nativeName}
          // population={country.population}
          // reg={country.region}
          // subreg={country.subregion}
          // capital={country.capital}
          // // domain={country.topLevelDomain[0]}
          // curr={country.currencies.name}
          // lang={country.languages}
          // border={country.borders}
        /> */}

        {/* {filterCountry.map((item, idx) => [
          <div key={idx} className="">
            <CountryDetails
              name={item.name}
              img={item.flags.png}
              native={item.nativeName}
              population={item.population}
              reg={item.region}
              subreg={item.subregion}
              capital={item.capital}
              domain={item.topLevelDomain[0]}
              curr={item.currencies[0].name}
              lang={item.languages.map((item) => item.name)}
              border={item.borders}
            />
          </div>,
        ])} */}
      </section>
    </>
  );
};

export default Country;
