import { Route, Routes as ReactRoutes } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import ColorGame from 'pages/ColorGame'

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage />} />
      <Route path='/games/color-block' element={<ColorGame />} />
    </ReactRoutes>
  )
}

export default Routes
