import { useState, Fragment } from 'react'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import { Listbox, Transition } from '@headlessui/react'

import { locationNameState } from 'store/location'
import GameList from 'components/pages/Create/GameList'
import Section from 'components/pages/Create/Section'
import Participants from 'components/pages/Create/Participants'
import ImageUploadBox from 'components/pages/Create/ImageUploadBox'
import CategorySelect from 'components/pages/Main/CategorySelect'

const people = [
  { name: '10:00' },
  { name: '11:00' },
  { name: '12:00' },
  { name: '13:00' },
  { name: '14:00' },
  { name: '15:00' },
  { name: '16:00' },
  { name: '17:00' },
  { name: '18:00' },
  { name: '19:00' },
  { name: '20:00' },
  { name: '21:00' },
  { name: '22:00' },
]

const CreatePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>()
  const locationName = useRecoilValue(locationNameState)
  const [gameType, setGameType] = useState(1)
  const [imgFile, setImgFile] = useState<File | null>(null)
  const [selected, setSelected] = useState(people[0])
  const [participant, setParticipant] = useState([
    false,
    false,
    false,
    false,
    false,
  ])

  return (
    <div className=' space-y-3  px-6'>
      <Section title='사진 등록'>
        <ImageUploadBox setImgFile={setImgFile} />
      </Section>
      <Section title='제목'>
        <input
          className=' px-4 py-3 text-base font-medium border border-[#3A3A3A] border-solid  rounded-lg w-full opacity-50'
          placeholder='제목'
        />
      </Section>
      <Section title='카테고리'>
        <CategorySelect value={selectedCategory} onChange={setSelectedCategory}>
          <CategorySelect.Item value={1}>🍪 음식</CategorySelect.Item>
          <CategorySelect.Item value={2}>🛁 생활</CategorySelect.Item>
          <CategorySelect.Item value={3}>👕 의류</CategorySelect.Item>
          <CategorySelect.Item value={4}>💻 전자기기</CategorySelect.Item>
          <CategorySelect.Item value={5}>🖋️ 사무용품</CategorySelect.Item>
          <CategorySelect.Item value={6}>📚 도서</CategorySelect.Item>
        </CategorySelect>
      </Section>
      <Section title='한 줄 설명'>
        <input
          className=' px-4 py-3 text-base font-medium border border-[#3A3A3A] border-solid  rounded-lg w-full opacity-50'
          placeholder='제목'
        />
      </Section>
      <Section title='시간'>
        <div className='w-72'>
          <Listbox value={selected} onChange={setSelected}>
            <div className='relative mt-1'>
              <Listbox.Button className=' cursor-pointer relative w-[54px]  border  border-solid border-brand py-2 rounded-lg bg-[#FFE8E3] text-xs font-semibold text-brand'>
                <span className='block truncate'>{selected.name}</span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10'>
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative select-none py-2 pl-10 pr-4 cursor-pointer ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </Section>
      <Section title='거래 희망 장소'>
        <Link to='/create/location-selection'>
          <div className=' px-4 py-3 text-base font-medium border border-[#3A3A3A] border-solid  rounded-lg w-full opacity-50'>
            {locationName ? locationName : '위치추가'}
          </div>
        </Link>
      </Section>
      <Section title='게임 방식'>
        <div className='flex text-brand'>
          <div
            className='rounded-[50%] border-brand border border-solid w-[14px] h-[14px] mr-2 inline-flex justify-center items-center'
            onClick={() => {
              setGameType(1)
            }}
          >
            {gameType === 1 && (
              <div className='rounded-[50%] w-[5px] h-[5px] bg-brand' />
            )}
          </div>
          선착순
        </div>
        <div className='w-full h-2' />
        <div className='overflow-y-auto scroll'>
          <GameList setGameType={setGameType} gameType={gameType} />
        </div>
      </Section>
      <Section title='게임 참여 인원'>
        <Participants
          setParticipant={setParticipant}
          participant={participant}
        />
      </Section>
      <div className='w-full h-28' />
      <button className='fixed bottom-0 py-4 bg-brand text-white w-full max-w-[390px] ml-[-24px]'>
        생성하기
      </button>
    </div>
  )
}

export default CreatePage
