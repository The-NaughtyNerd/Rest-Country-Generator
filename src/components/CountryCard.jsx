import '../sass/countryCard.scss';

const CountryCard = ({ img, title, population, region, capital }) => {
  // const CountryCard = ({ name, flags, population, region, capital }) => {
  return (
    <>
      <article className="country shadow-lg">
        <img className="country__img" src={img} />
        <div className="country__data">
          <h3 className="country__name">{title} </h3>

          <h4 className="country__row">
            Population:
            <span> {population.toLocaleString()}</span>
          </h4>
          <h4 className="country__row">
            Region:<span> {region}</span>
          </h4>
          <h4 className="country__row">
            Capital:
            <span> {capital}</span>
          </h4>
        </div>
      </article>
      {/* <article className="country shadow-lg">
        <img className="country__img" src={flags.png} />
        <div className="country__data">
          <h3 className="country__name">{name} </h3>

          <h4 className="country__row">
            Population:
            <span> {population}</span>
          </h4>
          <h4 className="country__row">
            Region:<span> {region}</span>
          </h4>
          <h4 className="country__row">
            Capital:
            <span> {capital}</span>
          </h4>
        </div>
      </article> */}
    </>
  );
};

export default CountryCard;
