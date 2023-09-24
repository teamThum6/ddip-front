import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { fetchProductDetail } from 'apis/product'
import Header from 'components/common/Header'
import PageTitle from 'components/common/pageTilte'
import ThumbUpList from 'components/pages/Detail/ThumbUpList'
import DefaultLayout from 'layouts/DefaultLayout'

export default function DetailPage() {
  const navigate = useNavigate()
  const [data, setdata] = useState<any>()

  const { id = '' } = useParams()

  const users = ['김수현', '이수민', '강유림', '김나현', '강동현']

  async function fetchData() {
    const res = await fetchProductDetail(Number(id))
    setdata(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data) {
    return <></>
  }

  const gameTypeFilter = (gameType: any) => {
    if (gameType === 1) return 'sharon'
    if (gameType === 3) return 'time'
  }

  return (
    <DefaultLayout>
      <main className='h-[100vh] w-full bg-stone-50'>
        <Header color='black' backgroundColor='bg-white' />
        <img src={data.image_url} className='h-[350px] w-full' alt='' />
        <div className='p-[32px]'>
          <div className='flex justify-between items-center mb-3'>
            <PageTitle>{data.title}</PageTitle>
            <div className='w-[53px] h-[23px] px-2 py-[3px] bg-rose-100 rounded border border-rose-500 flex-col justify-center items-center gap-2.5 inline-flex'>
              <div className='text-rose-600 text-xs font-semibold'>경쟁중</div>
            </div>
          </div>
          <div className='flex justify-between items-center mb-3'>
            <div className='flex gap-1'>
              <img src='/assets/distance.png' alt='위치' />
              <p>{data.location}</p>
            </div>
            <div className='flex gap-3'>
              <img src='/assets/time_12x12_gray.svg' alt='게시시간' />
              <p>1분전</p>
            </div>
          </div>
          <div className='flex mb-5'>
            <div className='bg-red-400 w-10 h-10 rounded-[50%]' />
            <div className='flex justify-between flex-col'>
              <p className='my-auto mb-2'>김솔</p>
              <div className='w-[286px] h-[35px] rounded-r-lg bg-white rounded-bl-lg flex items-center justify-center overflow-y-scroll'>
                {data.description}
              </div>
            </div>
          </div>
          <div className='w-auto h-[253px] opacity-50 bg-rose-100 rounded-lg flex flex-col justify-center items-center relative'>
            <ThumbUpList users={users} />
          </div>
        </div>
        <button
          className='fixed bottom-6 py-4 bg-brand text-white w-full max-w-[390px] rounded-lg'
          onClick={() => {
            if (data.game_type === 1 || data.game_type === 3) {
              return navigate(
                `/games/${gameTypeFilter(data.game_type)}/${data.product_key}`
              )
            } else {
              alert('준비중입니다.')
            }
          }}
        >
          경쟁 참여하기
        </button>
      </main>
    </DefaultLayout>
  )
}
