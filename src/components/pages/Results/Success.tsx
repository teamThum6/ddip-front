import Section from 'components/pages/Results/Section'

const Success = () => {
  return (
    <div className='bg-[#FF595F] text-center'>
      <div className='rounded-[50%] bg-[#FFE8E3] h-[143px] w-[143px] bg-opacity-60 inline-flex justify-center items-center mb-7'>
        <img src='/assets/ddip-cta.png' alt='' className=' w-24 h-24' />
      </div>
      <div className=' text-xl font-semibold text-white mb-[30px]'>띱성공!</div>
      <div className=' bg-white px-6 pt-9 rounded-t-[40px] space-y-3'>
        <Section title='띱한 물건'>
          <div className='flex items-center shadow-sm rounded-[10px] justify-between'>
            <img
              className='w-[80px] h-[80px] mr-5'
              src='https://images.innisfree.co.kr/upload/product/35224_l_S_667.jpg?T202309232017'
              alt=''
            />
            <div>
              <div className=' text-xs mb-[2px] opacity-50'>음식</div>
              <div className=' text-base font-semibold'>
                오리온 마이구미 젤리
              </div>
            </div>
            <div className='bg-red-400 h-[80px] w-2.5 rounded-r-xl' />
          </div>
        </Section>
        <Section title='띱할 장소'>
          <div className='flex items-center  mb-3'>
            <img src='/assets/icons/location.svg' alt='위치' className='mr-2' />
            <div className='text-[#3A3A3A] font-medium'>
              서울특별시 마포구 마포대로 122
            </div>
          </div>
          <div className='bg-red-400 h-[130px] w-full' />
        </Section>
        <Section title='띱할 시간'>
          <div className='px-2 py-1 font-semibold text-[#FF595F] bg-[#FFE8E3] w-[57px]  rounded-md'>
            12:00
          </div>
        </Section>
        <div className='w-full h-[50px]' />
      </div>

      <button className='fixed w-full bottom-0 left-0 bg-[#FF595F] py-4 text-white'>
        확인
      </button>
    </div>
  )
}

export default Success
