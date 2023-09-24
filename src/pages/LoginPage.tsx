import axios from 'axios'
import Header from 'components/common/Header'
import Spacing from 'layouts/Spacing'

import KakaoLogin from 'react-kakao-login'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  function handleSuccess(response: {
    response: KakaoResponse
    profile?: KakaoUserProfile
  }) {
    const { profile } = response

    if (profile) {
      const { id, properties } = profile

      const { nickname, profile_image } = properties

      axios
        .post<{
          access_token: string
        }>('http://13.125.131.81/api/v1/auth/login/kakao', {
          id,
          nickname,
          profile_url: profile_image ?? null,
        })
        .then((res) => {
          localStorage.setItem(
            '__token',
            (res.data.access_token as any).access_token
          )
          localStorage.setItem('nickname', nickname)

          navigate('/', {
            replace: true,
          })
        })
    }
  }

  function handleFail() {
    //
  }

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
        <p className='text-brand font-bold text-[24px] text-center leading-[29px]'>
          나눠주는 사람은 즐겁게!
          <br />
          갖고 싶은 사람은 치열하게!
        </p>
        <Spacing size={12} />
        <p className='text-[#C9C9C9] text-[13px] font-medium text-center leading-4'>
          띱의 회원이 되어주세요.
          <br />
          로그인을 해서 원하는 것을 가져보세요!
        </p>
        <Spacing size={76} />
        <KakaoLogin
          token={process.env.REACT_APP_KAKAO_JS_KEY as string}
          onSuccess={handleSuccess}
          onFail={handleFail}
          render={({ onClick }) => (
            <button
              onClick={onClick}
              className='bg-[#FFF000] w-full h-[44px] rounded-[32px] flex items-center justify-center'
            >
              <img src='/assets/kakao.svg' alt='' />
              <Spacing size={5} />
              <p className='color-black font-semibold'>카카오톡 로그인</p>
            </button>
          )}
        />
      </div>
    </main>
  )
}

export default LoginPage
