import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

import Header from 'components/common/Header'
import TimeGame from 'components/pages/Games/TimeGame'
import ws from 'components/common/MySocket'
import { userListState } from 'store/user'

const TimeGamePage = () => {
  const navigate = useNavigate()

  const [centiseconds, setCentiseconds] = useState(0)
  const [time, setTime] = useState(0)
  const [userList, setUserList] = useRecoilState(userListState)

  const dsa = new Date().toString()

  useEffect(() => {
    console.log(1)
    ws.timer_in('timer_in', '가', dsa)
  }, [])

  const loadTime = async () => {
    const dsa = await ws.timer_start()

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
      />
    </>
  )
}

export default TimeGamePage
