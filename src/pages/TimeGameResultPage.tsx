import { useRecoilState } from 'recoil'

import { userListState } from 'store/user'
import GameResult from 'components/common/GameResult'

function TimeGameResultPage() {
  const [userList, setUserList] = useRecoilState(userListState)

  if (!userList) return <></>

  return (
    <GameResult primeColor='#6091D6' onConfirm={() => console.log('confirm')}>
      <GameResult.Product image='/assets/s1.png' name='오리온 마이구미' />
      <GameResult.RankArea>
        {userList.map((el, index) => (
          <GameResult.Rank
            isMe
            rank={index + 1}
            profileImage='/assets/s1.png'
            name={index + 1 + '등'}
            result={index + 1 + '등'}
            key={index}
          />
        ))}
      </GameResult.RankArea>
    </GameResult>
  )
}

export default TimeGameResultPage
