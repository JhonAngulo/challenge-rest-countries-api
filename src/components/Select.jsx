import React, { useState } from 'react'

const Select = ({ event, selectOptions, defaultValue }) => {
  const [select, setSelect] = useState(false)

  const onSelectChange = (option) => {
    event(option)
  }

  return (
    <div
      className={`${select ? 'custom_select open' : 'custom_select'}`}
      onClick={() => setSelect(!select)}
      id='filter'
    >
      <div className='custom_select--label'>
        {defaultValue}
        <span className='custom_select--icon'>
          <ion-icon name='chevron-down-outline'></ion-icon>
        </span>
      </div>
      <ul>
        {selectOptions.map((option) => {
          if (option != defaultValue) {
            return (
              <li key={option} onClick={() => onSelectChange(option)}>
                {option}
              </li>
            )
          }
        })}
        {selectOptions.includes(defaultValue) && (
          <li onClick={() => onSelectChange('All')}>All</li>
        )}
      </ul>
    </div>
  )
}

export default Select
