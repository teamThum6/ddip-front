import Header from 'components/common/Header'
import PageTitle from 'components/common/pageTilte'
import ColorBlock from 'components/pages/Games/ColorBlock/ColorBlock'
import LabelList from 'components/pages/Games/ColorBlock/LabelList'
import Countdown from 'components/pages/Games/Countdown'
import DefaultLayout from 'layouts/DefaultLayout'

export default function ColorGamePage() {
  const profiles = [
    { name: '이지민', score: 12, profileImg: 'www' },
    { name: '이지금', score: 13, profileImg: 'www' },
    { name: '이지', score: 13, profileImg: 'www' },
    { name: '이금', score: 13, profileImg: 'www' },
  ]

  const formatProgress = (cs: number) => {
    const seconds = Math.floor(cs / 100)

    return seconds
  }

  return (
    <DefaultLayout>
      <main className='h-[100vh] bg-sky-50 p-8'>
        <Header color='#6091D5' backgroundColor='' />
        <div className='flex justify-between items-center mb-10'>
          <img src='/assets/color-circle.png' alt='' />
          <PageTitle>
            <p className='text-[#6091D5]'>
              색상이 다른 하나를 <br /> 빠르게 찾으세요!
            </p>
          </PageTitle>
        </div>
        <div className='mb-[-30px]'>
          <Countdown seconds={'20'} progress={formatProgress(20) * 10} />
        </div>
        <div className='flex mb-10'>
          <LabelList profiles={profiles} />
        </div>
        <ColorBlock
          colorCodes={[
            '#A52121',
            '#A52121',
            '#A52121',
            '#A52121',
            '#A52121',
            '#A52121',
            '#A52121',
            '#A52121',
            '#A52121',
          ]}
        />
      </main>
    </DefaultLayout>
  )
}
