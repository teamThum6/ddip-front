import { useRecoilState } from 'recoil'

import KakaoMap from 'components/common/KakaoMap'
import { locationNameState } from 'store/location'

const LocationSelection = () => {
  const [locationName, setLocationName] = useRecoilState<null | string>(
    locationNameState
  )

  return (
    <div className='w-full relative'>
      <div className=' text-xl font-semibold'>
        물건을 전달할 장소를 선택해주세요.
      </div>
      <div className='w-full h-2' />
      <div className=' text-base font-normal'>
        누구나 찾기 쉬운 공공장소가 좋아요.
      </div>
      <div className='w-full h-10' />
      <KakaoMap setLocationName={setLocationName} />
      {locationName && (
        <button className='absolute bottom-[50px] max-w-[390px] bg-red-400 w-full left-2 z-10 py-4 text-center'>
          선택 완료
        </button>
      )}
    </div>
  )
}

export default LocationSelection