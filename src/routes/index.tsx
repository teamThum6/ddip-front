import { Route, Routes as ReactRoutes } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import CreatePage from 'pages/CreatePage'
import LocationSelectionPage from 'pages/LocationSelectionPage'
import TimeGamePage from 'pages/TimeGamePage'

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
    </ReactRoutes>
  )
}

export default Routes
