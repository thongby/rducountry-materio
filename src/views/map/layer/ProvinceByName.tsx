import React from 'react'
import {GeoJSON} from 'react-leaflet'
import Province from '../data/province.json'

type Props = {}

const data:any = Province

const geoStyle:any = (feature:any) => {
  const hregion = feature.properties.HREGION
  
  if (hregion == 1){
    return {
      weight: 1,
      color: '#f8526c',
      fillColor: '#f8526c',
      fillOpacity: 0.3
    }
  } else if (hregion == 2){
    return {
      weight: 1,
      color: '#0a465d',
      fillColor: '#0a465d',
      fillOpacity: 0.3
    }
  } else if (hregion == 3){
    return {
      weight: 1,
      color: '#f47fff',
      fillColor: '#f47fff',
      fillOpacity: 0.3
    }
  } else if (hregion == 4){
    return {
      weight: 1,
      color: '#5ba304',
      fillColor: '#5ba304',
      fillOpacity: 0.3
    }
  } else if (hregion == 5){
    return {
      weight: 1,
      color: '#f47fff',
      fillColor: '#f47fff',
      fillOpacity: 0.3
    }
  } else if (hregion == 6){
    return {
      weight: 1,
      color: '#f6d42a',
      fillColor: '#f6d42a',
      fillOpacity: 0.3
    }
  } else if (hregion == 7){
    return {
      weight: 1,
      color: '#f88f22',
      fillColor: '#f88f22',
      fillOpacity: 0.3
    }
  } else if (hregion == 8){
    return {
      weight: 1,
      color: '#f6b7c9',
      fillColor: '#f6b7c9',
      fillOpacity: 0.3
    }
  } else if (hregion == 9){
    return {
      weight: 1,
      color: '#ec1802',
      fillColor: '#ec1802',
      fillOpacity: 0.3
    }
  } else if (hregion == 10){
    return {
      weight: 1,
      color: '#c49963',
      fillColor: '#c49963',
      fillOpacity: 0.3
    }
  } else if (hregion == 11){
    return {
      weight: 1,
      color: '#55866e',
      fillColor: '#55866e',
      fillOpacity: 0.3
    }
  } else if (hregion == 12){
    return {
      weight: 1,
      color: '#7c3a3a',
      fillColor: '#7c3a3a',
      fillOpacity: 0.3
    }
  } else {
    return {
      weight: 1,
      color: '#5271ff',
      fillColor: '#5271ff',
      fillOpacity: 0.3
    }
  }
}

const handleClickFeature = (event:any) => {
  const layer = event.target
  const prop = event.target.feature.properties
  //console.log(prop)
  
  let popupContent = ''

  for (const [key, val] of Object.entries(prop)) {

      let roitaiImage = 'https://media.timeout.com/images/105240236/image.jpg'

      if (key == 'REGION6') {
          popupContent += "<img style='max-width:100%' src='" + roitaiImage + "'/>"
      } else {

          popupContent += '<b>' + key + '</b>' + ': ' + val + '<br />'
      }
  }
  
  layer.bindPopup(popupContent)
  //console.log('popupContent:',popupContent)
  //layer.bindPopup('โรงพยาบาลผ่านเกณฑ์: xxx','ร้านขายยาผ่านเกณฑ์: xxx');
  //layer.bindPopup('ปฐมภูมิผ่านเกณฑ์: xxx');
  //layer.bindPopup('ร้านขายของชำผ่านเกณฑ์: xxx');
  //layer.bindPopup('โรงพยาบาลเอกชนผ่านเกณฑ์: xxx');
  //layer.bindPopup('คลินิกเอกชนผ่านเกณฑ์: xxx');
  //layer.bindPopup(tempArray);

}

const handleEachFeature = (feature:any, layer:any) => {
  layer.bindTooltip(feature.properties.ADM1_TH, {
      direction: 'right',
  })
  layer.on({
      'click': handleClickFeature
      /* 'click': console.log('Clicked') */
  })
}

const ProvinceByName = (props: Props) => {
    //console.log(data)

  return data && <GeoJSON data={data} style={geoStyle} onEachFeature={handleEachFeature}/>
}

export default ProvinceByName