import PageTitle from 'components/common/pageTilte'
import ColorBlock from 'components/pages/Games/ColorBlock/ColorBlock'
import LabelList from 'components/pages/Games/ColorBlock/LabelList'
import DefaultLayout from 'layouts/DefaultLayout'

export default function ColorGame() {
  const profiles = [
    { name: '이지민', score: 12, profileImg: 'www' },
    { name: '이지금', score: 13, profileImg: 'www' },
    { name: '이지', score: 13, profileImg: 'www' },
    { name: '이금', score: 13, profileImg: 'www' },
  ]
  return (
    <DefaultLayout>
      <main className='min-h-screen bg-sky-50 p-8'>
        <div className='flex justify-between items-center mb-10'>
          <img src='/assets/color-circle.png' alt='' />
          <PageTitle>
            <p className='text-[#6091D5]'>
              색상이 다른 하나를 <br /> 빠르게 찾으세요!
            </p>
          </PageTitle>
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
