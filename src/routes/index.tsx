import { Route, Routes as ReactRoutes } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import CreatePage from 'pages/CreatePage'
import LocationSelectionPage from 'pages/LocationSelectionPage'
import SharonGamePage from 'pages/SharonGamePage'
import SharonGameResultPage from 'pages/SharonGameResultPage'

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage />} />
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
    </ReactRoutes>
  )
}

export default Routes
