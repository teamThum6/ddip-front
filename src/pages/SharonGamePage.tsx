import Header from 'components/common/Header'
import Track from 'components/pages/Sharon/Track'
import Spacing from 'layouts/Spacing'
import { useState } from 'react'

const ORANGE_COLOR = '#FFA800'

const BIG_TEXT_CLASSNAME = `text-[${ORANGE_COLOR}] text-[24px] font-bold leading-[30px]`

function SharonGamePage() {
  const [step, setStep] = useState(0)

  return (
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
          <p className={BIG_TEXT_CLASSNAME}>무궁화 꽃이...</p>
        </div>
        <Spacing size={45} />
        <div className='flex justify-between'>
          <Track step={0} maxStep={100} />
          <Track step={0} maxStep={100} />
          <Track step={0} maxStep={100} />
          <Track step={0} maxStep={100} />
          <Track isMe step={step} maxStep={100} />
        </div>
        <Spacing size={50} />
        <button
          onClick={() => setStep(Math.min(100, step + 1))}
          className={`bg-[${ORANGE_COLOR}] w-full text-white text-[24px] font-bold rounded-[8px] py-[13px]`}
        >
          CLICK해서 움직이기
        </button>
      </div>
    </main>
  )
}

export default SharonGamePage
