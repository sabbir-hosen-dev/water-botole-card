import React from 'react'

function SelectCard({card}) {
  return (
    <img style={{width : "50px", borderRadius: "3px"}} src={card.img} alt="" />
  )
}

export default SelectCard
