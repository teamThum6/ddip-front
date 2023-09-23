import { useNavigate } from 'react-router-dom'

import Spacing from 'layouts/Spacing'
import style from './DDip.module.css'

function DDip() {
  const navigate = useNavigate()

  return (
    <button
      className={style.circle}
      onClick={() => {
        navigate('/create')
      }}
    >
      <img src='/assets/ddip-cta.png' className='w-[31px]' alt='' />
      <Spacing size={2} />
      <p className='text-white text-[10px] leading-3'>띱 하기</p>
    </button>
  )
}

export default DDip
