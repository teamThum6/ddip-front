import Spacing from 'layouts/Spacing'
import style from './GameItem.module.css'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

function GameItem({ el }: any) {
  const navigate = useNavigate()

  const width = (document.body.clientWidth - 56 - 16) / 2

  const imageHeight = width * 0.76

  const gameTypeFilter = (gameType: any) => {
    if (gameType === 2) return 'sharon'
    if (gameType === 4) return 'time'
  }
  const categoryTypeFilter = (gameType: any) => {
    if (gameType === 1) return '음식'
    if (gameType === 2) return '생활'
    if (gameType === 3) return '의류'
    if (gameType === 4) return '전자기기'
    if (gameType === 5) return '사무용품'
    if (gameType === 6) return '도서'
  }

  return (
    <li
      style={{
        width,
      }}
      className={classNames(
        'rounded-[25px] overflow-hidden cursor-pointer',
        style.shadow
      )}
      onClick={() => {
        if (el.game_type === 4 || el.game_type === 2) {
          return navigate(
            `/games/${gameTypeFilter(el.game_type)}/${el.product_key}`
          )
        } else {
          alert('준비중입니다.')
        }
      }}
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
        <p className={style.category}>{categoryTypeFilter(el.category_key)}</p>
        <p className={style.title}>{el.title}</p>

        <Spacing size={20} />

        <div className='flex justify-between items-center mb-[5px]'>
          <div className='flex items-center'>
            <img src='/assets/people.svg' alt='' />
            <Spacing size={4} />
            <p className={style.people}>3/{el.max_participants}</p>
          </div>
          <div className='flex items-center'>
            <img src='/assets/time_12x12_gray.svg' alt='' />
            <Spacing size={4} />
            <p className={style.time}>
              {Math.floor(
                (new Date().getTime() - new Date(el.created_at).getTime()) /
                  (1000 * 60)
              )}
              분 전
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default GameItem
