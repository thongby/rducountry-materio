import React from 'react'
import dynamic from 'next/dynamic'

type Props = {}

const MyMap = dynamic(()=>import('./RDUProvinceMap'),{ssr:false})

const MapShow = (props: Props) => {
  return (
    <>
        <MyMap/>
    </>
    
  )
}

export default MapShow