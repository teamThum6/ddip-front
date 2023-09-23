import ProgressBar from 'components/common/ProgressBar'

interface CountdownProps {
  seconds: string
  progress: number
}

const Countdown = ({ seconds, progress }: CountdownProps) => {
  return (
    <div className=' bg-white py-4 px-4 text-lg font-semibold rounded-[10px] mb-16'>
      <div className='flex justify-between mb-2.5 items-center '>
        <div>남은 시간</div>
        <div className='text-sm'>00 : {seconds}</div>
      </div>
      <ProgressBar progress={progress} className='bg-[#FF595F]' />
    </div>
  )
}

export default Countdown
