"use client"
import React from 'react'
import { NumericFormat } from 'react-number-format';

const NumberInput = () => {
  return (
      <NumericFormat
          prefix="$ "
          thousandSeparator="."
          decimalSeparator=","
          defaultValue={15000000}
          style={{ fontSize: "35px", padding: "50px", textAlign: "center" }}
      />
  )
}

export default NumberInput