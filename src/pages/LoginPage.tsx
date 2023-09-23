import Header from 'components/common/Header'
import Spacing from 'layouts/Spacing'

function LoginPage() {
  return (
    <main>
      <Header title='로그인' color='#000' backgroundColor='bg-white' />

      <div
        style={{
          height: 'calc(100vh - 60px)',
        }}
        className='flex flex-col flex-1 items-center justify-center bg-white px-6'
      >
        <img src='/assets/DDip_red.svg' alt='' />
        <Spacing size={19} />
        <p className='text-brand font-bold text-[32px]'>문구 문구 문구</p>
        <Spacing size={12} />
        <p className='text-[#C9C9C9] text-[13px] font-medium text-center leading-4'>
          띱의 회원이 되어주세요.
          <br />
          로그인을 해서 원하는 것을 가져보세요!
        </p>
        <Spacing size={76} />
        <button className='bg-[#FFF000] w-full h-[44px] rounded-[32px] flex items-center justify-center'>
          <img src='/assets/kakao.svg' alt='' />
          <Spacing size={5} />
          <p className='color-black font-semibold'>카카오톡 로그인</p>
        </button>
      </div>
    </main>
  )
}

export default LoginPage
