import GameList from 'components/pages/Create/GameList'
import Section from 'components/pages/Create/Section'
import Participants from 'components/pages/Create/Participants'

const CreatePage = () => {
  return (
    <div className=' space-y-3'>
      <Section title='사진 등록'>
        <div className='w-[177px] border border-solid border-[#3A3A3A] py-5 flex rounded-lg justify-center items-center text-[#3A3A3A] opacity-50'>
          <img
            className='mr-4 font-medium text-[#3A3A3A]'
            src='/assets/icons/photo.svg'
            alt='사진 등록'
          />
          + 사진 등록
        </div>
      </Section>
      <Section title='제목'>
        <input
          className=' px-4 py-3 text-base font-medium border border-[#3A3A3A] border-solid  rounded-lg w-full opacity-50'
          placeholder='제목'
        />
      </Section>
      <Section title='카테고리'>
        <input
          className=' px-4 py-3 text-base font-medium border border-[#3A3A3A] border-solid  rounded-lg w-full opacity-50'
          placeholder='제목'
        />
      </Section>
      <Section title='한 줄 설명'>
        <input
          className=' px-4 py-3 text-base font-medium border border-[#3A3A3A] border-solid  rounded-lg w-full opacity-50'
          placeholder='제목'
        />
      </Section>
      <Section title='거래 희망 장소'>
        <div className=' px-4 py-3 text-base font-medium border border-[#3A3A3A] border-solid  rounded-lg w-full opacity-50'>
          위치추가
        </div>
      </Section>
      <Section title='게임 방식'>
        <div className='flex text-brand'>
          <div className='rounded-[50%] border-brand border border-solid w-[14px] h-[14px] mr-2' />
          선착순
        </div>
        <div className='w-full h-2' />
        <div className='overflow-y-auto '>
          <GameList />
        </div>
      </Section>
      <Section title='게임 참여 인원'>
        <Participants />
      </Section>
      <div className='w-full h-28' />
      <button className='fixed bottom-0 py-4 bg-brand text-white w-full max-w-[390px] ml-[-24px]'>
        생성하기
      </button>
    </div>
  )
}

export default CreatePage
