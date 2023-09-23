interface ProgressBarProps {
  progress: number
  className: string
}

const ProgressBar = ({ progress, className }: ProgressBarProps) => {
  return (
    <div className='relative h-[5px] w-full rounded-lg bg-[#D4D4D4]'>
      <div
        className={`absolute left-0 h-[5px] rounded-lg  ${className}`}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}

export default ProgressBar
