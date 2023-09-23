import { Children } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules'
import 'swiper/css'
import style from './Carousel.module.css'
import Spacing from 'layouts/Spacing'

interface Props {
  children: React.ReactNode
}

function Carousel({ children }: Props) {
  return (
    <Swiper
      centeredSlides
      slidesPerView={2 - 0.61538461538}
      loop
      modules={[EffectCreative]}
      {...{
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
          limitProgress: 2,
          prev: {
            scale: 0.61,
            translate: ['-80%', -40, 0],
          },
          next: {
            scale: 0.61,
            translate: ['80%', -40, 0],
          },
        },
      }}
    >
      {Children.toArray(children).map((child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

Carousel.Item = function Item() {
  return (
    <div className='w-[240px] h-[240px] mx-auto rounded-full bg-white overflow-hidden relative'>
      <img src='/assets/s1.png' className='w-full h-full' alt='' />

      <div className={style.gradient} />

      <div className='absolute left-[44px] bottom-[43px] flex justify-between w-[159px]'>
        <div>
          <p className='text-white leading-4'>마이구미</p>
          <Spacing size={3} />
          <div className='flex items-center'>
            <img src='/assets/time_12x12.svg' alt='' />
            <Spacing size={4} />
            <p className='text-white text-[10px]'>1분 전</p>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <img src='/assets/half-arrow.svg' className='h-[15px]' alt='' />
          <Spacing size={10.5} />
          <p className='text-white text-[10px] mr-[9.5px]'>보러가기</p>
        </div>
      </div>
    </div>
  )
}

export default Carousel
