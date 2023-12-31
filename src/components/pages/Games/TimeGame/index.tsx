import { useState } from 'react'

import useInterval from 'hooks/useInterval'
import Countdown from 'components/pages/Games/Countdown'
import ws from 'components/common/MySocket'

const TimeGame = ({
  centiseconds,
  setCentiseconds,
  time,
  isStart,
  id,
}: any) => {
  const [isRunning, setIsRunning] = useState(true)

  useInterval(() => {
    if (centiseconds >= 1 && isRunning) {
      setCentiseconds((prevCentiseconds: any) => prevCentiseconds - 1)
    }
  }, 10)

  const formatTime = (cs: any) => {
    const seconds = Math.floor(cs / 100)
    const remainingCentiseconds = cs % 100
    return `${seconds.toString().padStart(2, '0')}.${remainingCentiseconds
      .toString()
      .padStart(2, '0')}`
  }

  const formatSeconds = (cs: any) => {
    const seconds = Math.floor(cs / 100)

    return `${seconds.toString().padStart(2, '0')}`
  }

  const formatProgress = (cs: any) => {
    const seconds = Math.floor(cs / 100)

    return seconds
  }

  const done = () => {
    alert('제출 되었습니다.')
  }

  return (
    <div className='bg-[#FFE8E3] px-6 h-screen'>
      <div className='flex items-center mb-6'>
        <img
          src='/assets/images/gameTime.png'
          alt='시간게임'
          className='mr-6'
        />
        <div className=' text-2xl text-[#FF595F] font-semibold'>
          목표 시간에 정확히
          <br />
          버튼을 클릭하세요!
        </div>
      </div>
      <Countdown
        seconds={formatSeconds(centiseconds)}
        progress={formatProgress(centiseconds) * 10}
      />
      <div className='mb-[14px] text-2xl text-[#FF595F] text-center'>
        목표 시간 : {time}초
      </div>
      <div className=' bg-white py-4 text-[50px] rounded-[10px] font-bold text-[#FF595F] text-center mb-14'>
        {formatTime(centiseconds)}
      </div>
      <button
        className={` text-white w-44 h-44 rounded-[50%] ml-[25%] text-2xl font-bold ${
          isRunning ? 'bg-[#FF595F]' : 'bg-[#D4D4D4]'
        }`}
        onClick={() => {
          setIsRunning(false)
          ws.time_check(String(id), centiseconds, done as () => void)
        }}
        disabled={!isStart}
      >
        {isStart ? (isRunning ? 'STOP' : '순위 집계중') : '대기 중입니다.'}
      </button>
    </div>
  )
}

export default TimeGame
