import { useNavigate } from 'react-router-dom'

function TopRow() {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center px-[28px]'>
      <img src='/assets/DDip.svg' alt='DDip 로고' />

      {localStorage.getItem('token') === null && (
        <button
          className='text-white text-base h-5'
          onClick={() => navigate('/login')}
        >
          로그인
        </button>
      )}
    </div>
  )
}

export default TopRow
