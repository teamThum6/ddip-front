function Ellipse() {
  const multiple = 1.37179487179

  const width = document.body.clientWidth * multiple

  const restWidth = width - document.body.clientWidth

  const height = width / 1.58284023669

  const translateY = height * 0.186390532544

  return (
    <div
      style={{
        width,
        height,
        transform: `translate(-${restWidth / 2}px, -${translateY}px)`,
        left: 0,
        top: 0,
      }}
      className='bg-brand rounded-[100%] absolute -z-10'
    />
  )
}

export default Ellipse
