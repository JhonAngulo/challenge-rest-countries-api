import React from 'react'
import { Link } from 'react-router-dom'

const CountryItem = ({ name, flag, population, region, capital }) => {
  return (
    <Link className='cardCountry--link' to={`/detail/${name}`}>
      <div className='cardCountry'>
        <img className='cardCountry--flag' src={flag} alt={`Flag ${name}`} />
        <div className='cardCountry--details'>
          <h2 className='cardCountry--title'>{name}</h2>
          <p>
            <strong>Population: </strong>
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
    </Link>
  )
}

export default CountryItem
