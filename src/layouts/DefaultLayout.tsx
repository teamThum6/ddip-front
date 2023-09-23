interface DefaultLayoutProps {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return <div className='mx-auto max-w-[390px]'>{children}</div>
}
