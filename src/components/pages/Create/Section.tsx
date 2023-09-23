interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className='w-full'>
      <div className='mb-2 text-lg font-semibold'>{title}</div>
      {children}
    </div>
  )
}

export default Section
