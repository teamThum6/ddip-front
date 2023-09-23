import { useState } from 'react'

import useInterval from 'hooks/useInterval'

const TimeGame = () => {
  const [isRunning, setIsRunning] = useState(true)
  const [centiseconds, setCentiseconds] = useState(1000)

  useInterval(() => {
    if (centiseconds >= 1 && isRunning) {
      setCentiseconds((prevCentiseconds) => prevCentiseconds - 1)
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
      <div className=' bg-white py-4 px-4 text-lg font-semibold rounded-[10px] mb-16'>
        <div className='flex justify-between mb-2.5 items-center '>
          <div>남은 시간</div>
          <div className='text-sm'>00 : {formatSeconds(centiseconds)}</div>
        </div>
        <div className='relative h-[5px] w-full rounded-lg bg-[#D4D4D4]'>
          <div
            className={`absolute left-0 h-[5px] rounded-lg bg-[#FF595F] `}
            style={{
              width: `${formatProgress(centiseconds) * 10}%`,
            }}
          />
        </div>
      </div>
      <div className='mb-[14px] text-2xl text-[#FF595F] text-center'>
        목표 시간 : 10초
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
        }}
      >
        {isRunning ? 'STOP' : '순위 집계중'}
      </button>
    </div>
  )
}

export default TimeGame
