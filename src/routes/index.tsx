import { Route, Routes as ReactRoutes } from 'react-router-dom'

import MainPage from 'pages/MainPage'
import CreatePage from 'pages/CreatePage'
import LocationSelectionPage from 'pages/LocationSelectionPage'
import LoginPage from 'pages/LoginPage'

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<MainPage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route
        path='/create/location-selection'
        element={<LocationSelectionPage />}
      />
      <Route path='/login' element={<LoginPage />} />
    </ReactRoutes>
  )
}

export default Routes
