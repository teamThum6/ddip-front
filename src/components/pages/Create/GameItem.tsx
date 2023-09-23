interface GameItemProps {
  title: string
  backGroundColor: string
  textColor: string
  icon: string
}
const GameItem = ({
  title,
  backGroundColor,
  textColor,
  icon,
}: GameItemProps) => {
  return (
    <div
      className={`w-[102px] p-2 bg-[#FFF8EA] rounded-lg text-[10px] ${backGroundColor} ${textColor} relative`}
    >
      {title}
      <img src={icon} className=' absolute right-3 bottom-2' alt='아이콘' />
    </div>
  )
}

export default GameItem
