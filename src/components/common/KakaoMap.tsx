import React, { useEffect, useRef } from 'react'
import { SetterOrUpdater } from 'recoil'

interface KakaoMapProps {
  setLocationName: React.Dispatch<React.SetStateAction<string | null>>
  setLatLong: SetterOrUpdater<{
    lat: number
    long: number
  }>
}

const KakaoMap = ({ setLocationName, setLatLong }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    const container = mapRef.current
    const options = {
      center: new (window as any).kakao.maps.LatLng(37.566826, 126.978656),
      level: 5,
    }

    const map = new (window as any).kakao.maps.Map(container, options)
    mapInstanceRef.current = map
    ;(window as any).kakao.maps.event.addListener(map, 'center_changed', () => {
      const center = map.getCenter()
      const latitude = center.getLat()
      const longitude = center.getLng()
      setLatLong({ lat: latitude, long: longitude })
      const geocoder = new (window as any).kakao.maps.services.Geocoder()
      geocoder.coord2Address(
        longitude,
        latitude,
        (result: any, status: any) => {
          if (status === (window as any).kakao.maps.services.Status.OK) {
            const address = result[0].address.address_name
            setLocationName(address)
          } else {
            setLocationName(null)
          }
        }
      )
    })
  }, [])

  return (
    <div className=' relative'>
      <div
        ref={mapRef}
        id='map'
        className='w-[calc(100%+48px)] h-[calc(100vh-160px)] ml-[-24px]'
      />
      <img
        className=' absolute z-10 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2'
        src='/assets/icons/spot.svg'
        alt='좌표'
      />
    </div>
  )
}

export default KakaoMap
