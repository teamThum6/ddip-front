import Spacing from 'layouts/Spacing'
import style from './DDip.module.css'

function DDip() {
  return (
    <button className={style.circle}>
      <img src='/assets/ddip-cta.png' className='w-[31px]' alt='' />
      <Spacing size={2} />
      <p className='text-white text-[10px] leading-3'>띱 하기</p>
    </button>
  )
}

export default DDip
