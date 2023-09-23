import { useRef, useState, ChangeEvent } from 'react'

interface ImageUploadBoxProps {
  setImgFile: React.Dispatch<React.SetStateAction<File | null>>
}

const ImageUploadBox = ({ setImgFile }: ImageUploadBoxProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [previewImage, setPreviewImage] = useState<string>('')

  const saveImgFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImgFile(file)
        setPreviewImage(reader.result as string)
      }
    }
  }

  const onUploadImageButtonClick = () => {
    if (!inputRef.current) {
      return
    }
    inputRef.current.click()
  }

  return (
    <div
      className='border border-solid border-[#3A3A3A] py-5 flex rounded-lg justify-center items-center text-[#3A3A3A] opacity-50 w-20 h-20 cursor-pointer'
      onClick={onUploadImageButtonClick}
    >
      {previewImage ? (
        <img
          className='font-medium text-[#3A3A3A] w-20 h-20'
          src={previewImage}
          alt='미리보기'
          style={{ maxWidth: '100px', maxHeight: '100px' }}
        />
      ) : (
        <>
          <img
            className='font-medium text-[#3A3A3A]'
            src='/assets/icons/photo.svg'
            alt='사진'
          />
          <input
            type='file'
            accept='image/*'
            id='profileImg'
            onChange={saveImgFile}
            ref={inputRef}
            className='hidden'
          />
        </>
      )}
    </div>
  )
}

export default ImageUploadBox
