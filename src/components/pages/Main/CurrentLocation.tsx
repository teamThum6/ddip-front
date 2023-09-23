import Spacing from 'layouts/Spacing'

function CurrentLocation() {
  return (
    <div className='flex items-center px-[28px]'>
      <img src='/assets/distance.svg' alt='위치 아이콘' />
      <Spacing size={7} />
      <p className='text-white leading-4'>서울시 마포구</p>
    </div>
  )
}

export default CurrentLocation
