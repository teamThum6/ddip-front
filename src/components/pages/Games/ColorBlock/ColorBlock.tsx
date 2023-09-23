interface ColorBlockProps {
  colorCodes: string[]
}

export default function ColorBlock({ colorCodes }: ColorBlockProps) {
  return (
    <div className='flex gap-3 w-[324px] h-100 flex-wrap justify-center items-center'>
      {colorCodes.map((color, i) => {
        return (
          <button
            key={i}
            style={{ backgroundColor: color }}
            className={`w-[100px] h-[100px] rounded-[20px]`}
          ></button>
        )
      })}
    </div>
  )
}
