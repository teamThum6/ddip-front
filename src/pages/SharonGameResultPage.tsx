import GameResult from 'components/common/GameResult'

function SharonGameResultPage() {
  return (
    <GameResult primeColor='#FFA800' onConfirm={() => console.log('confirm')}>
      <GameResult.Product image='/assets/s1.png' name='오리온 마이구미' />
      <GameResult.RankArea>
        <GameResult.Rank
          isMe
          rank={1}
          profileImage='/assets/s1.png'
          name='1등'
          result='1등'
        />
        <GameResult.Rank
          rank={2}
          profileImage='/assets/s1.png'
          name='2등'
          result='2등'
        />
        <GameResult.Rank
          rank={3}
          profileImage='/assets/s1.png'
          name='3등'
          result='3등'
        />
        <GameResult.Rank
          rank={4}
          profileImage='/assets/s1.png'
          name='4등'
          result='4등'
        />
        <GameResult.Rank
          rank={5}
          profileImage='/assets/s1.png'
          name='4등'
          result='5등'
        />
      </GameResult.RankArea>
    </GameResult>
  )
}

export default SharonGameResultPage
