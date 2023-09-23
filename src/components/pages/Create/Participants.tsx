import { useState } from 'react'

const Participants = () => {
  const [score, setScore] = useState([false, false, false, false, false])

  const starScore = (index: number) => {
    let star = [...score]
    for (let i = 0; i < 5; i++) {
      star[i] = i <= index ? true : false
    }
    setScore(star)
  }

  return (
    <div className='flex space-x-7'>
      {[1, 2, 3, 4, 5].map((el, index) => (
        <div
          key={index}
          className={`w-6 h-6 text-black rounded-[50%] inline-flex justify-center items-center cursor-pointer ${
            score[index] ? ' bg-brand' : 'bg-[#D9D9D9]'
          }`}
          onClick={() => starScore(index)}
        >
          {el}
        </div>
      ))}
    </div>
  )
}

export default Participants
