interface ParticipantsProps {
  setParticipant: React.Dispatch<React.SetStateAction<boolean[]>>
  participant: boolean[]
}

const Participants = ({ setParticipant, participant }: ParticipantsProps) => {
  const participantHandler = (index: number) => {
    let star = [...participant]
    for (let i = 0; i < 5; i++) {
      star[i] = i <= index ? true : false
    }
    setParticipant(star)
  }

  return (
    <div className='flex space-x-7'>
      {[1, 2, 3, 4, 5].map((el, index) => (
        <div
          key={index}
          className={`w-6 h-6 text-black rounded-[50%] inline-flex justify-center items-center cursor-pointer ${
            participant[index] ? ' bg-brand' : 'bg-[#D9D9D9]'
          }`}
          onClick={() => participantHandler(index)}
        >
          {el}
        </div>
      ))}
    </div>
  )
}

export default Participants
