import React from 'react'

const CountryItem = ({ name, flag, population, region, capital }) => {
  return (
    <div className='cardCountry'>
      <img className='cardCountry--flag' src={flag} alt={`Flag ${name}`} />
      <div className='cardCountry--details'>
        <h2 className='cardCountry--title'>{name}</h2>
        <p>
          <strong>Population:</strong>{' '}
          {new Intl.NumberFormat('en-US').format(population)}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  )
}

export default CountryItem
