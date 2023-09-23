import Header from 'components/common/Header'
import PageTitle from 'components/common/pageTilte'
import ThumbUpList from 'components/pages/Detail/ThumbUpList'
import DefaultLayout from 'layouts/DefaultLayout'

export default function DetailPage() {
  const product = {
    title: '오리온 마이구미 젤리',
    describtion: '“2+1으로 사서 남은 마이구미 뿌림”',
    status: '경쟁중',
    location: '서울특별시 마포구 마포대로 122',
    time: '1분 전',
  }

  const user = {
    name: 'ㅇㅇㅇ',
    profileImg: 'www',
  }

  const users = ['aaaa', 'bbbb', 'ccc', 'dddd', 'eeee']

  return (
    <DefaultLayout>
      <main className='h-[100vh] w-full bg-stone-50'>
        <div className='h-[350px] w-full bg-blue-100'>
          <Header color='white' backgroundColor='' />
        </div>
        <div className='p-[32px]'>
          <div className='flex justify-between items-center mb-3'>
            <PageTitle>{product.title}</PageTitle>
            <div className='w-[53px] h-[23px] px-2 py-[3px] bg-rose-100 rounded border border-rose-500 flex-col justify-center items-center gap-2.5 inline-flex'>
              <div className='text-rose-600 text-xs font-semibold'>경쟁중</div>
            </div>
          </div>
          <div className='flex justify-between items-center mb-3'>
            <div className='flex gap-1'>
              <img src='/assets/distance.png' alt='위치' />
              <p>{product.location}</p>
            </div>
            <div className='flex gap-3'>
              <img src='/assets/time_12x12_gray.svg' alt='게시시간' />
              <p>{product.time}</p>
            </div>
          </div>
          <div className='flex mb-5'>
            <img src={user.profileImg} alt='프로필 이미지' />
            <div className='flex justify-between flex-col'>
              <p className='my-auto'>{user.name}</p>
              <div className='w-[286px] h-[35px] rounded-r-lg bg-white rounded-bl-lg flex items-center justify-center'>
                {product.describtion}
              </div>
            </div>
          </div>
          <div className='w-auto h-[253px] opacity-50 bg-rose-100 rounded-lg flex flex-col justify-center items-center relative'>
            <ThumbUpList users={users} />
          </div>
        </div>
        <button className='fixed bottom-6 py-4 bg-brand text-white w-full max-w-[390px] rounded-lg'>
          생성하기
        </button>
      </main>
    </DefaultLayout>
  )
}
