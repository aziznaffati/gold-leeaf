import React from 'react'

const ListeItems = ({ product }) => {

  return (
    <div>
      <h2>Product name : {product.name}</h2>
      <h2>Quantity : {product.quantity}</h2>
    </div>
  )
}

export default ListeItems