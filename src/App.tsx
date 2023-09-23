import { RecoilRoot } from 'recoil'

import Routes from 'routes'
import DefaultLayout from 'layouts/DefaultLayout'

const App = () => {
  return (
    <RecoilRoot>
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </RecoilRoot>
  )
}

export default App
