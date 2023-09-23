import { profileInfo } from 'types/user'
import Label from './Label'

interface LabelProps {
  profiles: profileInfo[]
}

export default function LabelList({ profiles }: LabelProps) {
  return (
    <div className='overflow-y-auto scroll'>
      <div className='flex gap-2 w-[432px]'>
        {profiles.map((profile) => (
          <Label {...profile} key={profile.name} />
        ))}
      </div>
    </div>
  )
}
