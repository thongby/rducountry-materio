import React from 'react'
import {GeoJSON} from 'react-leaflet'
import Province from '../data/province.json'

type Props = {}

const data:any = Province

const geoStyle:any = (feature:any) => {
    const region = feature.properties.REGION6
    
    if (region == 'ภาคกลาง'){
      return {
        weight: 1,
        color: '#f8526c',
        fillColor: '#f8526c',
        fillOpacity: 0.3
      }
    } if (region == 'ภาคตะวันตก'){
        return {
          weight: 1,
          color: '#0a465d',
          fillColor: '#0a465d',
          fillOpacity: 0.3
        }
      } else if (region == 'ภาคเหนือ'){
        return {
          weight: 1,
          color: '#f47fff',
          fillColor: '#f47fff',
          fillOpacity: 0.3
        }
      } else if (region == 'ภาคตะวันออกเฉียงเหนือ'){
        return {
          weight: 1,
          color: '#5ba304',
          fillColor: '#5ba304',
          fillOpacity: 0.3
        }
      } else if (region == 'ภาคตะวันออก'){
        return {
          weight: 1,
          color: '#f47fff',
          fillColor: '#f47fff',
          fillOpacity: 0.3
        }
      } 
    else {
      return {
        weight: 1,
        color: '#5271ff',
        fillColor: '#5271ff',
        fillOpacity: 0.3
      }
    }
  }

const ProvinceByRegion = (props: Props) => {
    console.log(data)

    return data && <GeoJSON data={data} style={geoStyle}/>
}

export default ProvinceByRegion