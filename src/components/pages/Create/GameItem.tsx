interface GameItemProps {
  title: string
  backGroundColor: string
  textColor: string
  icon: string
  border: string
  action: any
}
const GameItem = ({
  title,
  backGroundColor,
  textColor,
  icon,
  border,
  action,
}: GameItemProps) => {
  return (
    <div
      className={`w-[102px] p-2 bg-[#FFF8EA] rounded-lg text-[10px] ${backGroundColor} ${textColor} relative ${border} cursor-pointer`}
      onClick={action}
    >
      {title}
      <img src={icon} className=' absolute right-3 bottom-2' alt='아이콘' />
    </div>
  )
}

export default GameItem
