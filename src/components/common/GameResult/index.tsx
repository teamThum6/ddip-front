import { Children, createContext, isValidElement, useContext } from 'react'
import { getHexCodeSafety, hexToRgb } from 'utils/function'
import Header from '../Header'
import Spacing from 'layouts/Spacing'

type ProductComponent = React.ReactElement<ProductType>

type RankComponent = React.ReactElement<RankType>

type RankAreaComponent = React.ReactElement<RankAreaProps>

type GameResultAcceptableComponents = ProductComponent | RankAreaComponent

type ProductType = {
  /**
   * @description 띱 성공한 상품의 이미지 URL
   * @format - string [url]
   */
  image: string

  /**
   * @description 띱 성공한 상품의 이름
   * @format - string
   */
  name: string
}

type RankType = {
  /**
   * @description 게임 결과 순위
   * @format - number
   */
  rank: number

  /**
   * 본인 여부
   * @format - boolean
   */
  isMe?: boolean

  /**
   * @description 회원 프로필 이미지 URL
   * @format - string [url]
   */
  profileImage: string

  /**
   * @description 회원 이름
   * @format - string
   */
  name: string

  /**
   * @description 게임 결과 ( 우측에 렌더링 됨 )
   * @format - string
   */
  result: string
}

interface Props {
  /**
   * @description 결과 페이지의 테마를 결정하는 컬러 코드 값
   * @format - string [hexCode]
   */
  primeColor: string

  /**
   * 확인 버튼 클릭 이벤트 핸들링
   */
  onConfirm: React.MouseEventHandler<HTMLButtonElement>

  children?: GameResultAcceptableComponents | GameResultAcceptableComponents[]
}

const GameResultContext = createContext<
  Pick<Props, 'primeColor' | 'onConfirm'>
>({
  primeColor: '#ffffff',
  onConfirm: () => {},
})

function GameResult({ primeColor, onConfirm, children }: Props) {
  const safetyPrimeColor = getHexCodeSafety(primeColor)

  const validComponents = Children.toArray(children as any).filter(
    isValidElement
  )

  const productComponent = validComponents.find(
    (component) => component.type === GameResult.Product
  )

  if (!productComponent) {
    throw new Error('GameResult.Product 컴포넌트가 존재하지 않습니다.')
  }

  const rankAreaComponent = validComponents.find(
    (component) => component.type === GameResult.RankArea
  )

  if (!rankAreaComponent) {
    throw new Error('GameResult.RankArea 컴포넌트가 존재하지 않습니다.')
  }

  return (
    <GameResultContext.Provider
      value={{
        onConfirm,
        primeColor: safetyPrimeColor,
      }}
    >
      <main
        className={`h-[100vh]`}
        style={{
          backgroundColor: safetyPrimeColor,
        }}
      >
        <Header backgroundColor='' color='#fff' />
        <Spacing size={33} />
        {productComponent}
        <Spacing size={44} />
        {rankAreaComponent}
      </main>
    </GameResultContext.Provider>
  )
}

function Product({ image, name }: ProductType) {
  return (
    <div className='flex px-[26px]'>
      <img src={image} className='w-[100px] h-[100px] rounded-full' alt='' />
      <Spacing size={12} />
      <div className='pt-[19px]'>
        <p className='text-[24px] text-white leading-[30px]'>띱! 공짜 획득!</p>
        <Spacing size={4} />
        <p className='text-[24px] text-white leading-[30px] font-semibold'>
          {name}
        </p>
      </div>
    </div>
  )
}

interface RankAreaProps {
  children?: RankComponent | RankComponent[]
}

function RankArea({ children }: RankAreaProps) {
  const { primeColor, onConfirm } = useContext(GameResultContext)

  return (
    <div
      className='bg-white rounded-t-[40px] pt-8 pb-6'
      style={{
        minHeight: 'calc(100vh - 240px)',
      }}
    >
      <p className='text-[#3A3A3A] text-[24px] font-bold pl-[39px]'>순위 🏆</p>
      <Spacing size={21} />
      <div className='flex flex-col gap-4'>{children}</div>
      <Spacing size={16} />
      <Ad />
      <Spacing size={16} />
      <div className='px-[29px]'>
        <button
          onClick={onConfirm}
          className={`text-white w-full font-semibold rounded-[8px] py-[15px] leading-[20px]`}
          style={{
            backgroundColor: primeColor,
          }}
        >
          확인
        </button>
      </div>
    </div>
  )
}

function Rank({ isMe, rank, profileImage, name, result }: RankType) {
  const { primeColor } = useContext(GameResultContext)

  const [r, g, b] = hexToRgb(primeColor)

  const backgroundColor = isMe ? `rgba(${r}, ${g}, ${b}, 0.1)` : 'transparent'

  return (
    <div
      className='w-full h-16 py-[6px] pl-[31px] pr-[21px] flex items-center justify-between'
      style={{
        backgroundColor,
      }}
    >
      <div className='flex items-center gap-[18px]'>
        <p className={`text-[24px] text-[${primeColor}] font-bold`}>{rank}</p>
        <img
          src={profileImage}
          className='w-[52px] h-[52px] rounded-full'
          alt=''
        />
        <p className={`text-[20px] text-[#3a3a3a] font-semibold`}>{name}</p>
      </div>
      <p className={`text-[20px] text-[#3a3a3a] font-medium`}>{result}</p>
    </div>
  )
}

function Ad() {
  return (
    <div className='bg-[#D9D9D9] h-[94px] px-[13px] py-[10px] flex items-end justify-end mx-[29px] rounded-[10px]'>
      <p className='font-semibold'>AD</p>
    </div>
  )
}

GameResult.Product = Product
GameResult.RankArea = RankArea
GameResult.Rank = Rank

export default GameResult
