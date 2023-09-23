import ThumbUp from './ThumbUp'

interface TumbListProps {
  users: string[]
}

export default function ThumbUpList({ users }: TumbListProps) {
  return (
    <div className={`absolute `} style={{ bottom: -users.length * 25 }}>
      {users.map((user, i) => {
        if (i % 2) return <ThumbUp key={i} name={user} position={i} />
        else
          return (
            <ThumbUp
              key={i}
              name={user}
              position={i}
              transform={'scaleX(-1)'}
            />
          )
      })}
    </div>
  )
}
