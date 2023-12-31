import Carousel from 'components/pages/Main/Carousel'
import CategorySelect from 'components/pages/Main/CategorySelect'
import CurrentLocation from 'components/pages/Main/CurrentLocation'
import Ellipse from 'components/pages/Main/Ellipse'
import GameItem from 'components/pages/Main/GameItem'
import DDip from 'components/pages/Main/DDip'
import TopRow from 'components/pages/Main/TopRow'
import Spacing from 'layouts/Spacing'
import { useState, useEffect } from 'react'
import * as productApi from 'apis/product'

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>()
  const [productList, setProductList] = useState<any>()

  const fetchProductList = async () => {
    const res = await productApi.fetchProductList()

    setProductList(res)
  }

  useEffect(() => {
    fetchProductList()
  }, [])

  if (!productList) return <></>

  return (
    <>
      <div className='relative pt-[23px] pb-[109px] overflow-hidden'>
        <Ellipse />
        <TopRow />
        <Spacing size={15} />
        <CurrentLocation />
        <Spacing size={50} />
        <Carousel>
          <Carousel.Item />
          <Carousel.Item />
          <Carousel.Item />
          <Carousel.Item />
          <Carousel.Item />
        </Carousel>
        <Spacing size={33} />
        <div className='px-[28px]'>
          <p className='pl-[7px] text-[18px] font-semibold'>카테고리</p>
          <Spacing size={10} />
          <CategorySelect
            value={selectedCategory}
            onChange={setSelectedCategory}
          >
            <CategorySelect.Item value={0}>🔥 인기</CategorySelect.Item>
            <CategorySelect.Item value={1}>🍪 음식</CategorySelect.Item>
            <CategorySelect.Item value={2}>🛁 생활</CategorySelect.Item>
            <CategorySelect.Item value={3}>👕 의류</CategorySelect.Item>
            <CategorySelect.Item value={4}>💻 전자기기</CategorySelect.Item>
            <CategorySelect.Item value={5}>🖋️ 사무용품</CategorySelect.Item>
            <CategorySelect.Item value={6}>📚 도서</CategorySelect.Item>
          </CategorySelect>

          <Spacing size={24} />
          <ul className='flex flex-wrap gap-x-4 gap-y-[14px]'>
            {productList
              .filter((el: any) =>
                selectedCategory ? selectedCategory === el.category_key : 1
              )
              .map((el: any) => (
                <GameItem el={el} />
              ))}
          </ul>
        </div>
      </div>
      <DDip />
    </>
  )
}

export default MainPage
