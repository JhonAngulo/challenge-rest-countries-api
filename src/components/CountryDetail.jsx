import React from 'react'
import { Link } from 'react-router-dom'

const CountryDetail = ({
  name,
  capital,
  flag,
  population,
  region,
  subregion,
  nativeName,
  topLevelDomain,
  currencies,
  languages,
  borders
}) => {
  const extractToString = (array) => {
    let result = array.map((item, index) =>
      index > 0 ? ` ${item.name}` : item.name
    )
    return result.toString()
  }

  return (
    <div className='detailCountry'>
      <Link to='/'>
        <button className='detailCountry__button'>
          <ion-icon name='arrow-back-outline'></ion-icon>Back
        </button>
      </Link>

      <div className='detailCountry__container'>
        <img className='detailCountry__flag' src={flag} alt={`Flag ${name}`} />
        <div className='detailCountry__detail'>
          <h1>{name}</h1>
          <div className='detailCountry__detail--general'>
            <div>
              <p>
                <strong>Native Name: </strong>
                {nativeName}
              </p>
              <p>
                <strong>Population: </strong>
                {new Intl.NumberFormat('en-US').format(population)}
              </p>
              <p>
                <strong>Region: </strong>
                {region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {capital}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Leven Domain: </strong>
                {topLevelDomain}
              </p>
              <p>
                <strong>Currencies: </strong>
                {extractToString(currencies)}
              </p>
              <p>
                <strong>Languages: </strong>
                {extractToString(languages)}
              </p>
            </div>
          </div>
          <div className='detailCountry__buttonsBorder'>
            <p>
              <strong>Border Countries:</strong>
            </p>
            <div>
              {
                borders.map(border => <button key={`border-${border}`} className='detailCountry__button border'>{border}</button>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail
