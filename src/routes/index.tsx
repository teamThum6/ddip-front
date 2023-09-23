import { Route, Routes as ReactRoutes } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import CreatePage from 'pages/CreatePage'
import LoginPage from 'pages/LoginPage'
import SharonGamePage from 'pages/SharonGamePage'
import SharonGameResultPage from 'pages/SharonGameResultPage'
import TimeGameResultPage from 'pages/TimeGameResultPage'
import TimeGamePage from 'pages/TimeGamePage'
import SuccessPage from 'pages/SuccessPage'
import FailurePage from 'pages/FailurePage'
import ColorGame from 'pages/ColorGame'

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage />} />
      <Route path='/games/time' element={<TimeGamePage />} />
      <Route path='/games/result' element={<TimeGameResultPage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/games/sharon/:id' element={<SharonGamePage />} />
      <Route
        path='/games/sharon/:id/result'
        element={<SharonGameResultPage />}
      />
      <Route path='/results/success' element={<SuccessPage />} />
      <Route path='/results/failure' element={<FailurePage />} />
      <Route path='/games/color-block' element={<ColorGame />} />
    </ReactRoutes>
  )
}

export default Routes
