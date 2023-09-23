interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <>
      <div className='text-lg font-semibold mb-3 text-left'>{title}</div>
      <div className='w-full'>{children}</div>
    </>
  )
}

export default Section
