interface ColorBlockProps {
  colorCodes: string[]
}

export default function ColorBlock({ colorCodes }: ColorBlockProps) {
  return (
    <div className='flex gap-3 w-[324px] h-100 flex-wrap justify-center items-center'>
      {colorCodes.map((color, i) => {
        let backgroundColor = `bg-[${color}]`
        return (
          <button
            key={i}
            className={`${backgroundColor} w-[100px] h-[100px] rounded-[20px]`}
          ></button>
        )
      })}
    </div>
  )
}
