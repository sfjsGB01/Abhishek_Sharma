import React from 'react'
import {useParams} from 'react-router-dom'

function Item() {
  const params = useParams()
  console.log(params)
  return (
    <div>Item {params?.id}</div>
  )
}

export default Item