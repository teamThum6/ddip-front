import GameResult from 'components/common/GameResult'
import Header from 'components/common/Header'
import Track from 'components/pages/Sharon/Track'
import Spacing from 'layouts/Spacing'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Socket, connect } from 'socket.io-client'

const ORANGE_COLOR = '#FFA800'

const BIG_TEXT_CLASSNAME = `text-[${ORANGE_COLOR}] text-[24px] font-bold leading-[30px]`

type User = {
  step: number
  id: string
  uid: string
  name: string
}

function SharonGamePage() {
  const navigate = useNavigate()

  const { id } = useParams()

  const $socket = useRef<Socket | null>(null)

  const $uid = useRef<string>(localStorage.getItem('__token')!)

  console.log($uid.current)

  const [started, setStarted] = useState(false)

  const [command, setCommand] = useState<string>('')

  const [ended, setEnded] = useState<boolean>(false)

  const [isDie, setIsDie] = useState<boolean>(false)

  const [users, setUser] = useState<User[]>([])

  const [mounted, setMounted] = useState(false)

  function socketConnect() {
    $socket.current = connect('http://13.239.29.240:8080/')

    $socket.current!.on('sharon_member', (users: User[]) => {
      setUser(users)
    })

    $socket.current!.on('sharon_start', () => {
      setStarted(true)
    })

    $socket.current!.on('sharon_command', (command: string) => {
      setCommand(command)
    })

    $socket.current!.on('sharon_ended', (winner: string) => {
      setEnded(true)
    })

    $socket.current!.on('sharon_die', (uid: string) => {
      if (uid === $uid.current) setIsDie(true)
    })

    $socket.current!.emit(
      'sharon_in',
      id,
      $uid.current,
      localStorage.getItem('nickname')!
    )
  }

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
      return
    } else {
      socketConnect()
    }
  }, [mounted])

  return (
    <>
      {!ended && (
        <main className='h-[100vh] w-full bg-[#FFF8EA]'>
          <Header color={ORANGE_COLOR} backgroundColor='' />

          <div className='mt-[36px] px-[35px]'>
            <div className='flex items-center'>
              <img src='/assets/sharon.svg' alt='' />
              <Spacing size={26} />
              <p className={BIG_TEXT_CLASSNAME}>
                문장이 완성되면
                <br />
                움직이지마세요!
              </p>
            </div>
            <Spacing size={25} />
            <div className='bg-white flex items-center px-9 py-5 rounded-[10px] w-full'>
              <p className={BIG_TEXT_CLASSNAME}>{command}</p>
            </div>
            <Spacing size={45} />
            <div className='flex justify-between'>
              {users.map((user) => (
                <Track
                  isMe={user.uid === $uid.current}
                  step={user.step}
                  maxStep={100}
                />
              ))}
            </div>
            <Spacing size={50} />
            <button
              onClick={() => {
                $socket.current!.emit('sharon_step', id)
              }}
              disabled={!started || ended || isDie}
              className={`w-full text-white text-[24px] font-bold rounded-[8px] py-[13px]`}
              style={{
                background: started && !isDie ? ORANGE_COLOR : '#C4C4C4',
              }}
            >
              CLICK해서 움직이기
            </button>
          </div>
        </main>
      )}
      {ended && (
        <GameResult
          primeColor='#FFA800'
          onConfirm={() =>
            navigate('/', {
              replace: true,
            })
          }
        >
          <GameResult.Product image='/assets/s1.png' name='오리온 마이구미' />
          <GameResult.RankArea>
            {users
              .sort((a, b) => {
                if (a.step > b.step) return -1
                else if (a.step < b.step) return 1
                else return 0
              })
              .map((user, index) => (
                <GameResult.Rank
                  key={user.uid}
                  isMe={user.uid === $uid.current}
                  rank={index + 1}
                  profileImage='/assets/s1.png'
                  name={user.name}
                  result={`${index + 1}등`}
                />
              ))}
          </GameResult.RankArea>
        </GameResult>
      )}
    </>
  )
}

export default SharonGamePage
