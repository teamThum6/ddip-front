import { useNavigate } from 'react-router-dom'

import { ReactComponent as BackIcon } from 'assets/icons/back.svg'

interface HeaderProps {
  title?: string
  color: string
  backgroundColor: string
}

const Header = ({ title, color, backgroundColor }: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <>
      <header
        className={`fixed top-0 w-full max-w-[390px] ml-[-24px] px-6 py-4 flex justify-between z-10 ${backgroundColor} left-6`}
      >
        <BackIcon fill={color} onClick={() => navigate(-1)} />
        <div className=' text-xl font-semibold'>{title}</div>
        <div></div>
      </header>
      <div className='w-full h-[60px]' />
    </>
  )
}

export default Header
