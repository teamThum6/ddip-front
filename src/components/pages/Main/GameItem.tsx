import Spacing from 'layouts/Spacing'
import style from './GameItem.module.css'
import classNames from 'classnames'

function GameItem() {
  const width = (document.body.clientWidth - 56 - 16) / 2

  const imageHeight = width * 0.76

  return (
    <li
      style={{
        width,
      }}
      className={classNames('rounded-[25px] overflow-hidden', style.shadow)}
    >
      <div
        style={{
          width,
          height: imageHeight,
        }}
      >
        <img src='/assets/s2.png' className='w-full' alt='' />
      </div>
      <div className='py-[7px] px-[14px] bg-white'>
        <p className={style.category}>음식</p>
        <p className={style.title}>팔도 도시락</p>

        <Spacing size={20} />

        <div className='flex justify-between items-center mb-[5px]'>
          <div className='flex items-center'>
            <img src='/assets/people.svg' alt='' />
            <Spacing size={4} />
            <p className={style.people}>3/5</p>
          </div>
          <div className='flex items-center'>
            <img src='/assets/time_12x12_gray.svg' alt='' />
            <Spacing size={4} />
            <p className={style.time}>1분 전</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default GameItem
