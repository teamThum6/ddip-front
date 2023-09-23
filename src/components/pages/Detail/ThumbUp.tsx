interface ThumbProps {
  name: string
  transform?: string
  position: number
}

export default function ThumbUp({ name, transform, position }: ThumbProps) {
  return (
    <div
      className={'flex relative items-center justify-center'}
      style={{ bottom: 33 * position - 1 }}
    >
      <img
        className={`${'bottom-[-10px]'} w-[73px] h-[73px] relative`}
        style={{ transform }}
        src='/assets/thumb.svg'
        alt='따봉'
      />
      <p>{name}</p>
    </div>
  )
}
