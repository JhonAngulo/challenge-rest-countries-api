import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  let { country } = useParams()

  console.log(country)
  return <h1>Detail</h1>
}

export default Detail
