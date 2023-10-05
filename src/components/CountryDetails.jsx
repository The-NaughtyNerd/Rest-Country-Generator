import '../sass/countryDetails.scss';

const CountryDetails = ({
  name,
  img,
  native,
  population,
  reg,
  subreg,
  capital,
  domain,
  curr,
  lang,
  border,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row py-[5em] gap-[6rem] md:gap-[12rem] items-center">
        <div className="w-full md:w-1/2">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="detail">
            <h3 className="detail__name">{name}</h3>

            <div className="detail__info">
              <h4 className="detail__row">
                Native Name:
                <span> {native}</span>
              </h4>
              <h4 className="detail__row">
                Population:
                <span> {population.toLocaleString()}</span>
              </h4>
              <h4 className="detail__row">
                Region:
                <span> {reg}</span>
              </h4>
              <h4 className="detail__row">
                Sub Region:
                <span> {subreg}</span>
              </h4>
              <h4 className="detail__row">
                Capital:
                <span> {capital}</span>
              </h4>
              <h4 className="detail__row mt-8 md:mt-0">
                Top Level Domain:
                <span> {domain}</span>
              </h4>
              <h4 className="detail__row">
                Currencies:
                <span> {curr}</span>
              </h4>
              <h4 className="detail__row">
                Languages:
                <span> {lang.toLocaleString()}</span>
                {/* {lang.map((item, idx) => (
                  <span key={idx}> {item.name}</span>
                ))} */}
              </h4>
            </div>

            <h4 className="detail__row">
              Border Countries:
              <span className="bor shadow-md"> {border}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
