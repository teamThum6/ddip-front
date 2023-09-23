import { Route, Routes as ReactRoutes } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import CreatePage from 'pages/CreatePage'
import LocationSelectionPage from 'pages/LocationSelectionPage'
import SharonGamePage from 'pages/SharonGamePage'
import SharonGameResultPage from 'pages/SharonGameResultPage'
import TimeGamePage from 'pages/TimeGamePage'
import SuccessPage from 'pages/SuccessPage'
import FailurePage from 'pages/FailurePage'
import ColorGamePage from 'pages/ColorGamePage'
import DetailPage from 'pages/DetailPage'

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage />} />
      <Route path='/games/time' element={<TimeGamePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route
        path='/create/location-selection'
        element={<LocationSelectionPage />}
      />
      <Route path='/games/sharon/:id' element={<SharonGamePage />} />
      <Route
        path='/games/sharon/:id/result'
        element={<SharonGameResultPage />}
      />
      <Route path='/results/success' element={<SuccessPage />} />
      <Route path='/results/failure' element={<FailurePage />} />
      <Route path='/games/color-block' element={<ColorGamePage />} />
      <Route path='/detail' element={<DetailPage />} />
    </ReactRoutes>
  )
}

export default Routes
