interface Props {
  isMe?: boolean
  step: number
  maxStep: number
}

function Track({ isMe, step, maxStep }: Props) {
  const percentage = (step / maxStep) * 100

  const color = isMe ? '#FFA800' : '#D4D4D4'

  // percentage 100 일 때 0
  // percentage 0 일 때 50
  const value = 50 - (percentage / 100) * 50

  const top = `calc(${100 - percentage}% - ${value}px)`

  return (
    <div className='w-[50px] h-[286px] relative bg-[#F2EDE4] rounded-[25px]'>
      <div
        className={`w-[50px] rounded-[25px] absolute bottom-0`}
        style={{
          backgroundColor: color,
          top,
        }}
      />
    </div>
  )
}

export default Track
