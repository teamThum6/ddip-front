import GameItem from 'components/pages/Create/GameItem'

const GameList = () => {
  return (
    <div className='flex space-x-2 w-[432px]'>
      <div className='w-[102px] p-2 border-2 border-dashed border-[#D4D4D4] rounded-lg text-[#D4D4D4] text-center'>
        <img src='/assets/images/random.png' className=' mx-auto' alt='랜덤' />
        <div className=' text-xs'>RANDOM</div>
      </div>
      <GameItem
        title='무궁화 꽃이 피었습니다..!'
        backGroundColor='bg-[#FFF8EA]'
        textColor='text-[#FFA800]'
        icon='/assets/images/flower.png'
      />
      <GameItem
        title='다른 색 맞추기'
        backGroundColor='bg-[#F3F8FF]'
        textColor='text-[#6091D6]'
        icon='/assets/images/palate.png'
      />
      <GameItem
        title='시간 맞추기'
        backGroundColor='bg-[#FFE8E3]'
        textColor='text-[#FF595F]'
        icon='/assets/images/time.png'
      />
    </div>
  )
}

export default GameList