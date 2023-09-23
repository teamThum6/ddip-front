import { useNavigate } from 'react-router-dom'

import { ReactComponent as BackIcon } from 'assets/icons/back.svg'
import classNames from 'classnames'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  backIconColor?: string
}

const Header2 = ({
  className,
  backIconColor = '#000',
  children,
  ...props
}: Props) => {
  const navigate = useNavigate()

  return (
    <>
      <header
        className={classNames(
          'fixed top-0 w-full max-w-[390px] ml-[-24px] px-6 py-4 flex justify-between z-10',
          className
        )}
        {...props}
      >
        <BackIcon fill={backIconColor} onClick={() => navigate(-1)} />
        <div className=' text-xl font-semibold'>{children}</div>
        <div></div>
      </header>
      <div className='w-full h-[60px]' />
    </>
  )
}

export default Header2
