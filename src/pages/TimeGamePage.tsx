import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useNavigate, useParams } from 'react-router-dom'

import Header from 'components/common/Header'
import TimeGame from 'components/pages/Games/TimeGame'
import ws from 'components/common/MySocket'
import { userListState } from 'store/user'

const TimeGamePage = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  const [centiseconds, setCentiseconds] = useState(0)
  const [time, setTime] = useState(0)
  const [userList, setUserList] = useRecoilState(userListState)
  const [isStart, setIsStart] = useState(false)

  useEffect(() => {
    ws.timer_in('timer_in', String(id), localStorage.getItem('nickname')!)
  }, [])

  const loadTime = async () => {
    const dsa = await ws.timer_start()
    if (dsa) {
      setIsStart(true)
    }

    setCentiseconds(Number(dsa) * 100)
    setTime(dsa)
  }

  useEffect(() => {
    loadTime()
  }, [centiseconds])

  const loadUserList = async () => {
    const res = await ws.timer_ended()
    setUserList(res)
    navigate('/games/result')
  }

  loadUserList()

  return (
    <>
      <Header title='' color='#FF595F' backgroundColor='bg-[#FFE8E3]' />
      <TimeGame
        centiseconds={centiseconds}
        setCentiseconds={setCentiseconds}
        time={time}
        isStart={isStart}
        id={id}
      />
    </>
  )
}

export default TimeGamePage
