type PageTitleProps = {
  children: React.ReactNode
}

function PageTitle({ children }: PageTitleProps) {
  return <h1 className='text-2xl'>{children}</h1>
}

export default PageTitle
