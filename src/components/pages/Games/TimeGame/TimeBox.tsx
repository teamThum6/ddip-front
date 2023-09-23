import React, { useState, useEffect } from 'react'

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false)
  const [centiseconds, setCentiseconds] = useState(1000) // 시작값을 10초(1000 밀리세컨드)로 설정

  useEffect(() => {
    let interval: any

    if (isRunning) {
      interval = setInterval(() => {
        setCentiseconds((prevCentiseconds) => prevCentiseconds - 1)
      }, 10)
    } else {
      clearInterval(interval)
    }

    // 카운트다운이 완료되면 타이머를 멈춥니다
    if (centiseconds <= 0) {
      setIsRunning(false)
    }

    return () => clearInterval(interval)
  }, [isRunning, centiseconds])

  const startStop = () => {
    setIsRunning(!isRunning)
  }

  const reset = () => {
    setCentiseconds(1000) // 10초로 리셋
    setIsRunning(false)
  }

  const formatTime = (cs: any) => {
    const seconds = Math.floor(cs / 100)
    const remainingCentiseconds = cs % 100

    return `${seconds.toString().padStart(2, '0')}.${remainingCentiseconds
      .toString()
      .padStart(2, '0')}`
  }

  return (
    <div>
      <h1>{formatTime(centiseconds)}</h1>
      <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch
