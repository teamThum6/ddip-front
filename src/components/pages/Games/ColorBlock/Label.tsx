import { profileInfo } from 'types/user'

export default function Label({ profileImg, name, score }: profileInfo) {
  return (
    <div className='w-[124px] h-11 px-2.5 rounded-full bg-white flex justify-center items-center p-5'>
      <img src={profileImg} alt='프로필이미지' />
      <p>{name}</p>
      <p className='text-[#6091D5]'>{score}</p>
    </div>
  )
}
