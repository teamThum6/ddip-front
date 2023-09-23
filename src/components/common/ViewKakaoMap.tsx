import React, { useEffect } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

const Map: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 5,
    }
    const map = new window.kakao.maps.Map(container, options)

    const markerPosition = new window.kakao.maps.LatLng(lat, lng)
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)

    return () => {
      marker.setMap(null)
    }
  }, [lat, lng])

  return <div id='map' className='w-full h-[130px]' />
}

export default Map
